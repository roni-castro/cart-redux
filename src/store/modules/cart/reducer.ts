import produce from "immer";
import { ICartState } from "./types";
import { addProductToCart } from "../cart/actions";
import * as actions from "../cart/actions";

const INITAL_STATE: ICartState = {
  items: [],
};

export default function cartReducer(
  state: ICartState = INITAL_STATE,
  action: ReturnType<typeof addProductToCart>
) {
  switch (action.type) {
    case actions.ADD_PRODUCT_TO_CART:
      const productToBeAdded = action.product;
      const productFoundIndex = state.items.findIndex(
        (item) => item.product.id === productToBeAdded.id
      );
      if (productFoundIndex >= 0) {
        return produce(state, (draft) => {
          draft.items[productFoundIndex].quantity++;
        });
      } else {
        return produce(state, (draft) => {
          draft.items.push({ product: action.product, quantity: 1 });
        });
      }
    default:
      return state;
  }
}
