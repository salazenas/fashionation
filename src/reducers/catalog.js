import { changeProductFavorite } from "../modules/helpers/catalog";
import {
  SET_PRODUCTS,
  CHANGE_FAVORITE
} from "../modules/constants/catalog";

const initialState = {
  products: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case CHANGE_FAVORITE:
      return { ...state, products: changeProductFavorite(state.products, payload) };
    default:
      return state;
  }
};
