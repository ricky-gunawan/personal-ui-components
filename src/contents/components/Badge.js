import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Badge = () => {
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    !code ? setCode(true) : setCode(false);
  };
  return (
    <Container label="Badge">
      <div className="mb-4 flex justify-center gap-4">
        <div className="rounded-md bg-stone-700 px-1 text-white">Button</div>
        <div className="rounded-md bg-amber-600 px-1">Primary</div>
        <div className="rounded-md bg-yellow-600 px-1">Secondary</div>
        <div className="rounded-md bg-slate-700 px-1 text-white">Accent</div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex rounded-md bg-slate-700 p-2 text-white">
          <div className="px-2">Inbox</div>
          <div className="rounded-md bg-slate-700 px-1 text-white">99+</div>
        </div>
        <div className="flex rounded-md bg-slate-700 p-2 text-white">
          <div className="px-2">Inbox</div>
          <div className="rounded-md bg-amber-600 px-1 text-black">99+</div>
        </div>
        <div className=" relative flex rounded-md bg-slate-700 p-2 text-white">
          <div className="px-2">Inbox</div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-600 px-1 text-black">99+</div>
        </div>
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="mb-4 flex justify-center gap-4">
        <div className="rounded-md bg-stone-700 px-1 text-white">Button</div>
        <div className="rounded-md bg-amber-600 px-1">Primary</div>
        <div className="rounded-md bg-yellow-600 px-1">Secondary</div>
        <div className="rounded-md bg-slate-700 px-1 text-white">Accent</div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="flex rounded-md bg-slate-700 p-2 text-white">
          <div className="px-2">Inbox</div>
          <div className="rounded-md bg-slate-700 px-1 text-white">99+</div>
        </div>
        <div className="flex rounded-md bg-slate-700 p-2 text-white">
          <div className="px-2">Inbox</div>
          <div className="rounded-md bg-amber-600 px-1 text-black">99+</div>
        </div>
        <div className=" relative flex rounded-md bg-slate-700 p-2 text-white">
          <div className="px-2">Inbox</div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-600 px-1 text-black">99+</div>
        </div>
      </div>`}
      />
    </Container>
  );
};

export default Badge;
