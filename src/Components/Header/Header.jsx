import React from "react";
import IconArroDown from "../../images/icon-arrow-down.svg";
import MobileNavbar from "./Navbar/Navbar";
import logo from "../../images/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-defaultBackground md:bg-mediumBackground lg:bg-largeBackground bg-cover bg-bottom h-screen relative -top-10 left-0 right-0  text-white">
      <div className=" relative container top-20 mx-auto px-5 md:px-7 flex  justify-between">
        <div className="">
          <img src={logo} alt="" aria-label="logo" />
        </div>
        <div>
          <MobileNavbar />
        </div>

        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ">
          <h1 className="font-fontFraunces font-[700] text-7xl text-center">
            We are creatives
          </h1>
        </div>

        <div className="absolute top-60 md:top-48 left-1/2 cursor-pointer">
          <motion.img
            animate={{ y: [-10, 10] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={IconArroDown}
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
