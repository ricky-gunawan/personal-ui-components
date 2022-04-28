import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Avatar = () => {
  const code = (
    <div className="flex justify-evenly gap-4">
      <div className="h-20 w-20 flex-initial overflow-clip rounded-md border-2 border-primary bg-primary text-center">
        <img src="https://source.unsplash.com/200x200/?face" alt="avatar" />
      </div>
      <div className="h-20 w-20 flex-initial overflow-clip rounded-full border-2 border-primary bg-primary text-center">
        <img src="https://source.unsplash.com/200x200/?face" alt="avatar" />
      </div>
    </div>
  );

  const codeString = jsxToString(code);

  return (
    <Container label="Avatar">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Avatar;
