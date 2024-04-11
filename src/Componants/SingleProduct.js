import React, { useContext } from "react";
import { CartProd } from "../reducer/CartContext";
import {Button} from "@mui/material"


function SingleProduct({ id, SearchProductFunction }) {

  const { dispatch } = useContext(CartProd);


  const AddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: SearchProductFunction[id] });
  };


  return (
    <div> 
        <div className="bg-white p-0 shadow-md">
        <img
          src={SearchProductFunction[id].img}
          alt={SearchProductFunction[id].name}
          className="w-full h-48 object-cover mb-1"
        />
        <div className="bg-white p-3  shadow-md" style={{borderRadius:"5px"}}>
          <h2 className="text-xl font-semibold mb-0">{SearchProductFunction[id].name}</h2>
          <p className="text-gray-600 mb-3">{SearchProductFunction[id].description}</p>
          <p className="text-gray-600 mb-1">Best Offer at <strong>₹{SearchProductFunction[id].price}/- per Kg</strong></p>
          <p className="text-gray-600 mb-1">🛍️Selled by <strong>{SearchProductFunction[id].seller}</strong></p>
          {/* <p className="text-gray-600 mb-1">🚚Delivery <strong>{SearchProductFunction[id].delivery}</strong></p> */}
          <p className="text-gray-600 mb-0">⭐<strong>{SearchProductFunction[id].rating}</strong></p>
          <div className="flex justify-center items-center">
           
            <Button
              variant="contained" style={{textTransform:"capitalize",borderRadius:"3px",color:"#fff",background:"#ec4799"}}
              onClick={AddToCart}
            >
              Add to Cart
            </Button>
            &nbsp;
            <br/>
            <p className="text-sky">
               <Button variant="outlined" style={{textTransform:"capitalize"}}>View more</Button>
            </p>
            {/* <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={RemoveFromCart}
            >
              Remove From Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
