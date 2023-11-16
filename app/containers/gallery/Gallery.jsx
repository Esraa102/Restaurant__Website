import React from "react";
import "./Gallery.css";
import Image from "next/image";
import curve from "../../assets/Vector 14curve.png";
import { SubHead } from "@/app/components";
import images from "@/app/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Gallery = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div id="gallery" className="bg-[#0c0c0c] relative overflow-hidden z-0">
      <Image
        src={curve}
        alt="curve"
        className="absolute top-0 right-0 -z-[1]"
      ></Image>
      <div className="section flex gap-10 py-20 items-center flex-col lg:flex-row">
        <div className="w-full">
          <SubHead head="Instagram" mainHead="Photo Gallery" />
          <p className="text-textColor text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            repellat, exercitationem fugiat obcaecati totam ratione omnis
            eligendi praesentium ex vero est delectus explicabo error illo
            impedit quibusdam commodi sunt quia?
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="relative w-[70%] slider-container">
          <div
            id="slider"
            className="  w-full overflow-auto   scroll-smooth p-2  whitespace-nowrap gallery-images"
          >
            {images.map((item, index) => (
              <div key={index} className="imageBox box">
                <Image src={item} alt="gallery" className="img"></Image>
                <div className="boxlayer layer">
                  <span className="text-3xl text-white cursor-pointer">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span
            onClick={() => slideLeft()}
            className="text-black  cursor-pointer text-4xl absolute top-1/2 -translate-y-1/2 left-4"
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
          </span>
          <span
            onClick={() => slideRight()}
            className="text-black  cursor-pointer text-4xl absolute top-1/2 -translate-y-1/2 right-4"
          >
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
