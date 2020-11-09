import { ICartProduct } from "./types";

export const ADD_PRODUCT_TO_CART_REQUEST = "ADD_PRODUCT_TO_CART_REQUEST";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_FAILURE = "ADD_PRODUCT_TO_CART_FAILURE";

export function addProductToCartRequest(product: ICartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_REQUEST,
    product,
  };
}
export function addProductToCartSuccess(product: ICartProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    product,
  };
}
export function addProductToCartFailure(productId: number) {
  return {
    type: ADD_PRODUCT_TO_CART_FAILURE,
    productId,
  };
}

export type AddProductToCartRequestType = ReturnType<
  typeof addProductToCartRequest
>;

export type AddProductToCartFailureType = ReturnType<
  typeof addProductToCartFailure
>;
