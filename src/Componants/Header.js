import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import { CartProd } from "../reducer/CartContext";
import { Link } from "react-router-dom";
import { ProdContext } from "../Store/ProdContext";

function Header() {

  const { searchedProd,SetSearchedProd, } = useContext(ProdContext);
  const { CartQty } = useContext(CartProd);


  const HandleProductSearching = (e) => {
    SetSearchedProd(e.target.value);
  }


  return (
    <div>
      {" "}
      <nav className="p-3" style={Navtag}>
        <div className="nav" style={Navstyling}>
          <p style={NavBrand}>InstaCart</p>
          <div className="search">
            <input
              className="m-auto w-96 px-4 py-2 outline-none rounded-sm"
              placeholder="Search a Product"
              value={searchedProd}
              onChange={HandleProductSearching}
            />
          </div>
          <Link to="/cart">
            <div className="flex items-center">
              <div className="flex items-center">
                <MdShoppingCart size={30} />
                <span className=" ml-1 text-lg" style={badge}>
                  {CartQty}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const Navtag = {
  backgroundColor: "#f3f4f6",
};
const Navstyling = {
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};
const NavBrand = {
  color: "#ec4799",
  fontSize: "24px",
  fontWeight: "600",
  textAlign: "left",
  fontFamily: "Nunito, sans-serif",
};
const badge = {
  color: "#ec4799",
  fontWeight: "600",
};
export default Header;
