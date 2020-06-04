import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import Badge from "../../../components/badge/Badge";

const showDiscount = (value) => {
  if (!value.length) return null;

  return <Badge value={`-${value}`} />;
};

const getUnavailableImage = (name) => (
  <img
    className={"product__placeholder"}
    src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
    alt={`Produto ${name}`}
    title={name}
  />
);

const getProductImage = (image, name, discount) => {
  return (
    <figure className="product__image">
      {showDiscount(discount)}
      {image ? (
        <img src={image} alt={`Produto ${name}`} title={name} />
      ) : (
        getUnavailableImage(name)
      )}
      <div class="product__info">
        <a
          href={`product/${formatNameToUrlFormat(name)}`}
          class="movie-poster-link"
        >
          <i class="product__info-icon icon-eye"></i>
        </a>
      </div>
    </figure>
  );
};

const getPriceOnSale = (regular_price, actual_price) => {
  return (
    <div className="product__pricing">
      <span className="product__price product__price--from">
        {regular_price}
      </span>
      <span className="product__price product__price--to">{actual_price}</span>
    </div>
  );
};

const getPrice = (price) => {
  return (
    <div className="product__pricing">
      <span className="product__price product__price--to">{price}</span>
    </div>
  );
};

const formatNameToUrlFormat = (name) => {
  return name.toLowerCase().replace(" ", "-");
};

const Product = (props) => {
  return (
    <div className="products__box">
      <a href={`product/${formatNameToUrlFormat(props.name)}`}>
        {/* <div className="product__image-container"> */}
        {getProductImage(props.image, props.name, props.discount_percentage)}
        {/* </div> */}
        <h3 className="product__name">{props.name}</h3>
        {props.on_sale
          ? getPriceOnSale(props.regular_price, props.actual_price)
          : getPrice(props.regular_price)}
      </a>
    </div>
  );
};

Product.propTypes = {};

export default Product;
