import productsEndpoint from './products.json';

const getProducts = (mockedData) => new Promise(resolve => resolve([...mockedData.products]));

const api = {
  getProducts: () => getProducts(productsEndpoint),
};

export default api;