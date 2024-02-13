import React from "react";
import { Routes, Route } from "react-router-dom";
import MissionList from "./pages/MissionList/index";
import CharacterList from "./pages/CharacterList/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/MissionList" element={<MissionList />} />
    </Routes>
  );
}

export default App;
