import React, { useContext } from "react";
import "./Menu.css";
import { CartProd } from "../reducer/CartContext";


function Filter({ isMenuOpen, handleCloseMenu, selectOptionFilter }) {

  
  const { dispatch } = useContext(CartProd);

  const sortByPrice = () => {
    dispatch({ type: "SORT_BY_PRICE" });
  };


  return (
    <div>
      {selectOptionFilter === "filter" ? (
        <div className={`left-slider-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-content">
            <div
              onClick={handleCloseMenu}
              style={{
                padding: "4px",
                background: "none",
                float: "right",
              }}
            >
              ❌
            </div>
            <div
              style={{
                padding: "4px",
                width: "30px",
                background: "none",
              }}
            >
              Filter
            </div>
            <div>
              <input type="checkbox"></input> Price Low to High
            </div>
            <div>
              <button onClick={sortByPrice}>Price</button> 
            </div>
            <div>
              <input type="checkbox"></input> In Stock
            </div>
            <div>
              <input type="checkbox"></input> Fast Delivery
            </div>
            <div>
              <input type="checkbox"></input> Ratings
            </div>
            <div>
              <input type="checkbox"></input> In Cart
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Filter;
