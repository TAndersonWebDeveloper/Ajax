import React from "react";
import AmenityCard from "../components/Amenities/AmenityCard";

const ShakeFactory = () => {
  return (
    <div>
      <div className="min-h-screen shakefactory-img w-full">
        <div className=" h-screen  flex items-center">
          <div className="ml-8 relative sm:ml-14 xl:ml-40 xl:mt-20 ">
            <div className="h-8 w-8 border-t-white border-r-white border-b-0 border-l-0 border-r-2 border-t-2 absolute right-[-10px] top-[0]"></div>
            <h1 className="text-white text-4xl md:text-5xl">
              Blend and <span className="text-brand">boost</span>.
            </h1>
            <div className="h-8 w-8 border-l-brand border-b-brand border-r-0 border-t-0 border-l-2 border-b-2 absolute left-[-10px] bottom-[-10px]"></div>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-8 mx-auto text-center lg:w-full">
        <h2 className="text-2xl font-bold my-2 lg:text-3xl">
          Customize your shake!{" "}
        </h2>
        <p className="text-lg mb-2 underline">
          We offer a variety of boosts, including :{" "}
        </p>
        <ul>
          <li>Protein</li>
          <li>Energy</li>
          <li>Vitamin C</li>
          <li>
            <span className="text-brand">And more!</span>
          </li>
        </ul>
        <p className="text-lg my-2 underline">
          Add those to one of our flavors :{" "}
        </p>
        <ul className="mb-2">
          <li>Chocolate</li>
          <li>Vanilla</li>
          <li>Strawberry</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 lg:text-3xl">
          Specialty Drinks
        </h2>
        <div className="w-full lg:grid lg:grid-cols-3 lg:w-[95%] lg:mx-auto lg:gap-4">
          <div className="w-[100%] h-[500px] mx-auto relative rounded-2xl overflow-hidden mt-5 sm:w-[90%] sm:h-[600px] md:w-[80%] md:h-[700px] lg:w-full ">
            <div className={`w-full h-full triple-berry-img bg-cover`}></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blackLighterSeeThrough ">
              <div className="flex flex-col text-white justify-center items-center w-[80%] mx-auto h-full">
                <h3 className="text-4xl mb-8 text-center">
                  Triple Berry Smoothie
                </h3>
                <p>
                  Enjoy a delicious triple berry smoothie after your workout!
                  Add an additional shot of protein or energy for an extra
                  boost!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[500px] mx-auto relative rounded-2xl overflow-hidden mt-5 sm:w-[90%] sm:h-[600px] md:w-[80%] md:h-[700px] lg:w-full">
            <div className={`w-full h-full tropical-img bg-cover`}></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blackLighterSeeThrough ">
              <div className="flex flex-col text-white justify-center items-center w-[80%] mx-auto h-full">
                <h3 className="text-4xl mb-8 text-center">Tropical Smoothie</h3>
                <p>
                  Feel like you're on vacation with our tropical smoothie! Add
                  an additional shot of protein or energy for an extra boost!
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[500px] mx-auto relative rounded-2xl overflow-hidden my-5 sm:w-[90%] sm:h-[600px] md:w-[80%] md:h-[700px] lg:w-full">
            <div className={`w-full h-full matcha-img bg-cover`}></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-blackLighterSeeThrough ">
              <div className="flex flex-col text-white justify-center items-center w-[80%] mx-auto h-full">
                <h3 className="text-4xl mb-8 text-center">Matcha Shake</h3>
                <p>
                  Try our new matcha shake! Get a boost a natural energy and
                  antioxidants! Add an additional shot of protein or energy for
                  an extra boost!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShakeFactory;
