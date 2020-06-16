import React from "react";
import "./Product.scss";
import Quantity from "../../../components/quantity/Quantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonStyle = {
  borderRadius: "inherit",
  height: "100%",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
};

const handleChangeFavorite = (evt, callback) => {
  callback();

  evt.stopPropagation();
};

const getFavoriteIcon = (isFavorite, changeFavorite) => {
  return (
    <div>
      <FontAwesomeIcon
        className="product__icon"
        icon={[isFavorite ? "fas" : "far", "heart"]}
        onClick={(evt) => handleChangeFavorite(evt, changeFavorite)}
      />
    </div>
  );
};

const getUnavailableImage = (name) => (
  <img
    className={"product__placeholder"}
    src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
    alt={`Produto ${name}`}
    title={name}
  />
);

const getProductImage = (image, name, isFavorite, changeFavorite) => {
  return (
    <figure className="single__product-image">
      {image ? (
        <img src={image} alt={`Produto ${name}`} title={name} />
      ) : (
        getUnavailableImage(name)
      )}
      <div className="product__favorite">
        {getFavoriteIcon(isFavorite, changeFavorite)}
      </div>
    </figure>
  );
};

const getSizes = (sizes, setSelectedSize, selectedSize) => {
  return sizes.map((size, index) => (
    <button
      key={index}
      type="button"
      className={`product__filter ${
        selectedSize === size.size ? "product__filter--selected" : ""
      }`}
      disabled={!size.available}
      onClick={() => setSelectedSize(size.size)}
    >
      {size.size}
      <canvas height="0" width="0" style={buttonStyle} />
    </button>
  ));
};

function ProductPresentation({
  product,
  setSelectedSize,
  selectedSize,
  addToCart,
  customQuantity,
  setCustomQuantity,
  changeFavorite,
}) {
  if (!product) {
    return null;
  }

  return (
    <div className="single-product">
      {getProductImage(product.image, product.name, product.isFavorite, () =>
        changeFavorite(product.code_color)
      )}
      <div className="product__content">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__pricing">
          <span className="product__price product__price--to">
            {product.actual_price}
          </span>
          <span className="product__price product__price--installments">
            em {product.installments}
          </span>
        </div>
        <div className="product__sizes">
          <p className="product__sizes__title">Escolha o tamanho</p>
          <div className="product__btn-group">
            {getSizes(product.sizes, setSelectedSize, selectedSize)}
          </div>
        </div>
        <div className="product__quantity">
          <p className="product__quantity__title">Escolha a quantidade</p>
          <Quantity
            value={customQuantity}
            onClickMinus={() => setCustomQuantity(customQuantity - 1)}
            onClickPlus={() => setCustomQuantity(customQuantity + 1)}
          />
        </div>
        <div className="product__actions">
          <button
            type="button"
            className="product__add-to-cart"
            onClick={addToCart}
            disabled={!selectedSize || !customQuantity}
          >
            Adicionar à Sacola
            <canvas height="0" width="0" style={buttonStyle}></canvas>
          </button>
        </div>
      </div>
    </div>
  );
}

ProductPresentation.propTypes = {};

export default ProductPresentation;
