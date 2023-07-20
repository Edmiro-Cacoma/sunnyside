import React from "react";
import imageCone from "../../images/desktop/image-gallery-cone.jpg";
import imageMilkBottles from "../../images/desktop/image-gallery-milkbottles.jpg";
import imageOrange from "../../images/desktop/image-gallery-orange.jpg";
import imageSugarCubes from "../../images/desktop/image-gallery-sugarcubes.jpg";

import imageConeMobile from "../../images/mobile/image-gallery-cone.jpg";
import imageMilkBottlesMobile from "../../images/mobile/image-gallery-milkbottles.jpg";
import imageOrangeMobile from "../../images/mobile/image-gallery-orange.jpg";
import imageSugarCubesMobile from "../../images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className="relative">
      
        <div className="grid grid-cols-2  md:hidden">
          <img src={imageMilkBottles} alt="" className="w-full h-auto" />
          <img src={imageOrange} alt="" className="w-full h-auto" />
          <img src={imageCone} alt="" className="w-full h-auto" />
          <img src={imageSugarCubes} alt="" className="w-full h-auto" />
        </div>
        <div className="hidden md:grid md:grid-cols-4 ">
          <img src={imageMilkBottlesMobile} alt="" className="w-full h-auto" />
          <img src={imageOrangeMobile} alt="" className="w-full h-auto" />
          <img src={imageConeMobile} alt="" className="w-full h-auto" />
          <img src={imageSugarCubesMobile} alt="" className="w-full h-auto" />
        </div>
      
    </section>
  );
};

export default Gallery;
