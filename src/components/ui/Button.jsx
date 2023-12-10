import React from "react";

const Button = (props) => {
  return (
    <button className="border border-white py-2  px-4 text-2xl lg:hover:bg-brand transition-all duration-300">
      {props.name}
    </button>
  );
};

export default Button;
