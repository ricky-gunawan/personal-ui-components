import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Navbar = () => {
  const code = (
    <div className="flex h-16 items-center rounded-lg bg-bgPrimary">
      <div className="ml-6 grow text-xl font-extrabold">LOGO</div>
      <ul className="hidden justify-between gap-6 sm:flex">
        <li>Pricing</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <div className="group relative cursor-pointer sm:hidden">
        <div className="w-fit rounded-md bg-primary p-2 text-textSecondary">Bottom Right</div>
        <ul className="absolute top-full left-0 z-10 hidden w-max rounded-lg border-2 border-slate-300 bg-bgPrimary p-4 group-hover:block">
          <li className="rounded-md p-2 hover:bg-bgSecondary">Pricing</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Products</li>
          <li className="rounded-md p-2 hover:bg-bgSecondary">Contact</li>
        </ul>
      </div>
      <div className="mr-6 ml-6 h-10 w-10 overflow-clip rounded-full border-2 border-primary bg-primary text-center">
        <img className="bg-bgPrimary" src="https://source.unsplash.com/200x200/?face" alt="avatar" />
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Navbar">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Navbar;
