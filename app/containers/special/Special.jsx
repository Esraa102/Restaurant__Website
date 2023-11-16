import React from "react";
import "./special.css";
import { MenuItem, SubHead } from "@/app/components";
import Image from "next/image";
import curve from "../../assets/Vector 14curve.png";
import juice from "../../assets/3596233 1 (1).png";
import { Wine } from "./data/Data";
import { cocktails } from "./data/Data";
const Special = () => {
  return (
    <div id="menue" className="relative z-0 overflow-hidden">
      <Image
        src={curve}
        alt="curve"
        className="absolute h-[200%]  -z-[1]"
      ></Image>
      <div className="section py-20">
        <div className="mx-auto w-fit text-center">
          <SubHead
            head="Menu that fits you palatte"
            mainHead="Today’s Special"
          />
        </div>
        <div className="flex gap-10 flex-col lg:flex-row items-center justify-between lg:items-start">
          <div>
            <h3 className="text-white text-semibold font-mainFont text-4xl">
              Wine & Beer
            </h3>
            <div>
              {Wine.map((wine, index) => (
                <MenuItem
                  key={index}
                  item={wine.title}
                  price={wine.price}
                  subItem={wine.tag}
                />
              ))}
            </div>
          </div>
          <Image src={juice} alt="juice"></Image>
          <div>
            <h3 className="text-white text-semibold font-mainFont text-4xl">
              Cocktails
            </h3>
            <div>
              {cocktails.map((cook, index) => (
                <MenuItem
                  key={index}
                  item={cook.title}
                  price={cook.price}
                  subItem={cook.tag}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="btn mx-auto block  mt-20 ">View More</button>
      </div>
    </div>
  );
};

export default Special;
