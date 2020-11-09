import { all } from "redux-saga/effects";

import cartSaga from "../../store/modules/cart/sagas";

export default function* rootSaga() {
  return yield all([cartSaga]);
}
