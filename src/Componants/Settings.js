import React from "react";
import "./Menu.css";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Settings({ selectOptionSettings, isMenuOpen, handleCloseMenu }) {
  return (
    <div>
      {selectOptionSettings === "settings" ? (
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
              Settings
            </div>
            {/* ... */}

            <FormGroup>
             
              <FormControlLabel control= {<Switch/>} label="Dark Mode"/>
            </FormGroup>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Settings;
