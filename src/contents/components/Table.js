import React from "react";
import jsxToString from "jsx-to-string";
import Container from "../Container";
import ShowCode from "../ShowCode";

const Table = () => {
  const code = (
    <table className="ml-4">
      <thead>
        <tr>
          <th className="w-8"></th>
          <th className="w-40 text-left">Name</th>
          <th className="w-40 text-left">Age</th>
          <th className="w-40 text-left">Job</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr>
          <td className="pl-2 font-bold">1</td>
          <td>Tom</td>
          <td>21</td>
          <td>Software Engineer</td>
        </tr>
        <tr>
          <td className="pl-2 font-bold">2</td>
          <td>Jota</td>
          <td>23</td>
          <td>Software Engineer</td>
        </tr>
        <tr>
          <td className="pl-2 font-bold">3</td>
          <td>Slamry</td>
          <td>21</td>
          <td>Quality Engineer</td>
        </tr>
        <tr>
          <td className="pl-2 font-bold">4</td>
          <td>Bavi</td>
          <td>22</td>
          <td>Testing Engineer</td>
        </tr>
      </tbody>
    </table>
  );

  const codeString = jsxToString(code);
  return (
    <Container label="Table">
      {code}
      <ShowCode codeString={codeString} />
    </Container>
  );
};

export default Table;
