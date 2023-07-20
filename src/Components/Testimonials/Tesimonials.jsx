import React from "react";
import imageEmily from "../../images/image-emily.jpg";
import imageJennie from "../../images/image-jennie.jpg";
import imageThomas from "../../images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <section className="relative flex flex-col md:flex -top-16 items-center">
      <div className="mb-10">
        <h3 className="font-fontFraunces font-[700] text-grayish-blue text-xl uppercase">
          Client testimonials
        </h3>
      </div>

      <div className="flex flex-col gap-10 justify-around items-center md:flex-row w-full">
        <div className="flex flex-col items-center w-72 ">
          <img src={imageEmily} alt="" className="rounded-full w-16 h-16 m-4" />
          <p className="text-defaultFontSize text-center text-very-dark-desaturated-blue font-fontBarlow mb-4">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>

          <h4 className="font-fontBarlow text-very-dark-desaturated-blue font-[600]">
            Emily R.
          </h4>
          <h5 className="font-fontFraunces text-very-dark-grayish-blue text-sm">
            Marketing Director
          </h5>
        </div>

        <div className="flex flex-col items-center w-72 0">
          <img
            src={imageThomas}
            alt=""
            className="rounded-full w-16 h-16 m-4"
          />
          <p className="text-lg text-center text-very-dark-desaturated-blue font-fontBarlow mb-4">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>

          <h4 className="font-fontBarlow text-very-dark-desaturated-blue font-[600]">
            Thomas S.
          </h4>
          <h5 className="font-fontFraunces text-very-dark-grayish-blue text-sm">
            Chief Operating Officer
          </h5>
        </div>

        <div className="flex flex-col items-center w-72">
          <img
            src={imageJennie}
            alt=""
            className="rounded-full w-16 h-16 m-4"
          />
          <p className="text-center text-very-dark-desaturated-blue font-fontBarlow text-defaultFontSize mb-4">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>

          <h4 className="font-fontBarlow text-very-dark-desaturated-blue font-[600] mb-2">
            Jennie F.
          </h4>
          <h5 className="font-fontFraunces text-very-dark-grayish-blue text-sm">
            Business Owner
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
