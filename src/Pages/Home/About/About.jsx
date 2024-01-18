import React from "react";

const About = () => {
  return (
    <div className="bg-chef-service max-w-screen-xl mx-auto my-10 w-full h-[570px] flex justify-center items-center">
      <div className="w-3/4 bg-white flex justify-center items-center">
        <div className="w-3/4 py-20 text-justify">
          <p className="text-center text-3xl font-cinzel mb-5">Bistro Boss</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            velit reprehenderit cum rem quibusdam odio, rerum a deleniti eius, 
            <span className="md:inline hidden ">
            excepturi beatae exercitationem vitae. Tempora, vel fugiat quo
            beatae expedita amet necessitatibus nulla fugit laborum labore
            minima ex eligendi cum delectus.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
