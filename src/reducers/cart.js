import { ADD_TO_CART, REMOVE_FROM_CART } from "../modules/constants/cart";
import {
  handleAddItem,
  handleRemoveItem
} from "../modules/helpers/cart";

const initialState = {
  items: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, items: handleAddItem(state.items, payload) };
    case REMOVE_FROM_CART:
      return { ...state, items: handleRemoveItem(state.items, payload) };
    default:
      return state;
  }
};
