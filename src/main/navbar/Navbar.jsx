import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleCart, toggleSearch, toggleFavorites } from "../../actions/app";
import { getItemsQuantity } from "../../modules/helpers/cart";

import "./Navbar.scss";

const Navbar = (props) => {
  return (
    <header className="header">
      <Link to="/home">
        <img
          className="header__brand"
          src="../logo/small.png"
          alt="Fashionista logo"
        />
      </Link>
      <div className="header__default">
        <div className="header__icons">
          <button
            type="button"
            className="header__icons--favorites"
            onClick={props.toggleFavorites}
          >
            <FontAwesomeIcon icon="heart" />
          </button>
          <button
            type="button"
            className="header__icons--search"
            onClick={props.toggleSearch}
          >
            <FontAwesomeIcon icon="search" />
          </button>
          <button
            type="button"
            className="header__icons--cart"
            onClick={props.toggleCart}
          >
            <FontAwesomeIcon icon="shopping-cart" />
            <sup className="counter">
              <span className="counter__value">
                {getItemsQuantity(props.cart.items)}
              </span>
            </sup>
          </button>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {};

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  toggleCart,
  toggleSearch,
  toggleFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
