import React, { useRef } from "react";
import AmenityCard from "./AmenityCard";
import { useInView } from "framer-motion";

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.5,
    once: true,
  });
  return (
    <div
      ref={ref}
      className={`${
        isInView ? "lg:animate-fromTop" : ""
      } lg:grid lg:grid-cols-3 lg:gap-4 lg:w-[90%] lg:mx-auto `}
    >
      <AmenityCard
        background="bg-smoothie-card"
        name="Shake Factory"
        description="
        Stop in before or after your workout for a delicious, healthy smoothie or shake. We have a variety of flavors to choose from, including vegan and gluten-free options"
        link="/shake-factory"
        button="Browse"
      />
      <AmenityCard
        background="bg-supplements-card"
        name="Fit Shop"
        description="Supply your body with the nutrients it needs to perform at its best. We carry a variety of supplements, including protein powders, pre-workouts, and more."
        link="/fit-shop"
        button="Shop"
      />
      <AmenityCard
        background="bg-workout-card"
        name="Exercise Search"
        description="
        Find the perfect workout for you. We have a variety of exercises to choose from, including cardio, strength training, and more. Save your favorite exercises to your profile for easy access. "
        link="/exercises"
        button="Get Started"
      />
    </div>
  );
};

export default Amenities;
