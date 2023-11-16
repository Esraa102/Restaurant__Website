import React from "react";
import "./Laurels.css";
import Image from "next/image";
import group from "../../assets/Group 87.png";
import { SubHead } from "@/app/components";
import laurel from "../../assets/mgg-vitchakorn-J5ZivsKiu9c-unsplash 2.png";
import whiteG from "../../assets/GwhiteG.png";
import dataLauerls from "./data/dataLaurels";
const Laurels = () => {
  return (
    <div id="laurels" className="relative about">
      <Image
        src={group}
        alt="group"
        className="absolute  top-8 left-8 w-28"
      ></Image>
      <div className="section laurelSection ">
        <div className="w-full lg:w-1/2">
          <SubHead head="Awards & recognition" mainHead="Our Laurels" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataLauerls.map((item, index) => (
              <div key={index} className="part">
                <Image src={item.img} alt="/"></Image>
                <div>
                  <span className="partHead">{item.head}</span>
                  <p className="partPara">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <Image src={laurel} alt="laurel"></Image>
          <Image
            src={whiteG}
            alt="whiteGLetter"
            className="absolute bottom-0 left-0  lg:-left-20"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Laurels;
