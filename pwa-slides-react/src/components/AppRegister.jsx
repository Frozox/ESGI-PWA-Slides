import React from "react";
import { useNavigate } from "react-router-dom";
import { createUser, addUserRealTimeBDD } from "../firebase/firebase.js";

export default function AppRegister() {
    //const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input[type=email]").value;
        const pwd = e.target.querySelector("input[type=password]").value;

        const user = createUser(email, pwd);
        if (user) {
            console.log(user);
            addUserRealTimeBDD(email, pwd);
            console.log("Created user");
            navigate("/");
        }
    }
    return ( 
        <form onSubmit={ handleRegister }>
            <input type = "email" />
            <input type = "password" />
            <button> Register </button> 
        </form>
    )
    customElements.define("AppRegister", AppRegister);
}