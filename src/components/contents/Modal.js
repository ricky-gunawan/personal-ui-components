import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    !code ? setCode(true) : setCode(false);
  };

  return (
    <Container label="Modal">
      <div className="flex justify-center gap-4">
        <div className="cursor-pointer rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900" onClick={() => setModal(true)}>
          Modal 1
        </div>
        {modal && (
          <div className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.6)]">
            <div className="absolute left-1/2 top-1/2 z-10 h-60 w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-200">
              <div className="border-b-2 border-slate-400 py-2 text-center">Header</div>
              <div className="absolute top-2 right-3 cursor-pointer font-bold" onClick={() => setModal(false)}>
                ❌
              </div>
              <div className="flex h-2/3 items-center justify-center border-b-2 border-slate-400 font-bold">
                <div className="">This is a Modal</div>
              </div>
              <div className="py-2 text-center">Footer</div>
            </div>
          </div>
        )}
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="flex justify-center gap-4">
        <div className="cursor-pointer rounded-md bg-slate-700 p-2 text-white hover:bg-slate-900" onClick={() => setModal(true)}>
          Modal 1
        </div>
        {modal && (
          <div className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.6)]">
            <div className="absolute left-1/2 top-1/2 z-10 h-60 w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-slate-200">
              <div className="border-b-2 border-slate-400 py-2 text-center">Header</div>
              <div className="absolute top-2 right-3 cursor-pointer font-bold" onClick={() => setModal(false)}>
                ❌
              </div>
              <div className="flex h-2/3 items-center justify-center border-b-2 border-slate-400 font-bold">
                <div className="">This is a Modal</div>
              </div>
              <div className="py-2 text-center">Footer</div>
            </div>
          </div>
        )}
      </div>`}
      />
    </Container>
  );
};

export default Modal;
