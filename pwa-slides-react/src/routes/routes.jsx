import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {PresentationPage} from "../pages/PresentationPage";
import AppLogin from "../components/AppLogin";
import AppRegister from "../components/AppRegister";

export const MyRoutes = (network) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage network={network}/>} />
      <Route path="/register" element={<AppRegister />} />
      <Route path="/login" element={<AppLogin />} />
      <Route path={`/presentation/:id`} element={<PresentationPage />} />
    </Routes>
  )
}