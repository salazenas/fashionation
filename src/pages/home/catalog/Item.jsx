import React, { useCallback, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { formatNameToUrlFormat } from "../../../modules/helpers/catalog";
import { changeFavorite } from "../../../actions/catalog";
import Badge from "../../../components/badge/Badge";

import "./Item.scss";

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

const getProductImage = (
  image,
  name,
  discount,
  isFavorite,
  changeFavorite,
  callProductPage,
  favContainerElm
) => {
  return (
    <figure className="product__image">
      {showDiscount(discount)}
      {image ? (
        <img src={image} alt={`Produto ${name}`} title={name} />
      ) : (
        getUnavailableImage(name)
      )}
      {getProductInfo(
        name,
        isFavorite,
        changeFavorite,
        callProductPage,
        favContainerElm
      )}
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

const handleProductClick = (
  evt,
  name,
  changeFavorite,
  callProductPage,
  favContainerElm
) => {
  if (favContainerElm.current.contains(evt.target)) {
    changeFavorite(name);

    evt.stopPropagation();
  } else {
    callProductPage();
  }
};

const getFavoriteIcon = (isFavorite, favContainerElm) => {
  return (
    <div ref={favContainerElm}>
      <FontAwesomeIcon
        className="product__icon"
        icon={[isFavorite ? "fas" : "far", "heart"]}
      />
    </div>
  );
};

const getProductInfo = (
  name,
  isFavorite,
  changeFavorite,
  callProductPage,
  favContainerElm
) => {
  return (
    <div
      onClick={(evt) =>
        handleProductClick(
          evt,
          name,
          changeFavorite,
          callProductPage,
          favContainerElm
        )
      }
      className="product__info"
    >
      <div className="product__icons">
        {getFavoriteIcon(isFavorite, favContainerElm)}
      </div>
    </div>
  );
};

const Item = (props) => {
  const history = useHistory();
  const favContainerElm = useRef();
  const callProductPage = useCallback(() => {
    history.push(`product/${formatNameToUrlFormat(props.name)}`);
  }, [history, props.name]);

  return (
    <div className="products__box">
      {getProductImage(
        props.image,
        props.name,
        props.discount_percentage,
        props.isFavorite,
        props.changeFavorite,
        callProductPage,
        favContainerElm
      )}
      <h3 className="product__name">{props.name}</h3>
      {props.on_sale
        ? getPriceOnSale(props.regular_price, props.actual_price)
        : getPrice(props.regular_price)}
    </div>
  );
};

Item.propTypes = {};

const mapDispatchToProps = {
  changeFavorite
};

export default connect(null, mapDispatchToProps)(Item);
