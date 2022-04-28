import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Toggle = () => {
  const code = (
    <div className="flex justify-center gap-1">
      <label htmlFor="toggle" className="flex w-[2.6rem] cursor-pointer rounded-full border border-secondary bg-primary py-1 px-[0.2rem]">
        <input className="peer hidden" type="checkbox" id="toggle" />
        <span className="h-4 w-4 self-center rounded-full bg-bgPrimary peer-checked:translate-x-full"></span>
      </label>
    </div>
  );

  const codeString = jsxToString(code);

  return (
    <Container label="Toggle">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Toggle;
