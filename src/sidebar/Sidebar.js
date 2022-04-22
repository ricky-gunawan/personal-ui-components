import React from "react";
import ColorBox from "./ColorBox";

const Sidebar = () => {
  return (
    <div className="fixed top-0 h-screen w-72 border-r-4 border-secondary bg-bgSecondary">
      <ColorBox />
    </div>
  );
};

export default Sidebar;
