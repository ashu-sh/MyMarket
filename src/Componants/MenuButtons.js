import React, { useState } from "react";
import Menu from "./Menu";
import "./Menu.css";
import { FaShoppingBag } from "react-icons/fa";
import { FcFilledFilter } from "react-icons/fc";
import { IconButton } from "@mui/material";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { RiCustomerServiceFill } from "react-icons/ri";
import Filter from "./Filter";
import Settings from "./Settings";
import User from "./User";
import Help from "./Help";

function MenuButtons() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectOption, setSelectoption] = useState(null);

  const handleToggleMenu = () => {
    setTimeout(() => {
      setMenuOpen(!isMenuOpen);
    }, 100);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleOptions = 
    (options) => {
      setSelectoption(options);
    }


  return (
    <>
      <div className="menu__trigger" onClick={handleToggleMenu}>
        {" "}
        <IconButton
          style={IconButtonStyle}
          onClick={() => handleOptions("menu")}
        >
          <FaShoppingBag size={18} style={IconStyle} />
          <p style={TitleStyle}>Menu</p>
        </IconButton>
        <IconButton
          style={IconButtonStyle}
          onClick={() => handleOptions("filter")}
        >
          <FcFilledFilter size={20} style={IconStyle} />
          <p style={TitleStyle}>Filter</p>
        </IconButton>
        <IconButton
          style={IconButtonStyle}
          onClick={() => handleOptions("settings")}
        >
          <IoMdSettings size={20} style={IconStyle} />
          <p style={TitleStyle}>Settings</p>
        </IconButton>
        <IconButton
          style={IconButtonStyle}
          onClick={() => handleOptions("user")}
        >
          <FaUser style={{ color: "#ec4799", margin: "5px" }} size={20} />
          <p style={TitleStyle}>User</p>
        </IconButton>
        <IconButton style={IconButtonStyle} disabled>
          <CiLogout size={20} style={IconStyle} disabled />
          <p style={TitleStyle}>Logout</p>
        </IconButton>
        <IconButton
          style={IconButtonStyle}
          onClick={() => handleOptions("help")}
        >
          <RiCustomerServiceFill size={20} style={IconStyle} />
          <p style={TitleStyle}>Help</p>
        </IconButton>
      </div>
      <Menu
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        selectOptionMenu={selectOption}
      />
      <Filter
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        selectOptionFilter={selectOption}
      />
      <Settings
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        selectOptionSettings={selectOption}
      />
      <User
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        selectOptionUser={selectOption}
      />
      <Help
        isMenuOpen={isMenuOpen}
        handleCloseMenu={handleCloseMenu}
        selectOptionHelp={selectOption}
      />
    </>
  );
}

// Inline CSS
const IconButtonStyle = {
  padding: "8px",
  margin: "8px",
  display: "block",
  borderRadius: "3px",
  justifyContent: "center",
};
const IconStyle = {
  margin: "5px",
  color: "#000",
};
const TitleStyle = { margin: "-5px", fontSize: "12px" };

export default MenuButtons;
