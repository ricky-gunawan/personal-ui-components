import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Drawer = () => {
  const code = (
    <div className="mt-8 flex h-40 bg-bgPrimary">
      <input type="checkbox" name="checkbox" id="checkbox" className="peer hidden" />
      <label htmlFor="checkbox" className="mx-auto h-fit self-center rounded-md bg-primary p-2 text-textSecondary transition-transform duration-1000 hover:scale-105 peer-checked:translate-x-full">
        Click!
      </label>
      <div className="fixed left-0 top-0 z-20 flex h-screen w-44 -translate-x-full flex-col bg-secondary transition-transform duration-1000 peer-checked:translate-x-0 md:w-72">
        <button className="m-2 rounded-md p-4 text-textSecondary hover:bg-primary">Section 1</button>
        <button className="m-2 rounded-md p-4 text-textSecondary hover:bg-primary">Section 2</button>
      </div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Drawer">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Drawer;
