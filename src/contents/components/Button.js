import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Button = () => {
  const code = (
    <div className="flex justify-center gap-4">
      <button className="rounded-md bg-primary p-2 text-textSecondary hover:scale-105">Primary</button>
      <button className="rounded-md bg-secondary p-2 text-textSecondary hover:scale-105">Secondary</button>
    </div>
  );

  const codeString = jsxToString(code);

  return (
    <Container label="Button">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Button;
