import React from "react";

function Title({ text }) {
  return (
    <div className="text-center my-4">
      <h4 className="text-2xl font-bold">{text}</h4>
      <hr className="my-2" />{" "}
    </div>
  );
}

export default Title;
