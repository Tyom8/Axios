import { useRef } from "react";
import API from "../Services/Api/Api";

function Toshnie() {
    const emailRef = useRef();
    const passRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const genderRef = useRef();
    const phoneRef = useRef();

    const formFn = (event) => {
        event.preventDefault();
        API.post("/register/", {
            "email": emailRef.current.value,
            "first_name": firstNameRef.current.value,
            "last_name": lastNameRef.current.value,
            "password": passRef.current.value,
            "phone_number": phoneRef.current.value,
            "image": "undefined.webp",
            "gender": genderRef.current.value
        })
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error))
    }

    return (
        <form className="Form" onSubmit={formFn}>
            <label>First Name</label>
            <input ref={firstNameRef} type="text"></input>
            <label>Last Name</label>
            <input ref={lastNameRef} type="text"></input>
            <select ref={genderRef}>
                <option name="male">Male</option>
                <option name="male">Female</option>
            </select>
            <label>Email</label>
            <input ref={emailRef} type="email"></input>
            <label>Password</label>
            <input ref={passRef} type="password"></input>
            <label>Phone-Number</label>
            <input ref={phoneRef} type="text"></input>
            <button type="submit">Register</button>
        </form>
    )
}

export default Toshnie;