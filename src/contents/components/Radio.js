import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Radio = () => {
  const code = (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center">
        <input className=" rounded-md text-primary focus:ring-2 focus:ring-primary" type="radio" name="radio" id="radio_1" />
        <label htmlFor="radio_1" className="ml-2 ">
          Radio 1
        </label>
      </div>
      <div className="flex items-center">
        <input className=" rounded-md text-primary focus:ring-2 focus:ring-primary" type="radio" name="radio" id="radio_2" />
        <label htmlFor="radio_2" className="ml-2 ">
          Radio 2
        </label>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Radio">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Radio;
