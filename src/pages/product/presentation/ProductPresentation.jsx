import React from "react";
import "./Product.scss";

const buttonStyle = {
  borderRadius: "inherit",
  height: "100%",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%"
};

const getUnavailableImage = (name) => (
  <img
    className={"product__placeholder"}
    src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
    alt={`Produto ${name}`}
    title={name}
  />
);

const getProductImage = (image, name) => {
  return (
    <figure className="single__product-image">
      {image ? (
        <img src={image} alt={`Produto ${name}`} title={name} />
      ) : (
        getUnavailableImage(name)
      )}
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

function Product({ product, setSelectedSize, selectedSize, addToCart }) {
  if (!product) {
    return null;
  }

  return (
    <div className="single-product">
      {getProductImage(product.image, product.name)}
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
        <div className="product__actions">
          <button
            type="button"
            className="product__add-to-cart"
            onClick={addToCart}
            disabled={!selectedSize}
          >
            Adicionar à Sacola
            <canvas height="0" width="0" style={buttonStyle}></canvas>
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {};

export default Product;
