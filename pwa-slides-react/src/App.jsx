import { MyRoutes } from './routes/routes';
import { getUser, getAuthState } from "./firebase/firebase.js";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let isUserLogged = getUser();
  getAuthState((user) => {
    isUserLogged = user;
    if (isUserLogged) {
      console.log("User logged");
    }else{
      navigate("/login");
    }
  });

  return (
    <MyRoutes />
  );
}

export default App