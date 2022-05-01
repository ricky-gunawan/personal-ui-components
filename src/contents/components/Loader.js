import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Loader = () => {
  const code = (
    <div className="flex justify-evenly gap-4">
      <div className="h-2 w-1/3 max-w-[16rem] self-center overflow-hidden rounded-md bg-bgPrimary">
        <div className="h-2 w-1/3 animate-translation rounded-md bg-secondary"></div>
      </div>
      <div className="flex aspect-square w-1/3 max-w-[8rem] animate-spin justify-center self-center rounded-[50%] border-8 border-bgPrimary border-t-secondary bg-transparent"></div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Loader">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Loader;
