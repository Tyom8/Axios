import { useEffect, useRef } from "react";
import API, { setOutToken } from "../../Services/Api/Api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    const loginRef = useRef();
    const passRef = useRef();
    const [err, setErr] = useState("");

    useEffect(()=> {
        const token = localStorage.getItem("token");
        if(token) {
            setOutToken(token);
            navigate("/");
        }
    },[])

    const loginFn = (event) => {
        event.preventDefault();
        setErr("");
        API.post("/login/", {
            "email": loginRef.current.value,
            "password": passRef.current.value
        })
            .then((res) => {
                if (res.data.access) {
                    localStorage.setItem("token", res.data.access);
                    setOutToken(res.data.access);
                    navigate("/")
                }
            })
            .catch((error) => setErr(error.response.data.message))
    }
        return (
            <div className="formDiv">
                <form className="Form" onSubmit={loginFn}>
                    <label>Login</label>
                    <input ref={loginRef} type="email"></input>
                    <label>Password</label>
                    <input ref={passRef} type="password"></input>
                    <button type="submit">Login</button>
                    <Link to={'/register'}>Register</Link>
                </form>
                {err && <h5>{err}</h5>}
            </div>
        )
}