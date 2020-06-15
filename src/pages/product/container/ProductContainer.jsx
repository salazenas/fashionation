import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Catalog from "../presentation/ProductPresentation";
import { getProductByName } from "../../../modules/helpers/catalog";
import { addToCart } from "../../../actions/cart";

export const ProductContainer = ({ catalog, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState();
  const { name } = useParams();
  const product = getProductByName(catalog.products, name);
  const onAddToCart = useCallback(() => {
    addToCart({ ...product, selectedSize });
  }, [addToCart, product, selectedSize]);

  return (
    <Catalog
      product={product}
      selectedSize={selectedSize}
      setSelectedSize={setSelectedSize}
      addToCart={onAddToCart}
    />
  );
};

ProductContainer.propTypes = {};

const mapDispatchToProps = {
  addToCart
};

const mapStateToProps = (state) => ({
  catalog: state.catalog
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
