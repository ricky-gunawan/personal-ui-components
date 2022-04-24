import React, { useState } from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const code = (
    <div className="flex justify-center gap-4">
      <div className="cursor-pointer rounded-md bg-primary p-2 text-textSecondary hover:scale-105" onClick={() => setShowModal(true)}>
        Modal 1
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 z-20 h-screen w-screen bg-black/60">
          <div className="absolute left-1/2 top-1/2 z-10 h-60 w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-bgSecondary">
            <div className="border-b-2 border-slate-300 py-2 text-center text-textPrimary">Header</div>
            <div className="absolute top-2 right-3 cursor-pointer font-bold" onClick={() => setShowModal(false)}>
              ❌
            </div>
            <div className="flex h-2/3 items-center justify-center border-b-2 border-slate-300 font-bold">
              <div className="text-textPrimary">This is a Modal</div>
            </div>
            <div className="py-2 text-center text-textPrimary">Footer</div>
          </div>
        </div>
      )}
    </div>
  );

  const codeString = jsxToString(code);

  return (
    <Container label="Modal">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Modal;
