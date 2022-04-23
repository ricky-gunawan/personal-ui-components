import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Progress = () => {
  const code = (
    <div className="flex justify-evenly gap-4">
      <div className="h-2 w-48 self-center overflow-hidden rounded-md bg-bgPrimary">
        <div className="h-2 w-1/3 animate-translation rounded-md bg-secondary"></div>
      </div>
      <div className="flex h-24 w-24 animate-spin justify-center self-center rounded-[50%] border-8 border-bgPrimary border-t-secondary bg-transparent"></div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Progress">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Progress;
