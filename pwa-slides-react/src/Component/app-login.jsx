import React from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signInWithGithub, addUserRealTimeBDDGithub } from "../firebase/firebase.js";

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

    const handleLoginGithub = (e) => {
        e.preventDefault();
        const user = signInWithGithub();
        if (user) {
            //navigate("/");
            addUserRealTimeBDDGithub();
            //console.log(user);
            console.log("User Login");
        }
    }
    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="email" />
                <input type="password" />
                <button> Login </button>
            </form>

            <a onClick={handleLoginGithub} href="https://myges-slide.firebaseapp.com/__/auth/handler">Login with Github</a>
        </>
    )
    customElements.define("app-register", AppRegister);
}