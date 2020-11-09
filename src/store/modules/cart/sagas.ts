import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { IStoreState } from "../..";
import { StockResponse } from "../../../services/cartModels";
import { getStockById } from "../../../services/getProducts";
import * as actions from "../cart/actions";

function* checkAvailableStock({
  product,
}: actions.AddProductToCartRequestType) {
  try {
    const productStock: StockResponse | undefined = yield call(
      getStockById,
      product.id
    );
    const currentProductInCartQty = yield select((state: IStoreState) => {
      return (
        state.cart.items.find((item) => item.product.id === product.id)
          ?.quantity ?? 0
      );
    });
    const hasStockAvaialble =
      currentProductInCartQty < (productStock?.quantity ?? 0);
    if (hasStockAvaialble) {
      yield put(actions.addProductToCartSuccess(product));
    } else {
      yield put(actions.addProductToCartFailure(product.id));
    }
  } catch (err) {
    yield put(actions.addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(actions.ADD_PRODUCT_TO_CART_REQUEST, checkAvailableStock),
]);
