import React, { useState } from "react";
import Container from "./Container";
import ShowCode from "./ShowCode";

const Avatar = () => {
  const [code, setCode] = useState(false);
  const handleShowCode = () => {
    !code ? setCode(true) : setCode(false);
  };
  return (
    <Container label="Avatar">
      <div className="flex justify-evenly gap-4">
        <div className="h-20 w-20 flex-initial overflow-clip rounded-md bg-red-500 text-center">
          <img src="https://source.unsplash.com/100x100/?face" alt="face" />
        </div>
        <div className="h-20 w-20 flex-initial overflow-clip rounded-full bg-red-500 text-center">
          <img src="https://source.unsplash.com/100x100/?face" alt="face" />
        </div>
        <div className="relative flex h-20 flex-initial bg-red-500">
          <div className="absolute h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-4 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-8 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-12 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-16 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
        </div>
        <div className="relative flex h-20 flex-initial bg-red-500">
          <div className="absolute h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-4 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-8 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-12 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-16 flex h-20 w-20 justify-center overflow-clip rounded-full border-2 border-slate-500 bg-slate-700">
            <div className="self-center text-white">99+</div>
          </div>
        </div>
      </div>
      <ShowCode
        code={code}
        handleShowCode={handleShowCode}
        codeString={`<div className="flex justify-evenly gap-4">
        <div className="h-20 w-20 flex-initial overflow-clip rounded-md bg-red-500 text-center">
          <img src="https://source.unsplash.com/100x100/?face" alt="face" />
        </div>
        <div className="h-20 w-20 flex-initial overflow-clip rounded-full bg-red-500 text-center">
          <img src="https://source.unsplash.com/100x100/?face" alt="face" />
        </div>
        <div className="relative flex h-20 flex-initial bg-red-500">
          <div className="absolute h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-4 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-8 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-12 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-16 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
        </div>
        <div className="relative flex h-20 flex-initial bg-red-500">
          <div className="absolute h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-4 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-8 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-12 h-20 w-20 overflow-clip rounded-full border-2 border-slate-500 text-center">
            <img src="https://source.unsplash.com/100x100/?face" alt="face" />
          </div>
          <div className="absolute left-16 flex h-20 w-20 justify-center overflow-clip rounded-full border-2 border-slate-500 bg-slate-700">
            <div className="self-center text-white">99+</div>
          </div>
        </div>
      </div>`}
      />
    </Container>
  );
};

export default Avatar;
