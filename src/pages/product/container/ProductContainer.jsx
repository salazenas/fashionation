import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ProductPresentation from "../presentation/ProductPresentation";
import { getProductByCodeColor } from "../../../modules/helpers/catalog";
import { addToCart } from "../../../actions/cart";
import { changeFavorite } from "../../../actions/catalog";

export const ProductContainer = ({ catalog, addToCart, changeFavorite }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [customQuantity, setCustomQuantity] = useState(0);
  const { code_color } = useParams();
  const product = getProductByCodeColor(catalog.products, code_color);
  const onAddToCart = useCallback(() => {
    addToCart({ ...product, selectedSize, customQuantity });
  }, [addToCart, product, selectedSize, customQuantity]);

  return (
    <ProductPresentation
      product={product}
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
      customQuantity={customQuantity}
      setCustomQuantity={setCustomQuantity}
      addToCart={onAddToCart}
      changeFavorite={changeFavorite}
    />
  );
};

ProductContainer.propTypes = {};

const mapDispatchToProps = {
  addToCart,
  changeFavorite
};

const mapStateToProps = (state) => ({
  catalog: state.catalog
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
