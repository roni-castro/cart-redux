import produce from "immer";
import { ICartState } from "./types";
import * as actions from "../cart/actions";

const INITAL_STATE: ICartState = {
  items: [],
  failureProductIds: [],
};

export default function cartReducer(
  state: ICartState = INITAL_STATE,
  action:
    | actions.AddProductToCartRequestType
    | actions.AddProductToCartFailureType
) {
  switch (action.type) {
    case actions.ADD_PRODUCT_TO_CART_SUCCESS:
      const product = (action as actions.AddProductToCartRequestType).product;
      const productToBeAdded = product;
      const productFoundIndex = state.items.findIndex(
        (item) => item.product.id === productToBeAdded.id
      );
      if (productFoundIndex >= 0) {
        return produce(state, (draft) => {
          draft.items[productFoundIndex].quantity++;
        });
      } else {
        return produce(state, (draft) => {
          draft.items.push({ product, quantity: 1 });
        });
      }
    case actions.ADD_PRODUCT_TO_CART_FAILURE:
      const productId = (action as actions.AddProductToCartFailureType)
        .productId;
      return produce(state, (draft) => {
        draft.failureProductIds.push(productId);
      });
    default:
      return state;
  }
}
