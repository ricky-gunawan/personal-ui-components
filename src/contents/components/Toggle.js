import React, { useState } from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Toggle = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  const code = (
    <div className="flex justify-center gap-1">
      <span>☀</span>
      <label htmlFor="toggle" className="flex w-[2.6rem] cursor-pointer rounded-full border border-secondary bg-primary px-1">
        <input className="peer hidden" type="checkbox" id="toggle" />
        <span className="h-4 w-4 self-center rounded-full bg-bgPrimary peer-checked:translate-x-full"></span>
      </label>
      <span>🌒</span>
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
