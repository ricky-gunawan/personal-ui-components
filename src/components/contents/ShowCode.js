import React from "react";
import { SyntaxHighlighter, prism } from "./syntaxHighlighter";

const ShowCode = ({ code, handleShowCode, codeString }) => {
  return (
    <>
      <button className="relative bottom-20 left-[92%] rounded-md bg-slate-700 py-1 px-2 text-white hover:bg-slate-900" onClick={handleShowCode}>
        {code ? "Close" : "Show code"}
      </button>
      {code && (
        <SyntaxHighlighter language="javascript" style={prism}>
          {codeString}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default ShowCode;
