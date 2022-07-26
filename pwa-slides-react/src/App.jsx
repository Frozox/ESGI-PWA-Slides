import {MyRoutes} from './routes/routes';
import { useNavigate } from "react-router-dom";
import { getUser, getAuthState, databaseConnected } from "./firebase/firebase.js";

function App(network) {

    
const navigate = useNavigate();

let isUserLogged = getUser();

getAuthState((user) => {
  isUserLogged = user;

  if (isUserLogged) {
    const queryString = new URLSearchParams(location.search);
    //console.log(isUserLogged);
  }else{
    //navigate("/login");
  }
});

databaseConnected();

  return (
    <MyRoutes network={network}/>
  );
}

export default App