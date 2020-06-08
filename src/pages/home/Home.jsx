import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCatalog } from "../../actions/catalog";
import ProductsView from "./products/ProductsView";

export const Home = (props) => {
  useEffect(() => {
    props.fetchCatalog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProductsView products={props.catalog.products} />;
};

Home.propTypes = {
  // prop: PropTypes
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});

const mapDispatchToProps = {
  fetchCatalog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
