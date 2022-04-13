import React from "react";

const Container = ({ children, label }) => {
  return (
    <>
      <div className="relative mx-auto my-12 rounded-md border  bg-slate-50 p-4 shadow-md shadow-slate-400">
        <div className="absolute left-2 top-0 -translate-y-1/2 rounded-full border-2 border-slate-700 bg-stone-600 p-2 text-white">{label}</div>
        {children}
      </div>
    </>
  );
};

export default Container;
