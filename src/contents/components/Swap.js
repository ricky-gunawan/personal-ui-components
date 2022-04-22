import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Swap = () => {
  const [swap1, setSwap1] = useState(true);
  const [swap2, setSwap2] = useState(true);
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    code ? setCode(false) : setCode(true);
  };
  return (
    <Container label="Swap">
      <div className="flex justify-center gap-8">
        <div className="cursor-pointer font-bold" onClick={() => (swap1 ? setSwap1(false) : setSwap1(true))}>
          {swap1 ? "ON" : "OFF"}
        </div>
        <div className="cursor-pointer font-bold" onClick={() => (swap2 ? setSwap2(false) : setSwap2(true))}>
          {swap2 ? "☀" : "🌒"}
        </div>
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="flex justify-center gap-8">
        <div className="cursor-pointer font-bold" onClick={() => (swap1 ? setSwap1(false) : setSwap1(true))}>
          {swap1 ? "ON" : "OFF"}
        </div>
        <div className="cursor-pointer font-bold" onClick={() => (swap2 ? setSwap2(false) : setSwap2(true))}>
          {swap2 ? "☀" : "🌒"}
        </div>
      </div>`}
      />
    </Container>
  );
};

export default Swap;
