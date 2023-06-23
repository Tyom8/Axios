import { useRef } from "react";
import API from "../Services/Api/Api";

function Register() {
    const emailRef = useRef();
    const passRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const genderRef = useRef();
    const phoneRef = useRef();

    const formFn = (event) => {
        event.preventDefault();

        API.post("/register/", {
            "email":"amos1@gmail.com",
            "first_name":"Zhenya",
            "last_name":"Hambaryan",
            "password":"55555",
            "phone_number":"+37498888888",
            "image":"/media/smiley-559124_640_1_lo6Wrap.webp",
            "gender":"female"  
        },{
            headers:{
                Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ1ODA0MjM3LCJpYXQiOjE2ODU4MDQyMzcsImp0aSI6IjAwMjNkMTA4MzI4ODQyY2FiODJiYmIwYTZmMzliYWVhIiwidXNlcl9pZCI6Mn0.iOgE79xyj97rOBmDF1VV_C6x_gI5NrRq4bfpMgY48jc"
            }
        }).then((res) => {
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

export default Register;