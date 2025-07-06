import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const response = await axios.get(`${API}/products`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axios.post(`${API}/products`, productData);
  return response.data;
};

export const updateProduct = async (id, updatedData) => {
  const response = await axios.put(`${API}/products/${id}`, updatedData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API}/products/${id}`);
  return response.data;
};
