import React from "react";
import Avatar from "@mui/material/Avatar";
import {Button} from "@mui/material"
import "./User.css"

function User({ selectOptionUser, isMenuOpen, handleCloseMenu }) {
  return (
    <div>
      {selectOptionUser === "user" ? (
        <div className={`left-slider-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="user-content">
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
              User
            </div>
            <div>
              <Avatar alt="user" src="" sx={{ width: 56, height: 56 }} />
              <p className="text-xl font-medium">Hi Ashutosh here!</p>
              <p> India</p>
              <p className="text-xs">Member Since 2023</p>
            </div>
            <div>
              <Button style={{textTransform:"capitalize"}} color="secondary">View Profile</Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}


export default User;
