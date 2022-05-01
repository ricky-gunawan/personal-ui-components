import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Range = () => {
  const code = (
    <div className="flex flex-col items-center">
      <input className="w-10/12 max-w-lg rounded-md text-textPrimary" type="range" name="range" id="range" min="0" max="10" step="1" defaultValue={2} />
      <div className="flex w-10/12 max-w-lg justify-between px-1.5">
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
      <div className="flex w-10/12 max-w-lg justify-between px-1">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
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
