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
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: 1 }],
      };
    default:
      return state;
  }
}
