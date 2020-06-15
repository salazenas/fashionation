const findProductIndexByCodeAndSize = (products, size, code) => {
  return products.findIndex(
    (product) => product.selectedSize === size && product.code_color === code
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
  const currentProductIndex = findProductIndexByCodeAndSize(
    items,
    newItem.selectedSize,
    newItem.code_color
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
  const currentProductIndex = findProductIndexByCodeAndSize(
    items,
    newItem.selectedSize,
    newItem.code_color
  );
  const updatedItems = items;

  if (updatedItems[currentProductIndex].quantity > 0 && !newItem.removeAll) {
    updatedItems[currentProductIndex].quantity -= 1;
  } else {
    updatedItems.splice(currentProductIndex, 1);
  }

  return updatedItems;
};

export const getItemsQuantity = (items) => {
  let quantity = 0;

  items.forEach((item) => {
    quantity += item.quantity;
  });

  return quantity;
};
