import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "./../../../assets/home/01.jpg";
import img2 from "./../../../assets/home/02.jpg";
import img3 from "./../../../assets/home/03.jpg";
import img4 from "./../../../assets/home/04.jpg";
import img5 from "./../../../assets/home/05.jpg";
import img6 from "./../../../assets/home/06.jpg";

const Banner = () => {
  const carouselStyle = {
  height: "100%", // Set your desired height here, e.g., 75%
  };

  return (
    <div>
      <Carousel style={carouselStyle}>
        <div>
          <img className="" src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
