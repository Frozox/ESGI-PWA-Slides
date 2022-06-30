import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
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
    <App network={NETWORK_STATE} />
  </React.StrictMode>
)
