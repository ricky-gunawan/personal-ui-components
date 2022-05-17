import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Tab = () => {
  const code = (
    <div className="flex items-center justify-center bg-bgPrimary py-4">
      <div className="flex">
        <label htmlFor="tab_1">
          <input className="peer hidden" type="radio" name="tab" id="tab_1" defaultChecked />
          <div className="border-b-2 border-bgSecondary px-2 py-1 font-bold peer-checked:border-primary">Tab 1</div>
        </label>
        <label htmlFor="tab_2">
          <input className="peer hidden" type="radio" name="tab" id="tab_2" />
          <div className="border-b-2 border-bgSecondary px-2 py-1 font-bold peer-checked:border-primary">Tab 2</div>
        </label>
        <label htmlFor="tab_3">
          <input className="peer hidden" type="radio" name="tab" id="tab_3" />
          <div className="border-b-2 border-bgSecondary px-2 py-1 font-bold peer-checked:border-primary">Tab 3</div>
        </label>
      </div>
    </div>
  );
  const codeString = jsxToString(code);
  return (
    <Container label="Tab">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Tab;
