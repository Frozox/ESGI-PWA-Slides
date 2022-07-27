import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../firebase/firebase.js";

export default function AppRegister() {
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input[type=email]").value;
        const pwd = e.target.querySelector("input[type=password]").value;

        const user = createUser(email, pwd);
        if (user) {
            //console.log(user);
            //addUserRealTimeBDD(email, pwd);
            console.log("Created user");
            navigate("/");
        }
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <form id={"formRegister"} onSubmit={handleRegister}>

                <input type="email" name="login" placeholder="Nom d'utilisateur" aria-label="Login" autoComplete={"nickname"} required />
                <input type="password" name="password" placeholder="Mot de passe" aria-label="Password" autoComplete={"current-password"} required />
                <button type="submit" className="contrast">S'inscrire</button>

            </form>
        </Suspense>
    )
}