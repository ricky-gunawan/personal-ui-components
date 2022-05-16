import React, { useState } from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Carousel = () => {
  const [active, setActive] = useState(1);
  const prevSlide = () => {
    if (active === 1) {
      setActive(8);
    } else {
      setActive((prev) => prev - 1);
    }
  };
  const nextSlide = () => {
    if (active === 8) {
      setActive(1);
    } else {
      setActive((prev) => prev + 1);
    }
  };
  const code = (
    <div className="relative m-4 bg-black">
      <div className="aspect-[12/6] w-full overflow-hidden">
        <img className={active === 1 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?car+bmw" width="1200" height="600" alt="" />
        <img className={active === 2 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?toyota+supra" width="1200" height="600" alt="" />
        <img className={active === 3 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?car+lambo" width="1200" height="600" alt="" />
        <img className={active === 4 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?bmw+m3" width="1200" height="600" alt="" />
        <img className={active === 5 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?car+porche" width="1200" height="600" alt="" />
        <img className={active === 6 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?car+toyota" width="1200" height="600" alt="" />
        <img className={active === 7 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?car+bugatti" width="1200" height="600" alt="" />
        <img className={active === 8 ? "" : "hidden"} src="https://source.unsplash.com/1200x600/?car+tesla" width="1200" height="600" alt="" />
      </div>
      <span className="absolute left-0 top-0 bg-black/20 p-1 text-xs font-bold text-white">{`${active}/8`}</span>
      <span onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/20 px-1 pb-2 text-3xl font-extrabold text-white hover:bg-black/80">
        &lt;
      </span>
      <span onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/20 px-1 pb-2 text-3xl font-extrabold text-white hover:bg-black/80">
        &gt;
      </span>
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
