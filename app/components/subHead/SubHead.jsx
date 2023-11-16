import React from "react";
import "./SubHead.css";
import Image from "next/image";
import spoon from "../../assets/Vectorspoon.png";
const SubHead = (props) => {
  return (
    <div className="w-fit my-8">
      <p className="font-mainFont text-white text-xl ">{props.head}</p>
      <Image src={spoon} alt="spoon" className="inline-block mt-2 mb-6"></Image>
      <h2 className=" text-6xl font-mainFont text-mainColor font-bold mb-20">
        {props.mainHead}
      </h2>
    </div>
  );
};

export default SubHead;
