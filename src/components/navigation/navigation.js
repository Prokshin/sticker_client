/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__block">
        <div className="navigation__logo">Stickers</div>
        <div className="navigation__user">
          <FontAwesomeIcon icon={faUser} />
          <a href="#" className="navigation__login">
            Иван Иванов
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
