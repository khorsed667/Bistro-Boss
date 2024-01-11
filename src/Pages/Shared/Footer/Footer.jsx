import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[200px]">
      <div className="flex justify-center items-center text-white h-full">
        <div className="w-1/2 flex flex-col justify-center items-center py-3 bg-[#1F2937] h-full">
          <p className="text-2xl font-semibold">CONTACT US</p>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center py-3 bg-[#111827] h-full">
          <p className="text-2xl font-semibold">Follow US</p>
          <p>Join us on social media</p>
          <div>
            <FontAwesomeIcon className="text-2xl m-3 cursor-pointer" icon={faFacebook} />
            <FontAwesomeIcon className="text-2xl m-3 cursor-pointer" icon={faInstagram} />
            <FontAwesomeIcon className="text-2xl m-3 cursor-pointer" icon={faLinkedin} />
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
