import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsByName } from "../../modules/helpers/search";
import "./Favorites.scss";

const getUnavailableImage = (name) => (
  <img
    className={"product__placeholder"}
    src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
    alt={`Produto ${name}`}
    title={name}
  />
);

const getProductImage = (image, name) => {
  return (
    <figure className="product__image">
      {image ? (
        <img src={image} alt={`Produto ${name}`} title={name} />
      ) : (
        getUnavailableImage(name)
      )}
    </figure>
  );
};

const getSizes = (sizes) => {
  let sizesString = "";

  sizes.forEach((size, index) => {
    if (size.available) {
      sizesString = sizesString.concat(size.size);

      if (index !== sizes.length - 1) {
        sizesString = sizesString.concat(", ");
      }
    }
  });

  return sizesString;
};

const getFavorites = (items) => {
  return items.filter((item) => item.isFavorite);
};

const Search = (props) => {
  const [currentSearch, setCurrentSearch] = useState("");
  const [favorites, setFavorites] = useState(
    getFavorites(props.catalog.products)
  );

  return (
    <div className="search">
      <div className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Buscar por produto..."
          onChange={(evt) => {
            const inputValue = evt.target.value;

            setCurrentSearch(inputValue);

            if (inputValue.length) {
              setFavorites(
                getProductsByName(
                  getFavorites(props.catalog.products),
                  evt.target.value
                )
              );
            } else {
              setFavorites(getFavorites(props.catalog.products));
            }
          }}
          autoFocus
        />
      </div>

      {favorites.length > 0 && (
        <div className="header__title">{`${favorites.length} items`}</div>
      )}

      <div className="product__list">
        {favorites.length > 0 ? (
          favorites.map((product, index) => (
            <Link key={index} to={`/product/${product.code_color}`}>
              <div className="product__list">
                <div className="product__list__item">
                  <div className="product__list__row">
                    {getProductImage(product.image, product.name)}
                    <div className="product__list__info">
                      <p className="product__list__name">{product.name}</p>
                      <p className="product__list__size">
                        Disponível nos tamanhos: {getSizes(product.sizes)}
                      </p>
                    </div>
                    <div className="product__list__pricing">
                      <div className="product__list__current">
                        {product.actual_price}
                      </div>
                      <div className="product__list__installments">
                        {product.installments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="cart__empty">
            {currentSearch.length ? (
              <p>Não encontramos nada (¤﹏¤)</p>
            ) : (
              <>
                <p>Parece que você não possui nenhum produto favorito...</p>
                <p>Que tal adicionar alguns? ヽ(^◇^*)/</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});

export default connect(mapStateToProps, null)(Search);
