import { create } from "zustand";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../services/api/productServices";

const useProductStore = create((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const data = await getProducts();
      set({ products: data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  addNewProduct: async (productData) => {
    try {
      const newProduct = await addProduct(productData);
      const current = get().products;
      set({ products: [...current, newProduct] });
    } catch (error) {
      set({ error: error.message });
    }
  },

  updateExistingProduct: async (id, updatedData) => {
    try {
      const updated = await updateProduct(id, updatedData);
      const current = get().products;
      set({
        products: current.map((p) => (p.id === id ? updated : p)),
      });
    } catch (error) {
      set({ error: error.message });
    }
  },

  deleteExistingProduct: async (id) => {
    try {
      await deleteProduct(id);
      const current = get().products;
      set({
        products: current.filter((p) => p.id !== id),
      });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));

export default useProductStore;
