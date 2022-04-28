import React, { useState } from "react";
import ColorBox from "./ColorBox";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <div className={`fixed top-0 h-screen w-72 bg-transparent transition-transform duration-500 lg:translate-x-0 ${sidebar ? "" : "-translate-x-full"} z-10 border-r-4 border-secondary lg:bg-bgSecondary`}>
        <div onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} className="absolute right-0 top-0 mt-2 -mr-2 translate-x-full cursor-pointer rounded-md bg-primary p-2 text-textSecondary lg:hidden">
          Burger
        </div>
        <ColorBox />
      </div>
    </div>
  );
};

export default Sidebar;
