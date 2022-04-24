import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const TextInput = () => {
  const code = (
    <div className="mx-auto block w-60">
      <label className="ml-2" htmlFor="username">
        Username
      </label>
      <input className="block h-11 rounded-md focus:border focus:border-primary focus:ring-2 focus:ring-primary" type="text" name="username" id="username" placeholder="Username" />
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Text Input">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default TextInput;
