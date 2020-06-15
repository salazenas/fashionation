import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleCart, toggleSearch, toggleFavorites } from "../../actions/app";

import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          2020 Fashionista - Created by Fábio Borges Júnior
        </p>
        <div className="footer__icons">
          <a className="footer__icon" href="https://github.com/salazenas">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            className="footer__icon"
            href="https://www.linkedin.com/in/fabioborgesjr/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  toggleCart,
  toggleSearch,
  toggleFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
