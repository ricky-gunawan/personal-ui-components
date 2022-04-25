import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Range = () => {
  const code = (
    <div className="flex flex-col items-center">
      <input className="w-1/2 rounded-md text-textPrimary" type="range" name="range" id="range" min="0" max="100" step="10" defaultValue={20} />
      <div className="flex w-1/2 justify-between px-1.5">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
      <div className="flex w-1/2 justify-between px-1">
        <span>0</span>
        <span>10</span>
        <span>20</span>
        <span>30</span>
        <span>40</span>
        <span>50</span>
        <span>60</span>
        <span>70</span>
        <span>80</span>
        <span>90</span>
        <span>100</span>
      </div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Range">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Range;
