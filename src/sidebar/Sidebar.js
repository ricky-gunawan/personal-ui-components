import React, { useState } from "react";
import ColorBox from "./ColorBox";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <div className={`fixed top-0 h-screen w-72 bg-black/50 transition-transform duration-500 lg:translate-x-0 ${sidebar ? "" : "-translate-x-full"} z-20 border-r-4 border-secondary lg:bg-bgSecondary`}>
        <div onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))} className="absolute right-0 top-0 mt-2 -mr-2 translate-x-full cursor-pointer rounded-md bg-primary p-2 text-textSecondary lg:hidden">
          {sidebar ? (
            <div className="w-4 py-1">
              <div className="translate-y-1/2 rotate-45 border-t-4"></div>
              <div className="-translate-y-1/2 -rotate-45 border-t-4"></div>
            </div>
          ) : (
            <div className="w-4 py-1">
              <div className="-translate-y-full border-t-4"></div>
              <div className="border-t-4"></div>
              <div className="translate-y-full border-t-4"></div>
            </div>
          )}
        </div>
        <ColorBox />
      </div>
    </div>
  );
};

export default Sidebar;
