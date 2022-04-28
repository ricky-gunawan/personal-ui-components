import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Checkbox = () => {
  const code = (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center">
        <input className=" rounded-md text-primary focus:ring-2 focus:ring-primary" type="checkbox" name="checkbox" id="checkbox_1" />
        <label htmlFor="checkbox_1" className="ml-2 ">
          Checkbox 1
        </label>
      </div>
      <div className="flex items-center">
        <input className=" rounded-md text-primary focus:ring-2 focus:ring-primary" type="checkbox" name="checkbox" id="checkbox_2" />
        <label htmlFor="checkbox_2" className="ml-2 ">
          Checkbox 2
        </label>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Checkbox">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Checkbox;
