import React, { useState } from "react";
import Container from "./Container";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    !code ? setCode(true) : setCode(false);
  };
  const handleDropdown = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <Container label="Dropdown">
      <div className="flex justify-center gap-4">
        <div className="group relative cursor-pointer">
          <div className="w-fit rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Bottom Right</div>
          <ul className="absolute top-full left-0 hidden w-max rounded-lg border-2 border-slate-200 bg-white p-4 group-hover:block">
            <li className="rounded-md p-2 hover:bg-slate-200">Firts Option</li>
            <li className="rounded-md p-2 hover:bg-slate-200">Second Option</li>
          </ul>
        </div>
        <div className="group relative cursor-pointer">
          <div className="w-fit rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Bottom Left</div>
          <ul className="absolute top-full right-0 hidden w-max rounded-lg border-2 border-slate-200 bg-white p-4 group-hover:block">
            <li className="rounded-md p-2 hover:bg-slate-200">Firts Option</li>
            <li className="rounded-md p-2 hover:bg-slate-200">Second Option</li>
          </ul>
        </div>
        <div className="group relative cursor-pointer">
          <div className="w-fit rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Top Right</div>
          <ul className="absolute bottom-full left-0 hidden w-max rounded-lg border-2 border-slate-200 bg-white p-4 group-hover:block">
            <li className="rounded-md p-2 hover:bg-slate-200">Firts Option</li>
            <li className="rounded-md p-2 hover:bg-slate-200">Second Option</li>
          </ul>
        </div>
        <div className="group relative cursor-pointer">
          <div className="w-fit rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Top Left</div>
          <ul className="absolute bottom-full right-0 hidden w-max rounded-lg border-2 border-slate-200 bg-white p-4 group-hover:block">
            <li className="rounded-md p-2 hover:bg-slate-200">Firts Option</li>
            <li className="rounded-md p-2 hover:bg-slate-200">Second Option</li>
          </ul>
        </div>
        <div className="relative cursor-pointer">
          <div onClick={handleDropdown} className="w-fit rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">
            Click !
          </div>
          <ul className={`absolute ${show ? "block" : "hidden"} top-0 left-full z-20 ml-2 w-max rounded-lg border-2 border-slate-200 bg-white p-4`}>
            <li className="rounded-md p-2 hover:bg-slate-200">Firts Option</li>
            <li className="rounded-md p-2 hover:bg-slate-200">Second Option</li>
          </ul>
        </div>
      </div>
      <button className="absolute right-2 top-2 rounded-md bg-slate-700 py-1 px-2 text-white hover:bg-slate-900" onClick={handleShowCode}>
        {code ? "Close" : "Show code"}
      </button>
      {code && (
        <pre className="language-markup">
          <code>not available yet</code>
        </pre>
      )}
    </Container>
  );
};

export default Dropdown;
