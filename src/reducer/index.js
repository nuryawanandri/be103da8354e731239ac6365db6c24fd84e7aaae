import { combineReducers } from "redux";

import { testReducer } from "./test";
import { selectionDateReducer } from "./selectionDate";
import { cartReducer } from "./cart";
import { lunchDinnerBtnReducer } from "./lunchDinnerBtn";
import { modalLocationReducer } from "./modalLocation";

const rootReducer = combineReducers({
  test: testReducer,
  selectionDate: selectionDateReducer,
  cart: cartReducer,
  lunchDinnerBtn: lunchDinnerBtnReducer,
  modalLocation: modalLocationReducer,
});

export default rootReducer;
