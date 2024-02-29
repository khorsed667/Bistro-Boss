import React from "react";
import image from "./../../../assets/home/featured.jpg";
import Headings from "../../../Components/Headings/Headings";
import HomeButton from "../../../Components/HomeButton/HomeButton";

const Feature = () => {
  return (
    <div className="lg:h-[600px] md:h-[450px] bg-feature-img bg-fixed text-white my-10 bg-cover flex flex-col items-center">
      <Headings
        subHeading={"Check it out"}
        headings={"From Our Menu"}
      ></Headings>
      <div className="flex justify-center items-center h-5/6 w-full max-w-screen-xl mx-auto">
        <div className="w-1/2 xsm:hidden md:block md:mx-5">
          <img src={image} alt="" />
        </div>
        <div className="md:w-1/2 text-start mx-5">
          <p className="text-white text-lg">January 10, 2024</p>
          <p className="text-xl text-main">WHERE CAN I GET SOME?</p>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            consequatur, numquam quidem asperiores quod unde molestiae corporis
            sed repudiandae, nemo repellat quos perspiciatis quam ab similique!
            Sint voluptatum neque quae.
          </p>
          {/* <button className="btn btn-outline border-b-4 border-main border-0"></button> */}
          <div className="w-1/4">
            <HomeButton
              background={"transparent"}
              mainColor={"white"}
              mainText={"Read More"}
              hoverBackground={"[#1F2937]"}
            ></HomeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
