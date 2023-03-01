import React from "react";
import { useParams } from "react-router-dom";
import "../style/logement.css";
import Tags from "../components/Tags";
import Rate from "../components/Rate";
import Untraceable from "../pages/Untraceable";
import { Carrousel } from "../components/Carrousel";
import "../style/collapses.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Collapse from "../components/Collapse";
import productsList from "../products/products.json";

function Logement() {
  const [visible, setVisible] = useState(false);
  const display = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  const { id } = useParams();
  console.log(id);

  const product = productsList.find((p) => p.id === id);
  if (!product) {
    return <Untraceable />;
  }

  console.log(product);

  return (
    <>
      <Carrousel product={product} />
      <div className="tags_host_rate">
        <div className="tags">
          <Tags product={product} />
        </div>
        <div className="host_rate">
          <div className="host">
            <p className="host_name">{product.host.name}</p>
            <img
              src={product.host.picture}
              alt={product.host.name}
              className="host_picture"
            />
          </div>
          <Rate product={product} />
        </div>
      </div>
      <div className="collapses">
        <Collapse title="Description" isOpen="true">
          <p>{product.description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            {product.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}
export default Logement;
