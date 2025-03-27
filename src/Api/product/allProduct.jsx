import api from "../axios/axios_config";

export const getAllProducts = async (
  colour,
  productCategory,
  maxPrice,
  minPrice,
  size,
  brand
) => {
  try {
    // Filter out undefined/null/empty values and convert strings to lowercase
    const queryParams = Object.fromEntries(
      Object.entries({
        colour,
        productCategory,
        maxPrice,
        minPrice,
        size,
        brand,
      }).filter(([_, value]) => 
        value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0)
      ).map(([key, value]) => [
        key,
        Array.isArray(value)
          ? value.map(item => (typeof item === "string" ? item.toLowerCase() : item)) // Convert array items
          : typeof value === "string"
          ? value.toLowerCase() // Convert single string values
          : value
      ])
    );

    // console.log("Final Query Params (Lowercase):", queryParams);
    const response = await api.post("/product/getFilteredProducts", queryParams);


    // console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return null;
  }
};
