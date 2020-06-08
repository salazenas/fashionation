import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "./ProductsView.scss";

function ProductsView({ products }) {
  return (
    <section className="products">
      <div className="app__container">
        <div className="header__title">{products.length}</div>
        <div className="products_grid">
          {products.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

ProductsView.propTypes = {
  products: PropTypes.array
};

ProductsView.defaultProps = {
  products: []
};

export default ProductsView;
