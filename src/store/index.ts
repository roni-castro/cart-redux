import { createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import rootReducers from "./modules/rootReducers";

export interface IStoreState {
  cart: ICartState;
}

const store = createStore(rootReducers);

export default store;
