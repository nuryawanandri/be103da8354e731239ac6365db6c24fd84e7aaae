import { combineReducers } from "redux";

import { testReducer } from "./test";
import { selectionDateReducer } from "./selectionDate";

const rootReducer = combineReducers({
  test: testReducer,
  selectionDate: selectionDateReducer,
});

export default rootReducer;
