import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { ICartState } from "./modules/cart/types";
import rootReducers from "./modules/rootReducers";

export interface IStoreState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// sagaMiddleware.run(sagas)

export default store;
