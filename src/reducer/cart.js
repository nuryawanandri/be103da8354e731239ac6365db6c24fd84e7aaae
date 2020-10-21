const SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN";

export const initialState = {
  isCartOpen: false,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_CART_OPEN:
      return {
        ...state,
        counter: state.counter + 1,
        isCartOpen: action.data,
      };

    default:
      return state;
  }
};

export const setIsCartOpen = (data) => ({
  type: SET_IS_CART_OPEN,
  data,
});
