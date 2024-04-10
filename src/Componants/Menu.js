import React from "react";
import "./Menu.css";
// import Filter from "./Filter";

function Menu({ isMenuOpen, handleCloseMenu, selectOptionMenu }) {


  return (
    <div>
      {selectOptionMenu && (
        <div className={isMenuOpen ? "backdrop" : ""}>
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
                Menu
              </div>
              {/* ... */}
              <div>📌 About us</div>
              <div>📌 Founder's team</div>
              <div>📌 Careers @MyMarket</div>
              <div>📌 Partner with us</div>
              <div>📌 Clients</div>
              <div>📌 Contact us</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
