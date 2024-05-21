import React from "react";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="text-center my-4">
      <h4 className="text-2xl font-bold text-blue-700">{text}</h4>
      <hr className="my-2" />
    </div>
  );
};

export default Title;
