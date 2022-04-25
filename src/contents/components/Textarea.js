import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Textarea = () => {
  const code = (
    <div className="flex flex-col items-center">
      <label className="w-1/2 px-2" htmlFor="select">
        Input your story
      </label>
      <textarea className="w-1/2 rounded-lg focus:border focus:border-primary focus:ring-2 focus:ring-primary" name="textarea" id="textarea" rows="5" placeholder="Type here"></textarea>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Textarea">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Textarea;
