import React from "react";

const Container = ({ children }) => {
  return <div className="relative mx-auto my-6 rounded-md bg-slate-50 p-4 shadow-md shadow-slate-400">{children}</div>;
};

export default Container;
