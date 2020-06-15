import {
  SET_IS_LOADING,
  DISMISS_DRAWER,
  TOGGLE_CART,
  TOGGLE_SEARCH,
  TOGGLE_FAVORITES,
} from "../modules/constants/app";

export const setIsLoading = (payload) => ({
  type: SET_IS_LOADING,
  payload
});

export const dismissDrawer = (payload) => ({
  type: DISMISS_DRAWER,
  payload
});

export const toggleCart = (payload) => ({
  type: TOGGLE_CART,
  payload
});

export const toggleSearch = (payload) => ({
  type: TOGGLE_SEARCH,
  payload
});

export const toggleFavorites = (payload) => ({
  type: TOGGLE_FAVORITES,
  payload
});
