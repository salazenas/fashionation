import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="app__container">
        <div className="header__context">
          <div className="header__icons">
            <button type="button" className="header__icons--back">
              <FontAwesomeIcon icon={"arrow-left"} />
            </button>
          </div>
          <div className="header__title">Sacola (3)</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
