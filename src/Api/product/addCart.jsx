import api from "../axios/axios_config";

const addProductToCart = async (productId, data) => {
  try {
    const response = await api.post(`/addProductInCart/${productId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};

export default { addProductToCart };
