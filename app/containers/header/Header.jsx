import React, { useState } from "react";
import "./Header.css";
import { Navbar } from "@/app/components";
import Image from "next/image";
import logo from "../../assets/Geríchtlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="backdrop-blur-md sticky top-0 z-20">
      <div className="text-white section  flex items-center justify-between gap-4">
        <Image src={logo} alt="logo" className="w-[80px] lg:w-[130px]"></Image>
        <Navbar nav="large-nav" />
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="hover:text-mainColor transition duration-300  "
          >
            Log In / Regiseration
          </a>
          <span className="h-10 w-[1px] bg-mainColor block"></span>
          <a href="#" className="book">
            Book Table
          </a>
        </div>
        <div className="block lg:hidden">
          {show ? (
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setShow(false)}
            >
              <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
            </span>
          ) : (
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setShow(true)}
            >
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </span>
          )}
          {show && <Navbar nav="mobile-nav" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
