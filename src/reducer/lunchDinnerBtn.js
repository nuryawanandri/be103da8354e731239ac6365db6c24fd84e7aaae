export const SET_IS_OPEN_BTN = "counter/SET_IS_OPEN_BTN";

export const initialState = {
  isOpenBtn: true,
};

export const luchDinnerBtnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN_BTN:
      return {
        ...state,
        isOpenBtn: action.data,
      };

    default:
      return state;
  }
};

export const setIsOpenBtn = (data) => ({
  type: SET_IS_OPEN_BTN,
  data,
});
