import React from "react";
import "./find.css";
import findImg from "../../assets/vitor-pinto-bYSpfD0Wn04-unsplash 1.png";
import { ImageSection, SubHead } from "@/app/components";
const FindUs = () => {
  return (
    <div id="contact" className="about">
      <div className="section py-20 flex gap-10 flex-col lg:flex-row items-center justify-between">
        <div>
          <SubHead head="Contact" mainHead="Find Us" />
          <p className="text-textColor text-lg mb-4">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <h3 className="text-mainColor font-mainFont text-3xl font-bold mb-4">
            Opening Hours
          </h3>
          <p className="text-white text-sm mb-4">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="text-white text-sm mb-4">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button className="btn text-2xl">Visit Us</button>
        </div>
        <ImageSection image={findImg} />
      </div>
    </div>
  );
};

export default FindUs;
