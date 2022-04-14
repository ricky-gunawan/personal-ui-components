import React from "react";

const Container = ({ children, label }) => {
  return (
    <>
      <div className="mx-auto my-12 rounded-md border  bg-slate-50 p-4 shadow-md shadow-slate-400">
        <div className="relative left-0 top-0 inline-block -translate-y-10 rounded-full border-2 border-slate-700 bg-stone-600 p-2 text-white">{label}</div>
        {children}
      </div>
    </>
  );
};

export default Container;
