import { SET_IS_OPEN_BTN } from "./lunchDinnerBtn";

const SET_IS_MODAL_LOC_OPEN = "modalLocation/SET_IS_MODAL_LOC_OPEN";

export const initialState = {
  isModalLocOpen: 0,
};

export const modalLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MODAL_LOC_OPEN:
      return {
        ...state,
        isModalLocOpen: action.data,
      };

    default:
      return state;
  }
};

export const setIsModalLocOpen = (data) => ({
  type: SET_IS_MODAL_LOC_OPEN,
  data,
});
