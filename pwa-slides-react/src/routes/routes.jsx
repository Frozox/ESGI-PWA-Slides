import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {PresentationPage} from "../pages/PresentationPage";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path={`/presentation/:id`} element={<PresentationPage />} />
    </Routes>
  )
}