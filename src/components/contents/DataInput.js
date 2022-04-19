import React from "react";
import Container from "./Container";

const DataInput = () => {
  return (
    <Container label="Data Input">
      <div className="mx-auto my-8 flex justify-center p-2">
        <input type="checkbox" name="checkbox" id="checkbox" className="rounded-md border border-red-400 text-red-400 focus:ring-red-500" />
      </div>
      <div className="mx-auto my-8 flex justify-center p-2">
        <input type="text" name="text" id="text" placeholder="text input..." className="p-2" />
      </div>
      <div className="mx-auto my-8 flex justify-center p-2">
        <input type="radio" name="radio" id="radio" />
      </div>
      <div className="mx-auto my-8 flex justify-center p-2">
        <input type="range" name="range" id="range" />
      </div>
      <div className="mx-auto my-8 flex justify-center p-2">
        <select name="select" id="select">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="mx-auto my-8 flex justify-center p-2">
        <input type="checkbox" name="toggle" id="toggle" />
      </div>
    </Container>
  );
};

export default DataInput;
