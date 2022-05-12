import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const InputGroup = () => {
  const code = <div></div>;
  const codeString = jsxToString(code);
  return (
    <Container label="Input Group">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default InputGroup;
