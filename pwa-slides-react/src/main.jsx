/* Import React */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

/* Import assets */
import '@picocss/pico'
import 'flexboxgrid'
import './index.css'
import 'react-trumbowyg/dist/trumbowyg.min.css';

/* Import components */
import App from './App'
import checkConnectivity from "network-latency";


checkConnectivity({
  timeToCount: 3,
  threshold: 2000,
  interval: 3000,
});

let NETWORK_STATE = true;

document.addEventListener("connection-changed", ({ detail: state }) => {
  NETWORK_STATE = state;
  //console.log(NETWORK_STATE);

  if (state) {
    document.documentElement.style.setProperty("--app-bg-color", "royalblue");
  } else {
    document.documentElement.style.setProperty("--app-bg-color", "#858994");
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App network={NETWORK_STATE}/>
    </BrowserRouter>
  </React.StrictMode>
)
