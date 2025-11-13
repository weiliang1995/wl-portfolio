import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col w-full md:flex-row gap-4 md:w-3/4 md:justify-between md:place-items-start">
      <div className="w-1/4">Image</div>
      <div className="text-center text-amber-800 flex flex-col">
        <h1 className="text-4xl font-bold text-shadow-xs mb-8">About Me</h1>
        <p className="text-2xl mb-2">William Kuik</p>
        <p className="text-amber-600 mb-1">
          Frontend Engineer @ <strong className="text-amber-800">Bybit</strong>
        </p>
        <p className="">Description</p>
      </div>
    </div>
  );
};

export default About;
