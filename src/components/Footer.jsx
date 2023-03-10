import React from "react";
import logo from "../assets/logofooter.png";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_kasa">
        <p className="footer_k">K</p>
        <img src={logo} className="footer_img" alt="logo" />
        <p className="footer_s">s</p>
        <p className="footer_a">a</p>
      </div>
      <p className="footer_text"> © 2023 Kasa. All rights reserved</p>
    </footer>
  );
}
