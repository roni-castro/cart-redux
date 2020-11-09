import { ICartProduct } from "./types";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export function addProductToCart(product: ICartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  };
}
