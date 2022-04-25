import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Avatar = () => {
  const code = (
    <div className="flex justify-evenly gap-4">
      <div className="h-20 w-20 flex-initial overflow-clip rounded-md text-center">
        <div className="text-lg font-extrabold">K</div>
      </div>
      <div className="h-20 w-20 flex-initial overflow-clip rounded-full text-center">
        <div className="text-lg font-extrabold">K</div>
      </div>
      <div className="relative flex h-20 flex-initial">
        <div className="absolute h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-4 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-8 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-12 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-16 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
      </div>
      <div className="relative flex h-20 flex-initial">
        <div className="absolute h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-4 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-8 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-12 h-20 w-20 overflow-clip rounded-full border-2 border-secondary text-center">
          <div className="text-lg font-extrabold">K</div>
        </div>
        <div className="absolute left-16 flex h-20 w-20 justify-center overflow-clip rounded-full border-2 border-secondary bg-slate-700">
          <div className="self-center text-white">99+</div>
        </div>
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
