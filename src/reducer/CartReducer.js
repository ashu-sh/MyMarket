export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
export const initialCart = {
  cart: [],
};


