export const isValidProduct = (product) => {
  const { name, image } = product;
  let price = product.price;
  let stock = product.stock;

  if (!name || !image || !price || !stock) {
    return {
      isValid: false,
      message: "Please fill in all fields."
    }
  }

  price = Number(product.price);
  stock = Number(product.stock);
  if (price < 0) {
    return {
      isValid: false,
      message: "Price needs to be a postive integer or 0."
    }
  }
  if (!Number.isInteger(stock) || stock < 0) {
    return {
      isValid: false,
      message: "Stock needs to be a postive integer or 0."
    }
  }

  return { isValid: true };
}
