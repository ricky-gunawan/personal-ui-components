import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Badge = () => {
  const code = (
    <div>
      <div className="mb-4 flex justify-center gap-4">
        <div className="rounded-md bg-primary px-1 text-textSecondary">Primary</div>
        <div className="rounded-md bg-secondary px-1 text-textSecondary">Secondary</div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex rounded-md bg-primary p-2 text-textSecondary">
          <div className="px-2">Inbox</div>
          <div className="rounded-md bg-primary px-1 text-textSecondary">99+</div>
        </div>
        <div className="flex rounded-md bg-primary p-2 text-textSecondary">
          <div className="px-2">Inbox</div>
          <div className="rounded-md bg-secondary px-1 text-textSecondary">99+</div>
        </div>
        <div className=" relative flex rounded-md bg-primary p-2 text-textSecondary">
          <div className="px-2">Inbox</div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary px-1 text-textSecondary">99+</div>
        </div>
      </div>
    </div>
  );

  const codeString = jsxToString(code);

  return (
    <Container label="Badge">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Badge;
