import React from "react";

const HomeButton = ({background, mainColor, mainText, hoverBackground}) => {
  return (
    <div className={`px-5 py-2 bg-${background} hover:bg-${hoverBackground} text-${mainColor} rounded-lg border-b-4 hover:border-b-0 font-semibold hover:text-${mainColor} border-${mainColor} my-3`}>
      {mainText}
    </div>
  );
};

export default HomeButton;
