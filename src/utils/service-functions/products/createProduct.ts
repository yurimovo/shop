import { Product } from "../../../types/products";

export const createProduct = async (data: Product) => {
    const productData = JSON.stringify(data)
    try {
        await fetch('/api/products/create-product', {
            method: 'POST',
            mode: "cors",
			credentials: "include",
            body: productData
        });
    } catch (error) {
        throw error;
    }
};