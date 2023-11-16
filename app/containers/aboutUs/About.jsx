import React from "react";
import "./About.css";
import Image from "next/image";
import spoon from "../../assets/Vectorspoon.png";
import G from "../../assets/GgLetter.png";
import knif from "../../assets/savernake-knives-f4jl2ezowuM-unsplash 2.png";
const About = () => {
  return (
    <div
      id="about"
      className="about min-h-screen mt-20 relative z-0 flex items-center justify-center"
    >
      <div className="section flex items-center flex-col lg:flex-row gap-10 h-full mb-0">
        <Image
          src={G}
          alt="gimage"
          className="-z-[1] w-[250px] sm:w-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></Image>
        <div dir="rtl" className="content">
          <h2 className="font-mainFont font-bold text-mainColor text-6xl">
            About Us
          </h2>
          <Image src={spoon} alt="spoon" className="mt-2 -scale-x-100"></Image>
          <p className="my-4 text-sm text-textColor leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            exercitationem, dicta corrupti eaque officiis enim at iure
            laudantium aspernatur nobis consequuntur! Provident vero ducimus
            rerum culpa dolor ipsa illum inventore!
          </p>
          <button className="btn font-mainFont font-semibold text-xl">
            Know More
          </button>
        </div>
        <Image src={knif} alt="knife" className="lg:h-[500px]"></Image>
        <div>
          <h2 className="font-mainFont font-bold text-mainColor text-6xl">
            Our History
          </h2>
          <Image src={spoon} alt="spoon" className="mt-2"></Image>
          <p className="my-4 text-sm text-textColor leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
            exercitationem, dicta corrupti eaque officiis enim at iure
            laudantium aspernatur nobis consequuntur! Provident vero ducimus
            rerum culpa dolor ipsa illum inventore!
          </p>
          <button className="btn font-mainFont font-semibold text-xl">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
