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
        <form id={"formLogin"} onSubmit={ handleLogin }>

            <input type="email" name="login" placeholder="Nom d'utilisateur" aria-label="Login" autoComplete={"nickname"} required/>
            <input type="password" name="password" placeholder="Mot de passe" aria-label="Password" autoComplete={"current-password"} required/>
            <fieldset>
                <label htmlFor="remember">
                    <input type="checkbox" role="switch" id="remember" name="remember"/>
                    Se souvenir de moi
                </label>
            </fieldset>
            <button type="submit" className="contrast">Connexion</button>

        </form>
    )
}