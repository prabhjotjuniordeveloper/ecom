import api from "../axios/axios_config";

export const delWish = async (productId) => {
  console.log("id", productId)
  try {
    const response = await api.put(`/wishList/removeProductFromWishlist/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product in wishlist:', error);
    throw error;
  }
};


