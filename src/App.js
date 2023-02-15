import React from "react";
import "./index.css";
import "./style/app.css";
import home from "./pages/home";
import aPropos from "./pages/aPropos";
import logement from "./pages/logement";
import { Routes, Route } from "react-router-dom";
import untraceable from "./pages/untraceable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/aPropos" element={<aPropos />} />
        <Route path="/products:id" element={<logement />} />
        <Route path="*" element={<untraceable />} />
      </Routes>
    </>
  );
}

export default App;
