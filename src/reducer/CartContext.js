import React, { createContext, useReducer } from "react";
import { cartReducer, initialCart } from "./CartReducer";

export const CartProd = createContext();

function CartContext({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  let Cart = state.cart;
  let CartQty = state.cart.length;

  return (
    <div>
      <CartProd.Provider value={{ Cart, CartQty, dispatch, state, initialCart, cartReducer }}>
        {children}
      </CartProd.Provider>
    </div>
  );
}

export default CartContext;
