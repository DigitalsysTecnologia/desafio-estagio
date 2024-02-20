import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export { RoutesMain };
