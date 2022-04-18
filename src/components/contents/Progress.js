import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Progress = () => {
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    !code ? setCode(true) : setCode(false);
  };
  return (
    <Container label="Progress">
      <div className="flex justify-around gap-4">
        <div className="h-2 w-48 overflow-hidden rounded-md bg-slate-200">
          <div className="h-2 w-1/3 animate-translation rounded-md bg-slate-600"></div>
        </div>
        <div className="flex h-24 w-24 animate-spin justify-center rounded-[50%] border-8 border-slate-200 border-t-slate-600 bg-transparent"></div>
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="flex justify-around gap-4">
        <div className="h-2 w-48 overflow-hidden rounded-md bg-slate-200">
          <div className="h-2 w-1/3 animate-translation rounded-md bg-slate-600"></div>
        </div>
        <div className="flex h-24 w-24 animate-spin justify-center rounded-[50%] border-8 border-slate-200 border-t-slate-600 bg-transparent"></div>
      </div>`}
      />
    </Container>
  );
};

export default Progress;
