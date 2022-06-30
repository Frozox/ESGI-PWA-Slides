import React from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../firebase/firebase.js";

export default function AppLogin() {
    //const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input[type=email]").value;
        const pwd = e.target.querySelector("input[type=password]").value;
        const user = signIn(email, pwd);
        if (user) {
            //navigate("/");
            //addUserRealTimeBDD(email, pwd);

            console.log("User Login");
        }
    }
    return ( 
        <form onSubmit={ handleLogin }>
            <input type = "email" />
            <input type = "password" />
            <button> Login </button> 
        </form>
    )
    customElements.define("app-register", AppRegister);
}