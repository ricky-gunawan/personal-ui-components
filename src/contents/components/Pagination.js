import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Pagination = () => {
  const code = (
    <div className="flex items-center justify-center">
      <div className="flex cursor-pointer">
        <div className="rounded-l-md border border-bgPrimary bg-primary px-2 py-1 text-textSecondary hover:scale-105">&lt;&lt; Prev</div>
        <div className="border border-bgPrimary bg-primary px-2 py-1 text-textSecondary hover:scale-105">5</div>
        <div className="border border-bgPrimary bg-primary px-2 py-1 text-textSecondary hover:scale-105">6</div>
        <div className="border border-bgPrimary bg-primary px-2 py-1 text-textSecondary hover:scale-105">7</div>
        <div className="rounded-r-md border border-bgPrimary bg-primary px-2 py-1 text-textSecondary hover:scale-105">Next &gt;&gt;</div>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Pagination">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Pagination;
