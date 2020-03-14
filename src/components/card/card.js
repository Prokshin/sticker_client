import React from "react";
import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Card = props => {
  return (
    <div className="сard">
      <div className="card__title">Футбольный матч</div>
      <div>
        <FontAwesomeIcon icon={faUserCircle} />
        <span className="card__author">Иван Иванов</span>
      </div>
    </div>
  );
};

export default Card;
