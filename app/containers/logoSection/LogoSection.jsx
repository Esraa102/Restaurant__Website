import React from "react";
import "./logoSection.css";

const LogoSection = () => {
  return (
    <div className="intro h-screen relative z-0 flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000ba] -z-[1]"></div>
      <div className="text-center p-2">
        <p className=" text-6xl lg:text-8xl font-mainFont text-mainColor uppercase font-extrabold">
          Gerícht
        </p>
        <p className="font-mainFont text-white font-bold italic text-xl lg:text-2xl">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
