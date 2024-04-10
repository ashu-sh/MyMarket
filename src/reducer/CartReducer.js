export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    case "SORT_BY_PRICE":
      return {
        ...state, products: [...state.products.sort((a, b) => a.price - b.price)],
      }
    default:
      return state;
  }
};
export const initialCart = {
  cart: [],
};
