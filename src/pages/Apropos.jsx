import React from "react";
import Collapse from "../components/Collapse";
import collapseInformation from "../collapse/collapse.json";
import background_apropos from "../assets/bg.jpg";
import "../style/apropos.css";

function Apropos() {
  return (
    <>
      <div className="background">
        <img
          className="background_apropos"
          src={background_apropos}
          alt="background a propose"
        />
      </div>
      <div className="collapses">
        {collapseInformation.map((collapse, index) => (
          <Collapse key={index} title={collapse.title}>
            <p>{collapse.description}</p>
          </Collapse>
        ))}
      </div>
    </>
  );
}

export default Apropos;
