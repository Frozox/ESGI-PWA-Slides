import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {PresentationPage} from "../pages/PresentationPage";
import {LoginPage} from "../pages/LoginPage";
import {RegisterPage} from "../pages/RegisterPage";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path={`/presentation/:id`} element={<PresentationPage />} />
    </Routes>
  )
}