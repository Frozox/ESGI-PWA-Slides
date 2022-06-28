import React from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../firebase/firebase.js";

export default function AppLogin() {
    //const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input[type=email]").value;
        const pwd = e.target.querySelector("input[type=password]").value;

        const user = createUser(email, pwd);
        if (user) {
            //navigate("/");
            console.log("Created user");
        }
    }
    return ( 
        <form onSubmit={ handleLogin }>
            <input type = "email" />
            <input type = "password" />
            <button> Register </button> 
        </form>
    )
    customElements.define("app-login", AppLogin);
}