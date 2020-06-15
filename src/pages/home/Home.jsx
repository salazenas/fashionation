import React from "react";
import { connect } from "react-redux";

import Catalog from "./catalog/Catalog";
import "./Home.scss";

const Home = ({ catalog }) => {
  const { products, isLoading } = catalog;

  return (
    <div className="home">
      <Catalog products={products} active={!isLoading} />
    </div>
  );
};

Home.propTypes = {};

const mapStateToProps = (state) => ({
  catalog: state.catalog
});

export default connect(mapStateToProps, null)(Home);
