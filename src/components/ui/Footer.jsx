import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="flex  items-center justify-center w-full  bg-blackSeeThrough text-white py-4">
      <AiOutlineFacebook className="text-4xl mx-4" />
      <AiOutlineInstagram className="text-4xl mx-4" />
    </footer>
  );
};

export default Footer;
