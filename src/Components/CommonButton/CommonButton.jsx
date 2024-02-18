import React from "react";

const CommonButton = ({ButtonName}) => {
  return (
    <div className="w-full mb-8 flex justify-center items-center">
      <button className="mx-auto btn border-b-4 text-main border-b-main">
        {ButtonName}
      </button>
    </div>
  );
};

export default CommonButton;
