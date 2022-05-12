import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Card = () => {
  const code = (
    <div className="flex flex-wrap justify-around rounded-lg bg-[url('https://source.unsplash.com/2500x2000/?office')] p-2">
      <div className="aspect-[10/12] w-4/12 overflow-hidden rounded-lg bg-white shadow-md">
        <div className="h-1/2 overflow-hidden">
          <img src="https://source.unsplash.com/500x500/?gadget" alt="" />
        </div>
        <div className="m-4 text-lg font-bold">Title</div>
        <div className="m-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, totam.</div>
        <div className="flex justify-end">
          <button className="m-4 rounded-md bg-yellow-600 p-2 hover:bg-yellow-700">Buy now</button>
        </div>
      </div>
      <div className="aspect-[10/12] w-4/12 overflow-hidden rounded-lg bg-white/30 shadow-md backdrop-blur-sm">
        <div className="h-1/2 overflow-hidden">
          <img src="https://source.unsplash.com/500x500/?laptop" alt="" />
        </div>
        <div className="m-4 flex">
          <div className="text-lg font-bold">Title</div>
          <div className="mx-2 rounded-md bg-yellow-400 px-2">New product!</div>
        </div>
        <div className="m-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, totam.</div>
        <div className="flex justify-end">
          <button className="m-4 rounded-md bg-yellow-600 p-2 hover:bg-yellow-700">Buy now</button>
        </div>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Card">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Card;
