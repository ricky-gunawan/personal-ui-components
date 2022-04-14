import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Button = () => {
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    if (!code) {
      setCode(true);
    } else {
      setCode(false);
    }
  };
  return (
    <Container label="Button">
      <div className="flex justify-center gap-4">
        <button className="rounded-md bg-stone-700 p-2 text-white hover:bg-stone-900">Button</button>
        <button className="rounded-md bg-amber-600 p-2 hover:bg-amber-700">Primary</button>
        <button className="rounded-md bg-yellow-600 p-2 hover:bg-yellow-700">Secondary</button>
        <button className="rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Accent</button>
        <button className="rounded-md  p-2 hover:bg-slate-200">Gost</button>
        <button className="rounded-md p-2 text-amber-600 hover:underline">Link</button>
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="flex justify-center gap-4">
        <button className="rounded-md bg-stone-700 p-2 text-white hover:bg-stone-900">Button</button>
        <button className="rounded-md bg-amber-600 p-2 hover:bg-amber-700">Primary</button>
        <button className="rounded-md bg-yellow-600 p-2 hover:bg-yellow-700">Secondary</button>
        <button className="rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Accent</button>
        <button className="rounded-md  p-2 hover:bg-slate-200">Gost</button>
        <button className="rounded-md p-2 text-amber-600 hover:underline">Link</button>
      </div>`}
      />
    </Container>
  );
};

export default Button;
