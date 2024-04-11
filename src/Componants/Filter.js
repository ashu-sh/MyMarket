import React, { useContext } from "react";
import "./Menu.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import { CartProd } from "../reducer/CartContext";
import { ProdContext } from "../Store/ProdContext";

function Filter({ isMenuOpen, handleCloseMenu, selectOptionFilter }) {

  
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
            <div className="book-filters">
              <FormControl>
                <FormLabel>Product Filters</FormLabel>
                <RadioGroup
                  column
                  aria-labelledby="demo-col-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Filter by Price (Low to High)"
                    control={<Radio />}
                    checked={true}
                    label="Price (Low to High)"
                  />
                  <FormControlLabel
                    value="Filter by Stock"
                    control={<Radio />}
                    checked={false}
                    label="Filter by Stock"
                  />
                  <FormControlLabel
                    value="Filter by Ratings"
                    control={<Radio />}
                    checked={false}
                    label="Filter by Ratings"
                  />
                  <FormControlLabel
                    value="Reset"
                    control={<Radio />}
                    checked={false}
                    label="Reset"
                  />
                </RadioGroup>
              </FormControl>
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
