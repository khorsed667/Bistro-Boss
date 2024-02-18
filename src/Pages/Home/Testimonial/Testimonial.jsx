import reviews from "./../../../../public/reviews.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Headings from "../../../Components/Headings/Headings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  return (
    <div className="xsm:my-10 max-w-screen-xl mx-auto">
      <Headings
        subHeading={"What our clients say"}
        headings={"Testimonial"}
      ></Headings>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mx-2">
        {reviews.map((rev, index) => (
          <SwiperSlide key={index}>
            <div className="w-full lg:px-16 text-center">
              <Rating className="mx-auto my-3" style={{ maxWidth: 180 }} value={rev.rating} readOnly />
              <FontAwesomeIcon className="text-7xl" icon={faCommentDots} />
              <p className="mx-2">{rev.details}</p>
              <p className="text-xl font-semibold text-main my-5">{rev.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
