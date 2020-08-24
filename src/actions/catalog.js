import { SET_PRODUCTS, CHANGE_FAVORITE } from "../modules/constants/catalog";
import catalogAPI from "../assets/services/api";

const setCatalog = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export const changeFavorite = (payload) => ({
  type: CHANGE_FAVORITE,
  payload
});

export const fetchCatalog = () => {
  return (dispatch) => catalogAPI.getProducts().then((res) => dispatch(setCatalog(res)));
};
