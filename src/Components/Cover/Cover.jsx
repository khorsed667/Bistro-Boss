import React from "react";

const Cover = ({ img, tittle, description }) => {
  return (
    <div
      className="hero h-[500px] w-full bg-fixed"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="hero-overlay xsm:px-10 sm:px-20 py-10">
          <h1 className="mb-5 text-5xl uppercase font-semibold">{tittle}</h1>
          <p className="mb-5 font-cinzel">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
