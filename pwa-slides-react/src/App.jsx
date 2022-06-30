import '@picocss/pico'
import React from 'react'
import AppRegister from './Component/app-register'
import AppLogin from './Component/app-login'
import { getUser, getAuthState } from "./firebase/firebase.js";

function App() {

    let isUserLogged = getUser();

    getAuthState((user) => {
      isUserLogged = user;
  
      if (isUserLogged) {
        const queryString = new URLSearchParams(location.search);
        console.log(isUserLogged);
        //return page(queryString.get("from") || location.pathname);
      }
      //page(`/login?from=${location.pathname}`);
    });
    
    return (
        <>
            <main className="container" >
                <h1> Hello, world! </h1>
                <p> This is a PicoCSS demo. </p>
                <AppRegister />
                <AppLogin />
            </main>
        </>
    )
}

export default App