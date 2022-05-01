import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Breadcrumbs = () => {
  const code = (
    <div className="flex justify-center gap-2">
      <button className="hover:underline">Home</button>
      <span>&gt;</span>
      <button className="hover:underline">Downloads</button>
      <span>&gt;</span>
      <button>Apps</button>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Breadcrumbs">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Breadcrumbs;
