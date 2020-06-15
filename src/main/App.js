import React, { useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "../modules/libs/fontawesome";

import Loading from "../components/loading/index";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Routes from "../routes/index";
import Cart from "../pages/cart/Cart";
import Search from "../pages/search/Search";
import Favorites from "../pages/favorites/Favorites";
import Drawer from "../components/drawer/Drawer";
import { fetchCatalog } from "../actions/catalog";
import { setIsLoading, dismissDrawer } from "../actions/app";
import "./App.scss";

const getDrawer = (
  { isCartOpen, isSearchOpen, isFavoritesOpen },
  dismissDrawer,
  cartLength
) => {
  if (isCartOpen) {
    return (
      <Drawer title={`Sacola (${cartLength})`} onDismiss={dismissDrawer}>
        <Cart />
      </Drawer>
    );
  } else if (isSearchOpen) {
    return (
      <Drawer title="Buscar por Produtos" onDismiss={dismissDrawer}>
        <Search />
      </Drawer>
    );
  } else if (isFavoritesOpen) {
    return (
      <Drawer title="Meus Favoritos" onDismiss={dismissDrawer}>
        <Favorites />
      </Drawer>
    );
  }

  return null;
};

const App = ({
  catalog,
  app,
  setIsLoading,
  fetchCatalog,
  dismissDrawer,
  cartLength
}) => {
  const { products } = catalog;
  const { isLoading, ...drawerProps } = app;
  const prevCatalogLength = useRef(products ? products.length : 0);
  const stopLoading = useCallback(
    () => setTimeout(() => setIsLoading(false), 1000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    fetchCatalog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!prevCatalogLength.current && products.length) {
      stopLoading();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    if (prevCatalogLength.current !== products.length) {
      prevCatalogLength.current = products.length;
    }
  }, [products.length]);

  return (
    <BrowserRouter>
      {isLoading ? <Loading /> : null}
      <div
        className={`app app__container ${isLoading ? "loading" : ""} ${
          app.isDrawerVisible ? "app--is-drawer-visible" : ""
        }`}
      >
        <Navbar />
        <Routes />
        <Footer />
        {app.isDrawerVisible
          ? getDrawer(drawerProps, dismissDrawer, cartLength)
          : null}
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
  app: state.app,
  cartLength: state.cart.items.length
});

const mapDispatchToProps = {
  fetchCatalog,
  setIsLoading,
  dismissDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
