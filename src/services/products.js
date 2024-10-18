import { apiClient } from "./config";

export const apiGetProducts = async() => apiClient.get("/products")

export const apiAddProducts = async(payload) => apiClient.post("/products", payload);

export const apiGetSingleProduct = async(slug) => {
    return apiClient.get(`/products/${slug}`); 
}