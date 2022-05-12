import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Carousel = () => {
  const code = (
    <div>
      <div className="mx-auto mt-4 mb-16 flex h-60 w-1/2 gap-2 overflow-x-auto">
        <div id="1" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?car" alt="" />
        </div>
        <div id="2" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?toyota" alt="" />
        </div>
        <div id="3" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?kia" alt="" />
        </div>
        <div id="4" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?lambo" alt="" />
        </div>
        <div id="5" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?m3" alt="" />
        </div>
        <div id="6" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?bmw" alt="" />
        </div>
        <div id="7" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?civic" alt="" />
        </div>
        <div id="8" className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?hyundai" alt="" />
        </div>
      </div>
      <div className="caro mx-8 my-4 flex h-60 gap-2 overflow-x-auto">
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?bmw" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?civic" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?lambo" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?m3" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?porche" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?toyota" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?kia" alt="" />
        </div>
        <div className="aspect-[6/4] w-full">
          <img src="https://source.unsplash.com/1200x800/?hyundai" alt="" />
        </div>
      </div>
    </div>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Carousel">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Carousel;
