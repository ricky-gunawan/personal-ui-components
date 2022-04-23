import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Alert = () => {
  const code = (
    <div className="flex justify-center">
      <div className="flex w-1/3 rounded-md bg-yellow-400 p-2">
        <div className="p-2">⚠</div>
        <div className="p-2">Warning: Invalid input!</div>
      </div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Alert">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Alert;
