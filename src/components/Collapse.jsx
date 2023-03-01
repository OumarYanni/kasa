import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../style/collapses.css";

function Collapse({ title, children, isOpen = false }) {
  const [visible, setVisible] = useState(isOpen);

  const display = () => {
    setVisible(!visible);
  };

  return (
    <section className="collapse_section">
      <div className="collapse_title">
        <h2 className="title">{title && title}</h2>
        <p onClick={display} className="icon">
          {visible ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </p>
      </div>
      <div className="collapse_description">
        {visible && <div className="info_description">{children}</div>}
      </div>
    </section>
  );
}

export default Collapse;
