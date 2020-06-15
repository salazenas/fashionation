import { IS_FAVORITE } from "../constants/catalog";

export const formatNameToUrlFormat = (name) => {
  return name.toLowerCase().replace(" ", "-");
};

export const getProductByName = (products, name) => {
  return products.find(
    (product) => formatNameToUrlFormat(product.name) === name
  );
};

export const changeProductFavorite = (products, target, condition) => {
  return products.map(
    (product) => {
      if (product.name === target) {
        product[IS_FAVORITE] = !product[IS_FAVORITE];
      }

      return product;
    }
  )
}