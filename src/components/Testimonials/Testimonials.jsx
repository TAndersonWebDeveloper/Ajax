import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.5,
    once: true,
  });
  return (
    <div
      ref={ref}
      className={`w-[90%] mt-8 mx-auto text-center mb-8 lg:py-8 ${
        isInView ? "animate-fromLeft opacity-100" : "opacity-0"
      }`}
    >
      <div className=" h-1 w-64 bg-brand mx-auto sm:w-96 lg:w-[70%] "></div>
      <h2 className="text-xl my-8 lg:mt-16 lg:text-3xl">QUALITY MATTERS</h2>
      <p className="mb-2">
        Our coaches have a{" "}
        <span className="font-bold">
          wealth of knowledge concerning all things fitness.
        </span>
      </p>
      <p className="mb-2">
        That application of knowledge is what makes us{" "}
        <span className="font-bold">different from your typical gym</span>
      </p>
      <p className="mb-2 lg:mb-16">
        When it comes to your body, your health, your lifestyle and wellbeing -{" "}
        <span className="font-bold">quality truly matters.</span>
      </p>
      {/* <button className="border py-1 px-2 text-xl mt-8">Testimonials</button> */}
      <div className=" mt-8 h-1 w-64 bg-brand mx-auto sm:w-96 lg:w-[90%]"></div>
    </div>
  );
};

export default Testimonials;
