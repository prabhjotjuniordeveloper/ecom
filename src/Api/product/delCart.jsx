import api from "../axios/axios_config";

export const delCart = async (productId,data) => {
  try {
    const response = await api.put(`/cart/removeProductFromCart/${productId}`,data);
    return response.data;
  } catch (error) {
    console.error('Error deleting product to cart:', error);
    throw error;
  }
};


