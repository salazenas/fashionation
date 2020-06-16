import React from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart";
import { getItemsTotalPrice } from "../../modules/helpers/cart";
import { Link } from "react-router-dom";
import Quantity from "../../components/quantity/Quantity";
import "../home/catalog/Item.scss";
import "./Cart.scss";

const getEmptyCart = () => {
  return <span className="cart__empty">Sua sacola está vazia (◠︿◠✿)</span>;
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
    <figure className="product__image">
      {image ? (
        <img src={image} alt={`Produto ${name}`} title={name} />
      ) : (
        getUnavailableImage(name)
      )}
    </figure>
  );
};

const getCartItems = (items, addToCart, removeFromCart) => {
  return items.map((item, index) => (
    <div key={index} className="product__list__item">
      <div className="product__list__row">
        {getProductImage(item.image, item.name)}
        <div className="product__list__info">
          <p className="product__list__name">{`${item.name}`}</p>
          <p className="product__list__size">
            <span>Tam.: {item.selectedSize}</span>
          </p>
          <Quantity
            value={item.quantity}
            onClickMinus={() => removeFromCart(item)}
            onClickPlus={() => addToCart(item)}
          />
        </div>
        <div className="product__list__pricing">
          <div className="product__list__current">{item.actual_price}</div>
          <div className="product__list__installments">{item.installments}</div>
        </div>
      </div>
      <div className="product__row">
        <button
          type="button"
          className="cart__remove"
          onClick={() => removeFromCart({ ...item, removeAll: true })}
        >
          Remover item
        </button>
      </div>
    </div>
  ));
};

function Cart({ cart, addToCart, removeFromCart }) {
  const { items } = cart;

  return (
    <div className="cart">
      <div className="product__list">
        {items.length
          ? getCartItems(items, addToCart, removeFromCart)
          : getEmptyCart()}
      </div>
      <div className="cart__subtotal">
        <div className="header__title">
          Subtotal - R${getItemsTotalPrice(items)}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
