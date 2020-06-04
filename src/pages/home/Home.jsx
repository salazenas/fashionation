import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCatalog } from "../../actions/ECommerceActions";
import ProductsView from "./products/ProductsView";

export const Home = (props) => {
  useEffect(() => {
    if (!props.catalog.length) props.fetchCatalog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProductsView catalog={props.catalog} />;
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
