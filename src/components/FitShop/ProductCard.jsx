import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../app/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SlMagnifier } from "react-icons/sl";

import "react-toastify/dist/ReactToastify.css";
import "../../index.css";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="min-w-[70vw] h-fit mx-2 my-2 sm:min-w-[30vw] md:shadow-shop-card md:p-2 md:rounded-lg lg:min-w-[20vw] lg:flex-nowrap lg:hover:translate-y-[-5px] lg:transition-all lg:duration-300 lg:hover:shadow-shop-card-hover  ">
      <div className="relative z-1 ">
        <Link to={`/fit-shop/${item._id}`}>
          <img
            src={item.image}
            alt=""
            className="h-[40vh] w-[70vw] object-cover sm:h-[30vh] sm:object-contain "
          />
        </Link>

        <MdOutlineAddShoppingCart
          className="absolute bottom-2 left-2 text-5xl text-white bg-blackLighterSeeThrough rounded-full p-2 cursor-pointer md:hover:bg-brand md:transition-all md:duration-300 "
          onClick={() => {
            dispatch(addToCart(item));
            toast.success("Item added to cart");
          }}
        />
        <Link to={`/fit-shop/${item._id}`} product={item}>
          <SlMagnifier className="absolute bottom-2 right-2 text-5xl text-white bg-blackLighterSeeThrough rounded-full p-2 cursor-pointer overflow-visible md:hover:bg-brand md:transition-all md:duration-300 hidden" />
        </Link>
      </div>
      <div>
        <h3 className="font-bold md:text-xl">{item.name}</h3>
        <p className=" font-light">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
