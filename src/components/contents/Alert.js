import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Alert = () => {
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    code ? setCode(false) : setCode(true);
  };
  return (
    <Container label="Alert">
      <div className="flex w-1/2 rounded-md bg-yellow-400 p-2">
        <div className="p-2">⚠</div>
        <div className="p-2">Warning: Invalid input!</div>
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="flex w-1/2 rounded-md bg-yellow-400 p-2">
        <div className="p-2">⚠</div>
        <div className="p-2">Warning: Invalid input!</div>
      </div>`}
      />
    </Container>
  );
};

export default Alert;
