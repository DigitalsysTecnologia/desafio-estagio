import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { MainPage } from "../pages/Main";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export { RoutesMain };
