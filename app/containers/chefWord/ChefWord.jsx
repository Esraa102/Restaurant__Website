import React from "react";
import "./chefword.css";
import { ImageSection, SubHead } from "@/app/components";
import chef from "../../assets/pexels-ron-lach-8879653 1.png";
import Image from "next/image";
import colon from "../../assets/“.png";
import signature from "../../assets/Kevin Luosignature.png";
const ChefWord = () => {
  return (
    <div id="chefWord" className="about">
      <div className="section py-40 flex gap-10 flex-col lg:flex-row items-center justify-between">
        <ImageSection image={chef} />
        <div className="w-full lg:w-1/2">
          <SubHead head="Chef's Word" mainHead="What We Believe In" />
          <div className="text-textColor text-xl  mb-6 italic font-mainFont">
            <Image
              src={colon}
              alt="colon"
              width={50}
              className="inline-block mr-1 mb-0"
            ></Image>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            unde nesciunt delectus deserunt laboriosam expedita? Quos minima
            necessitatibus, tempora quidem pariatur suscipit quod! Doloremque
            rerum, quae ratione similique voluptates impedit.
          </div>
          <p className="font-mainFont text-mainColor text-semibold text-3xl">
            Kevin Luo
          </p>
          <p className="text-textColor text-sm">Chef & Founder</p>
          <Image
            src={signature}
            alt="signature"
            width={200}
            className="mt-6"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ChefWord;
