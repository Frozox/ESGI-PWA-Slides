/* Import React */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

/* Import assets */
import '@picocss/pico'
import 'flexboxgrid'
import './css/index.css'
import './css/login.css'
import 'react-trumbowyg/dist/trumbowyg.min.css';

/* Import components */
import App from './App'

import { getUser, getAuthState } from "./firebase/firebase.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
