import React, { useState } from "react";
import Container from "./Container";

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
    <Container>
      <div className="flex justify-center gap-4">
        <button className="rounded-md bg-stone-700 p-2 text-white hover:bg-stone-900">Button</button>
        <button className="rounded-md bg-amber-600 p-2 hover:bg-amber-700">Primary</button>
        <button className="rounded-md bg-yellow-600 p-2 hover:bg-yellow-700">Secondary</button>
        <button className="rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Accent</button>
        <button className="rounded-md  p-2 hover:bg-slate-200">Gost</button>
        <button className="rounded-md p-2 text-amber-600 hover:underline">Link</button>
      </div>
      <button className="absolute right-0 top-2 mr-2 rounded-md bg-slate-700 px-2 text-white" onClick={handleShowCode}>
        {code ? "close" : "show code"}
      </button>
      {code && (
        <pre className="language-markup">
          <code>
            {`
            <div className="flex justify-center gap-4">
              <button className="rounded-md bg-stone-700 p-2 text-white hover:bg-stone-900">Button</button>
              <button className="rounded-md bg-amber-600 p-2 hover:bg-amber-700">Primary</button>
              <button className="rounded-md bg-yellow-600 p-2 hover:bg-yellow-700">Secondary</button>
              <button className="rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900">Accent</button>
              <button className="rounded-md p-2 hover:bg-slate-200">Ghost</button>
              <button className="rounded-md p-2 text-amber-600 hover:underline">Link</button>
            </div>`}
          </code>
        </pre>
      )}
    </Container>
  );
};

export default Button;
