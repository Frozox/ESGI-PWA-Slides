import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signInWithGithub } from "../firebase/firebase.js";

export default function AppLogin() {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input[type=email]").value;
        const pwd = e.target.querySelector("input[type=password]").value;
        const user = signIn(email, pwd);
        if (user) {
            console.log(user);
            navigate("/");
            //addUserRealTimeBDD(email, pwd);
            //console.log("User Login");
        }
    }

    const handleLoginGithub = (e) => {
        e.preventDefault();
        const user = signInWithGithub();
        console.log(user);
        if (user) {
            navigate("/");
            //addUserRealTimeBDDGithub();
            console.log(user);
            console.log("User Login");
        }
    }
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <form onSubmit={handleLogin}>
                    <input type="email" />
                    <input type="password" />
                    <button> Login </button>
                </form>

                <a onClick={handleLoginGithub} href="https://myges-slide.firebaseapp.com/__/auth/handler">Login with Github</a>
            </Suspense>
        </>
    )
}