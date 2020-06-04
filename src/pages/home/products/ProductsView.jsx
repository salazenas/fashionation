import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./ProductsView.scss";

function ProductsView({ catalog }) {
  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title">{catalog.length}</div>
        <div className="products_grid">
          {catalog.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsView.propTypes = {};

export default ProductsView;
