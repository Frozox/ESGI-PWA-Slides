import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import AppPresentation from "../components/AppPresentation";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`/presentation/:id`} element={<AppPresentation />} />
    </Routes>
  )
}