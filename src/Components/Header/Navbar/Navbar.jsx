import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HamburguerMenu from "../../../images/icon-hamburger.svg";
import IconClose from "../../../images/icon-close.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const variants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <div className="flex justify-between w-full mb-20">
      <motion.button
        className="block md:hidden"
        onClick={toggleIsMenuOpen}
        animate={isMenuOpen ? "open" : "closed"}
      >
        {isMenuOpen ? (
          <motion.img
            variants={variants}
            src={IconClose}
            alt=""
            className="cursor-pointer p-2 absolute -top-1 right-4 text-white"
          />
        ) : (
          <motion.img
            variants={variants}
            src={HamburguerMenu}
            alt=""
            className="cursor-pointer p-2 "
          />
        )}
      </motion.button>

      {/**Mobile Navbar */}

      <motion.div
        initial={{ opacity: 0, scale:2 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{ duration: 3}}
        className={`bg-white z-10 w-96 h-96 relative top-12 right-12 mx-auto mt-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full block"
        >
          <ul
         
            className="flex flex-col items-center justify-center h-full text-very-dark-grayish-blue font-[700] font-fontFraunces"
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="py-5"
            >
              <a href="/" className="">
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="py-5"
            >
              <a href="/">Services</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="py-5"
            >
              <a href="/" className="">
                Projects
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="py-5"
            >
              <a
                href="/"
                className="rounded-full bg-Yellow text-very-dark-desaturated-blue p-5"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </motion.div>

      {/**Desktop Navbar */}
      <div className="">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-2 md:flex-row md:gap-9 md:mr-auto w-full text-center "
        >
          <ul className="flex items-center justify-between text-white font-fontFraunces font-[600]">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="/"
                className="md:hover:text-very-dark-desaturated-blue md:hover:bg-white md:rounded-full p-5"
              >
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/"
                className="md:hover:text-very-dark-desaturated-blue md:hover:bg-white md:rounded-full p-5"
              >
                Services
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="/"
                className="md:hover:text-very-dark-desaturated-blue md:hover:bg-white md:rounded-full p-5"
              >
                Projects
              </a>
            </motion.li>
            <motion.li
              className="px-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a
                href="/"
                className="rounded-full md:bg-white text-very-dark-desaturated-blue p-5"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
};
export default Navbar;
