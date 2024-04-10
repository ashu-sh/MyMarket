import React from "react";

function Help({ selectOptionHelp, isMenuOpen, handleCloseMenu }) {
  return (
    <div>
      {selectOptionHelp === "help" ? (
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
              Help
            </div>
            <div>
              <p className="text-xl font-medium">In Case of Any Query!</p>
              <br/>
              <p className="text-xs"> Please Reach out at mmsupport@hmail.com</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Help;
