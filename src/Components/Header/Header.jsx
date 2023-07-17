import React from "react";

import { useState } from "react";
import IconClose from "../../images/icon-close.svg";
import HamburguerMenu from "../../images/icon-hamburger.svg";
import logo from "../../images/logo.svg";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-defaultBackground md:bg-mediumBackground lg:bg-largeBackground bg-cover bg-bottom h-screen relative text-white">
      <div className="absolute top-0 left-0 right-0  w-full mt-10 mx-auto flex items-center justify-between px-5 md:px-7">
        <div>
          <a href="/">
            <img
              src={logo}
              alt=""
              className="w-[4.5rem] md:w-[auto] flex-shrink-0 mr-auto md:mr-0"
              aria-label="logo"
            />
          </a>
        </div>

        <div>
          {isMenuOpen ? (
            <button type="button" className="flex-shrink-0">
              <img
                src={IconClose}
                alt=""
                onClick={setIsMenuOpen(false)}
                className="md:hidden cursor-pointer p-2 h-[2.5rem]"
              />
            </button>
          ) : (
            <button
              type="button"
              className="flex-shrink-0"
              aria-label="mobile-menu"
            >
              <img
                src={HamburguerMenu}
                alt=""
                className="md:hidden cursor-pointer p-2"
              />
            </button>
          )}
        </div>

        <div className="">
          <nav className="flex flex-col gap-2 md:flex-row md:gap-9 md:mr-auto w-full text-center md:text-left">
            <ul className="flex items-center justify-between text-white font-fontFraunces font-[600]">
              <li className="px-5">
                <a href="/" className="">
                  About
                </a>
              </li>
              <li className="px-5">
                <a href="/">Services</a>
              </li>
              <li className="px-5">
                <a href="/">Projects</a>
              </li>
              <li className="px-5">
                <a
                  href="/"
                  className="rounded-full bg-white text-very-dark-desaturated-blue p-3"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-fontFraunces font-[700] text-7xl">
          We are creatives
        </h1>
      </div>
    </header>
  );
};
export default Header;
