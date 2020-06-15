export const getProductsByName = (products, name) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );
};
