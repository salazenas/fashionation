import { IS_FAVORITE } from "../constants/catalog";

export const getProductByCodeColor = (products, codeColor) => {
  return products.find(
    (product) => product.code_color === codeColor
  );
};

export const changeProductFavorite = (products, target) => {
  return products.map(
    (product) => {
      if (product.code_color === target) {
        product[IS_FAVORITE] = !product[IS_FAVORITE];
      }

      return product;
    }
  )
}