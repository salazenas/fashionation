import {
  SET_IS_LOADING,
  TOGGLE_CART,
  TOGGLE_SEARCH,
  TOGGLE_FAVORITES,
  DISMISS_DRAWER
} from "../modules/constants/app";

const initialState = {
  isLoading: true,
  isDrawerVisible: false,
  isCartOpen: false,
  isSearchOpen: false,
  isFavoritesOpen: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: payload };
    case TOGGLE_CART:
      return { ...state, isDrawerVisible: true, isCartOpen: true };
    case TOGGLE_SEARCH:
      return { ...state, isDrawerVisible: true, isSearchOpen: true };
    case TOGGLE_FAVORITES:
      return { ...state, isDrawerVisible: true, isFavoritesOpen: true };
    case DISMISS_DRAWER:
      return {
        ...state,
        isDrawerVisible: false,
        isCartOpen: false,
        isSearchOpen: false,
        isFavoritesOpen: false
      };
    default:
      return state;
  }
};
