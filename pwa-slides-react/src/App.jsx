import { MyRoutes } from './routes/routes';
import { getUser, getAuthState } from "./firebase/firebase.js";

function App() {

  let isUserLogged = getUser();
  getAuthState((user) => {
    isUserLogged = user;
    if (isUserLogged) {
      console.log("User logged");
    }else{
      console.log('ya rien');
    }
  });

  return (
    <MyRoutes />
  );
}

export default App