import React from "react";
import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconPinterest from "../../images/icon-pinterest.svg";
import iconTwitter from "../../images/icon-twitter.svg";


const Footer = () => {
    return (
      <footer className="flex flex-col items-center bg-dark-moderate-cyan h-60">
        <div className="m-10">
          <h1 className="font-fontBarlow font-[700] text-5xl text-dark-desaturated-cyan">
            sunnyside
          </h1>
        </div>

        <div className="">
          <nav>
            <ul className="flex flex-row gap-10 font-fontBarlow font-[700] text-defaultFontSize text-dark-desaturated-cyan">
              <li>
                <a href="/" className="">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-between flex-row gap-8 mt-10  ">
          <img src={iconFacebook} alt="" />
          <img src={iconInstagram} alt="" />
          <img src={iconPinterest} alt="" />
          <img src={iconTwitter} alt="" />
        </div>
      </footer>
    );
};
export default Footer;
