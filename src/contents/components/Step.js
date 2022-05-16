import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Step = () => {
  const code = (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        <div className="z-10 rounded-full bg-primary px-2 text-textSecondary">1</div>
        <span className="h-2 w-8 scale-x-105 bg-primary"></span>
        <div className="z-10 rounded-full bg-primary px-2 text-textSecondary">2</div>
        <span className="h-2 w-8 scale-x-105 bg-bgPrimary"></span>
        <div className="z-10 rounded-full bg-bgPrimary px-2">3</div>
        <span className="h-2 w-8 scale-x-105 bg-bgPrimary"></span>
        <div className="z-10 rounded-full bg-bgPrimary px-2">4</div>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Step">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Step;
