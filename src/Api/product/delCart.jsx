import api from "../axios/axios_config";

export const delCart = async (productId) => {
  console.log("id", productId)
  try {
    const response = await api.put(`/cart/removeProductFromCart/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product to cart:', error);
    throw error;
  }
};


