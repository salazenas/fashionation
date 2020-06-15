import { ADD_TO_CART, REMOVE_FROM_CART } from "../modules/constants/cart";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload
});

export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload
});