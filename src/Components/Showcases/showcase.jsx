import React from "react";
import { motion } from "framer-motion";
import imageTransform from "../../images/desktop/image-transform.jpg";
import imageTransformMobile from "../../images/mobile/image-transform.jpg";
import imageStandOut from "../../images/desktop/image-stand-out.jpg";
import imageStandOutMobile from "../../images/mobile/image-stand-out.jpg";
import imageGraphicDesign from "../../images/desktop/image-graphic-design.jpg";
import imageGraphicDesignMobile from "../../images/mobile/image-graphic-design.jpg";
import imageOrange from "../../images/desktop/image-photography.jpg";
import imageOrangeMobile from "../../images/mobile/image-photography.jpg";

const Showcase = () => {
  return (
    <>
      <section className="relative -mt-10">
        <div className="flex flex-col items-center justify-between md:flex-row md:justify-between ">
          <div className="flex flex-col items-center justify-center mx-auto w-full md:w-1/3">
            <motion.h2 className="text-dark-blue text-center text-6xl md:text-5xl w-full  mt-10  md:text-left  font-fontFraunces font-[700] mb-4">
              Transform your brand
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-very-dark-grayish-blue p-2 text-defaultFontSize leading-1/2 text-center md:text-justify mb-10"
            >
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </motion.p>

            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="pb-1 brandLink z-10  uppercase text-dark-blue font-fontBarlow font-[600] text-xl text-center relative md:-left-40 mb-10"
            >
              Learn more
            </motion.a>
          </div>

          <div className="-order-2 md:order-2 md:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageTransform}
              alt=""
              className="hidden md:block max-w-full h-auto"
            />
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageTransformMobile}
              alt=""
              className="md:hidden max-w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row md:justify-between">
          <div className="flex flex-col items-center  md:w-1/2 order-2 w-full ">
            <motion.h2 className="text-dark-blue text-center text-6xl md:text-5xl w-full md:w-[36.875rem]  mt-10  md:text-left  md:ml-32 font-fontFraunces font-[700] mb-4">
              Stand out to the right audience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-very-dark-grayish-blue p-2 text-defaultFontSize  text-center  md:text-left md:w-[480px] mb-10"
            >
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              href="/"
              className="pb-1 standLink z-10 mb-10 flex items-start uppercase text-dark-blue font-fontBarlow font-[600] text-xl text-center md:-left-40"
            >
              Learn more
            </motion.a>
          </div>

          <div className="md:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageStandOut}
              alt=""
              className="hidden md:block md:max-w-56 h-auto"
            />
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageStandOutMobile}
              alt=""
              className="md:hidden max-w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mb-0">
          <div className="flex flex-col items-center -mb-36 -mr-1">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageGraphicDesign}
              alt=""
              className="hidden md:block max-w-56  h-auto"
            />
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageGraphicDesignMobile}
              alt=""
              className="md:hidden max-w-full h-auto"
            />

            <div className="relative -top-52 flex flex-col items-center w-80 ">
              <h3 className="text-dark-desaturated-cyan font-fontBarlow font-[700] text-3xl mb-4">
                Graphic design
              </h3>
              <p className="text-center text-dark-moderate-cyan  font-fontBarlow font-[600] text-defaultFontSize">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageOrange}
              alt=""
              className="hidden md:block max-w-56 h-auto "
            />
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={imageOrangeMobile}
              alt=""
              className="md:hidden max-w-full h-auto"
            />

            <div className="relative -top-52 flex flex-col items-center w-72 ">
              <h3 className="text-dark-blue font-fontBarlow font-[700] text-3xl mb-4">
                Photography
              </h3>
              <p className=" text-center font-fontBarlow font-[600] text-very-dark-desaturated-blue text-defaultFontSize">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Showcase;
