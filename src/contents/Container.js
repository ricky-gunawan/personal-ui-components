import React from "react";

const Container = ({ children, label }) => {
  return (
    <>
      <div className="relative mx-auto my-6 rounded-md border bg-bgSecondary px-2 py-14 shadow-md shadow-slate-300">
        <div className="absolute left-0 top-0 ml-2 mt-2 inline-block rounded-r-full border-2 border-slate-300 bg-primary p-2 text-textSecondary">{label}</div>
        {children}
      </div>
    </>
  );
};

export default Container;
