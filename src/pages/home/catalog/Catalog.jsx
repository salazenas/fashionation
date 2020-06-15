import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./Catalog.scss";

function Catalog({ products, active }) {
  return (
    <section className="products" style={{ display: active ? "flex" : "none" }}>
      <div className="products_grid">
        {products.map((product, index) => (
          <Item key={index} {...product} />
        ))}
      </div>
    </section>
  );
}

Catalog.propTypes = {
  products: PropTypes.array,
};

Catalog.defaultProps = {
  products: [],
};

export default Catalog;
