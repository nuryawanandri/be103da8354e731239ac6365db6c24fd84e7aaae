import { combineReducers } from "redux";

import { testReducer } from "./test";
import { selectionDateReducer } from "./selectionDate";
import { cartReducer } from "./cart";
import { luchDinnerBtnReducer } from "./lunchDinnerBtn";

const rootReducer = combineReducers({
  test: testReducer,
  selectionDate: selectionDateReducer,
  cart: cartReducer,
  lunchDinnerBtn: luchDinnerBtnReducer,
});

export default rootReducer;
