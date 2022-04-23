import React, { useState } from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Dropdown = () => {
  const [show, setShow] = useState(false);
  const handleDropdown = () => {
    show ? setShow(false) : setShow(true);
  };

  const code = (
    <div className="flex justify-center gap-4">
      <div className="group relative cursor-pointer">
        <div className="w-fit rounded-md bg-primary p-2 text-textSecondary">Bottom Right</div>
        <ul className="absolute top-full left-0 hidden w-max rounded-lg border-2 border-slate-300 bg-bgPrimary p-4 group-hover:block">
          <li className="rounded-md p-2 hover:bg-bgSecondary">Firts Option</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Second Option</li>
        </ul>
      </div>
      <div className="group relative cursor-pointer">
        <div className="w-fit rounded-md bg-primary p-2 text-textSecondary ">Bottom Left</div>
        <ul className="absolute top-full right-0 hidden w-max rounded-lg border-2 border-slate-300 bg-bgPrimary p-4 group-hover:block">
          <li className="rounded-md p-2 hover:bg-bgSecondary">Firts Option</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Second Option</li>
        </ul>
      </div>
      <div className="group relative cursor-pointer">
        <div className="w-fit rounded-md bg-primary p-2 text-textSecondary">Top Right</div>
        <ul className="absolute bottom-full left-0 hidden w-max rounded-lg border-2 border-slate-300 bg-bgPrimary p-4 group-hover:block">
          <li className="rounded-md p-2 hover:bg-bgSecondary">Firts Option</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Second Option</li>
        </ul>
      </div>
      <div className="group relative cursor-pointer">
        <div className="w-fit rounded-md bg-primary p-2 text-textSecondary">Top Left</div>
        <ul className="absolute bottom-full right-0 hidden w-max rounded-lg border-2 border-slate-300 bg-bgPrimary p-4 group-hover:block">
          <li className="rounded-md p-2 hover:bg-bgSecondary">Firts Option</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Second Option</li>
        </ul>
      </div>
      <div className="relative cursor-pointer">
        <div onClick={handleDropdown} className="w-fit rounded-md bg-primary p-2 text-textSecondary">
          Click !
        </div>
        <ul className={`absolute ${show ? "block" : "hidden"} top-0 left-full z-20 ml-2 w-max rounded-lg border-2 border-slate-300 bg-bgPrimary p-4`}>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Firts Option</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Second Option</li>
        </ul>
      </div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Dropdown">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Dropdown;
