import React, { useRef } from "react";
import { animate, useInView } from "framer-motion";
import dumbell from "../../assets/dumbell.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 1.5,
    once: true,
  });

  return (
    <div
      className={`w-[90%] mx-auto text-center mb-8 sm:text-xl ${
        isInView
          ? "animate-fromLeft opacity-100 lg:animate-none"
          : "opacity-0 lg:opacity-100"
      }`}
    >
      <div className="mt-4 relative  xl:mt-20 w-full flex justify-center   ">
        <h1 className="text-black text-4xl md:text-5xl relative w-fit">
          <div
            className={`h-8 w-8 border-t-brand border-r-brand border-b-0 border-l-0 border-r-2 border-t-2 absolute right-[-50px] top-[0]  transition-all duration-500 ${
              isInView ? "lg:animate-90degRight" : ""
            }`}
          ></div>
          Our <span className="text-black">Mission</span>.
          <div
            className={`h-8 w-8 border-l-brand border-b-brand border-r-0 border-t-0 border-l-2 border-b-2 absolute left-[-50px] bottom-[-10px]  ${
              isInView ? "lg:animate-90degLeft" : ""
            }`}
          ></div>
        </h1>
      </div>
      <h2 ref={ref} className="text-xl my-8 lg:mt-16 lg:text-3xl">
        LEARN, PROGRESS, AND BECOME STRONGER
      </h2>
      <p className="mb-3 lg:mb-6 lg:mt-16 ">
        <span className="text-brand text-2xl">Speed |</span>{" "}
        <span className="font-bold">Faster </span>
        than before.
      </p>
      <p className="mb-3 lg:mb-6">
        <span className="text-brand text-2xl">Endurance |</span>{" "}
        <span className="font-bold">Withstand </span> more than before.
      </p>
      <p className="mb-3 lg:mb-6">
        <span className="text-brand text-2xl">Fortitude |</span>{" "}
        <span className="font-bold">Step </span> further than before.
      </p>
      <p className="mb-3 lg:mb-6">
        <span className="text-brand text-2xl">Power |</span>{" "}
        <span className="font-bold">Lift </span> more than before.
      </p>
      <p className="mb-8 lg:mb-16">
        <span className="text-brand text-2xl">Mobility |</span>{" "}
        <span className="font-bold">Move </span> better than before.
      </p>
      {/* <button className="border py-1 px-2 text-xl">Personal Training</button> */}
    </div>
  );
};

export default About;
