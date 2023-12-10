import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="hero-container ">
      <div className=" h-screen hero-img flex items-center">
        <div className="ml-8 relative sm:ml-14 xl:ml-40 xl:mt-20">
          <div className="h-8 w-8 border-t-white border-r-white border-b-0 border-l-0 border-r-2 border-t-2 absolute right-[-10px] top-[0]"></div>
          <h1 className="text-white text-4xl sm:text-5xl">
            Love the <span className="text-brand">gym</span> again.
          </h1>
          <div className="h-8 w-8 border-l-brand border-b-brand border-r-0 border-t-0 border-l-2 border-b-2 absolute left-[-10px] bottom-[-10px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
