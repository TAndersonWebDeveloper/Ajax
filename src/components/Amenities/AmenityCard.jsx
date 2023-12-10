import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
const AmenityCard = (props) => {
  return (
    <div className="w-[90%] h-[500px] mx-auto  rounded-2xl overflow-hidden mt-5 sm:w-[70%] lg:w-full lg:cursor-pointer relative xl:h-[700px] lg:shadow-shop-card lg:hover:shadow-shop-card-hover lg:hover:translate-y-[-5px] transition-all duration-200 ">
      <div
        className={`w-full h-full ${props.background} bg-cover sm:bg-bottom mg:bg-center bg-no-repeat md:bg-fixed lg:bg-scroll xl:bg-center`}
      ></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-blackLighterSeeThrough lg:opacity-0 hover:lg:opacity-100 lg:transition-all lg:duration-300  ">
        <div className="flex flex-col text-white justify-center items-center w-[80%] mx-auto h-full">
          <h3 className="text-4xl mb-8">{props.name}</h3>
          <p className="mb-6">{props.description}</p>
          <Link to={props.link}>
            <Button name={props.button} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmenityCard;
