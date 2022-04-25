import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Select = () => {
  const code = (
    <div className="flex flex-col items-center">
      <label className="w-60 px-2" htmlFor="select">
        Pick your favorite color
      </label>
      <select className="w-60 rounded-lg focus:border focus:border-primary focus:ring-2 focus:ring-primary" name="select" id="select">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Select">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Select;
