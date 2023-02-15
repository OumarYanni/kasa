import React from "react";
import "./index.css";
//import "./style/app.css";
import Home from "./pages/Home";
//import Apropos from "./pages/Apropos";
//import Logement from "./pages/Logement";
import { Routes, Route } from "react-router-dom";
//import Untraceable from "./pages/Untraceable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/products:id" element={<Logement />} />
        <Route path="*" element={<Untraceable />} />
      </Routes>
    </>
  );
}

export default App;
