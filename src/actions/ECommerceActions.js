import { SET_CATALOG } from "../helpers/ActionsConstants";
import axios from "axios";

const setCatalog = (payload) => ({
  type: SET_CATALOG,
  payload,
});

export const fetchCatalog = () => {
  return (dispatch) => {
    axios
      .get("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
      .then((res) => dispatch(setCatalog(res.data)));
  };
};
