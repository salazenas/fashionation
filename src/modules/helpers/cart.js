const findProductIndexByNameAndSize = (products, size, name) => {
  return products.findIndex(
    (product) => product.selectedSize === size && product.name === name
  );
};

const addQuantityToProduct = (product) => {
  return { ...product, quantity: 1 };
};

const getValueFromPrice = (price) => {
  return parseFloat(price.replace("R$ ", ""));
};

export const getItemsTotalPrice = (items) => {
  let total = 0;

  items.forEach((item) => {
    total += getValueFromPrice(item.actual_price) * item.quantity;
  });

  return total.toFixed(2);
};

export const handleAddItem = (items, newItem) => {
  const currentProductIndex = findProductIndexByNameAndSize(
    items,
    newItem.selectedSize,
    newItem.name
  );
  const updatedItems = items;

  if (currentProductIndex > -1) {
    items[currentProductIndex].quantity += 1;
  } else {
    items.push(addQuantityToProduct(newItem));
  }

  return updatedItems;
};

export const handleRemoveItem = (items, newItem) => {
  const currentProductIndex = findProductIndexByNameAndSize(
    items,
    newItem.selectedSize,
    newItem.name
  );
  const updatedItems = items;

  if (updatedItems[currentProductIndex].quantity > 0 && !newItem.removeAll) {
    updatedItems[currentProductIndex].quantity -= 1;
  } else {
    updatedItems.splice(currentProductIndex, 1);
  }

  return updatedItems;
};
