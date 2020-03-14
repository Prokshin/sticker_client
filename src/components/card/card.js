import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Card = props => {
  return (
    <div className="сard">
      <div className="card__title">{props.title}</div>
      <div>
        <FontAwesomeIcon icon={faUserCircle} />
  <span className="card__author">{props.text}</span>
      </div>
    </div>
  );
};

export default Card;
