import api from "../axios/axios_config";

export const addToWishlist = async (productId) => {
  console.log("id", productId)
  try {
    const response = await api.post(`/wishList/addProductInWishList/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};


