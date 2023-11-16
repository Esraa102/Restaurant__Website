import React from "react";
import "./imagesection.css";
import Image from "next/image";
const ImageSection = (props) => {
  return (
    <div className="w-full  lg:w-[40%]  relative h-[580px] ">
      <div className="w-1/2 h-1/2 md:w-1/2 md:h-1/2 bg-mainColor absolute bottom-0 left-0"></div>
      <div className=" w-1/2 h-1/2  md:w-1/2 md:h-1/2 bg-mainColor absolute top-0 right-0"></div>
      <Image
        src={props.image}
        alt=""
        className="absolute w-[95%] h-[95%] left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 object-cover"
      ></Image>
    </div>
  );
};

export default ImageSection;
