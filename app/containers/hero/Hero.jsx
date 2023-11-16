import React from "react";
import "./hero.css";
import Image from "next/image";
import spoon from "../../assets/Vectorspoon.png";
import intro from "../../assets/khloe-arledge-ND3edEmzcdQ-unsplash.png";
import { ImageSection } from "@/app/components";
const Hero = () => {
  return (
    <div id="home" className="section mt-20">
      <div className="flex items-center gap-8 flex-col lg:flex-row justify-between ">
        <div className="w-full lg:w-1/2">
          <p className="text-2xl text-white font-mainFont">
            Chase a new flavor
          </p>
          <Image src={spoon} alt="spoon"></Image>
          <h1 className="font-bold text-mainColor text-4xl lg:text-6xl font-mainFont uppercase my-4">
            The key to Fine dining
          </h1>
          <p className="text-sm text-textColor">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus{" "}
          </p>
          <button className="btn">Explore More</button>
        </div>
        <ImageSection image={intro} />
      </div>
      <p className="text-mainColor mt-20 mx-auto  font-mainFont text-2xl w-fit ">
        11{" "}
        <span className="w-10 h-[1px] bg-mainColor inline-block mb-[3px] mx-1 "></span>
        14 20 23
      </p>
    </div>
  );
};

export default Hero;
