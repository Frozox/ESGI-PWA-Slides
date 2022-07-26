import { MyRoutes } from './routes/routes';
import { useNavigate } from "react-router-dom";
import { getUser, getAuthState } from "./firebase/firebase.js";

function App() {


  const navigate = useNavigate();

  let isUserLogged = getUser();
  getAuthState((user) => {
    isUserLogged = user;
    if (isUserLogged) {
      const queryString = new URLSearchParams(location.search);
      //console.log(queryString);
      //return page(queryString.get("from") || location.pathname);
    }else{
      console.log('ya rien');
    }
    //page(`/login?from=${location.pathname}`);
  });

  //databaseConnected();

  return (
    <MyRoutes />
  );
}

export default App