import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Tab = () => {
  const code = (
    <div className="flex items-center justify-center bg-bgPrimary py-4">
      <div className="flex">
        <div className="border-b-2 border-bgSecondary px-2 py-1 font-bold">Tab 1</div>
        <div className="border-b-2 border-secondary px-2 py-1 font-bold">Tab 2</div>
        <div className="border-b-2 border-bgSecondary px-2 py-1 font-bold">Tab 3</div>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Tab">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Tab;
