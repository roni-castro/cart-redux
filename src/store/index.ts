import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ICartState } from "./modules/cart/types";
import rootReducers from "./modules/rootReducers";

export interface IStoreState {
  cart: ICartState;
}

const store = createStore(rootReducers, composeWithDevTools());

export default store;
