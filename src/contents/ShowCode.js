import React, { useState } from "react";
import { SyntaxHighlighter, prism } from "./syntaxHighlighter";

const ShowCode = ({ codeString }) => {
  const [showCode, setShowCode] = useState(false);
  const handleShowCode = () => {
    showCode ? setShowCode(false) : setShowCode(true);
  };
  return (
    <>
      <button className="absolute right-0 top-0 mr-2 mt-2 rounded-md border-2 border-slate-300 bg-bgPrimary py-1 px-2 font-semibold text-textPrimary" onClick={handleShowCode}>
        {showCode ? "Close" : "Show Code"}
      </button>
      {showCode && (
        <SyntaxHighlighter language="javascript" style={prism}>
          {codeString}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default ShowCode;
