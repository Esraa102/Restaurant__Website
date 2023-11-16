import React from "react";
import "./footerSection.css";
import { SubHead } from "@/app/components";
import Image from "next/image";
import spoon from "../../assets/Vectorspoon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const FooterSection = () => {
  return (
    <div>
      <div className="h-[200px] bg-[#0C0B08] relative">
        <div className="subscribe p-8">
          <div className="w-fit mx-auto text-center">
            <SubHead head="Newsletter" mainHead="Subscribe to Our Newsletter" />
          </div>
          <p className="mb-4 text-white text-lg">
            And never miss latest Updates!
          </p>
          <form
            action=""
            className="w-full flex gap-6  flex-col lg:flex-row justify-center  "
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              className="input"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-mainColor  font-mainFont text-2xl font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="about">
        <div className="section pt-[500px] pb-[50px]">
          <div className="foot">
            <div className="w-full">
              <p className="text-3xl font-mainFont text-mainColor mb-6 text-center">
                Contact Us
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                9 W 53rd St, New York, NY 10019, USA
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                +1 212-344-1230
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                +1 212-555-1230
              </p>
            </div>
            <div className="w-full">
              <a
                href="#"
                className="text-mainColor text-6xl font-mainFont font-bold uppercase mb-6 block text-center"
              >
                Gerícht
              </a>
              <p className="text-white text-lg text-center mb-4">
                &quot;The best way to find yourself is to lose yourself in the
                service of others.&quot;
              </p>
              <Image src={spoon} alt="spoon" className="mx-auto mb-4"></Image>
              <div className="flex gap-4 flex-wrap items-center justify-center ">
                <span className="text-2xl  text-[#F5EFDB] cursor-pointer">
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </span>
                <span className="text-2xl text-[#F5EFDB]  cursor-pointer">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </span>
                <span className="text-2xl  text-[#F5EFDB] cursor-pointer">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </span>
              </div>
            </div>
            <div className="w-full">
              <p className="text-3xl font-mainFont text-mainColor mb-6 text-center">
                Working Hours
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                Monday-Friday:
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                08:00 am -12:00 am
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                Saturday-Sunday:
              </p>
              <p className="text-textColor text-sm text-center mb-4">
                07:00am -11:00 pm
              </p>
            </div>
          </div>
          <p className="w-fit mx-auto text-textColor text-sm mt-20">
            2023 Gerícht. All Rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
