import { combineReducers } from "redux";

import { testReducer } from "./test";
import { selectionDateReducer } from "./selectionDate";
import { cartReducer } from "./cart";

const rootReducer = combineReducers({
  test: testReducer,
  selectionDate: selectionDateReducer,
  cart: cartReducer,
});

export default rootReducer;
