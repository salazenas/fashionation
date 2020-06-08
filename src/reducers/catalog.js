import { SET_PRODUCTS } from "../modules/constants/catalog";

const initialState = {
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      debugger;

      return { ...state, products: payload };
    default:
      return state;
  }
};
