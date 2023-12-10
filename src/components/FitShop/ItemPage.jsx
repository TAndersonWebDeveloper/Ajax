import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { newReleases } from "./FitShopData";
import { addToCart, removeFromCart } from "../../app/cartSlice";
import { toast, ToastContainer } from "react-toastify";
const ItemPage = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `https://ajaxfitness.herokuapp.com/api/products/${id}`
        );
        console.log(res);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    };
    getProducts();
  }, []);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="w-full min-h-screen md:flex md:flex-col md:items-center  lg:justify-center">
      <ToastContainer />
      <div className="h-16 w-full bg-blackSeeThrough lg:hidden "></div>
      <div className="lg:w-[80%] lg:mx-auto xl:w-[70%]  ">
        <div className="mt-8 relative lg:mt-28">
          <img
            src={product.image}
            alt=""
            className="md:w-[50%] mx-auto md:h-[50%] lg:w-[500px] "
          />
          <BiArrowBack
            className="text-5xl absolute top-0 left-0 mt-8 ml-8 cursor-pointer bg-blackLighterSeeThrough rounded-full p-2 text-white md:hover:bg-brand md:transition-all md:duration-300"
            onClick={() => window.history.back()}
          />
        </div>
        <div className="w-[80%] mx-auto mt-8">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="mb-2">{product.description}</p>
          <p className="mb-2">${product.price}</p>
          <div className="my-8">
            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success("Item added to cart");
              }}
              className="border mr-2 border-gray-300 px-4 py-2 rounded-md  md:hover:bg-brand md:transition-all md:duration-300 md:hover:text-white"
            >
              Add to Cart
            </button>
            <Link
              className="border mr-2 border-gray-300 px-4 py-2 rounded-md md:hover:bg-brand md:transition-all md:duration-300 md:hover:text-white"
              to="/fit-shop"
            >
              Back to Shop
            </Link>
            <Link
              className="border mr-2 border-gray-300 px-4 py-2 rounded-md md:hover:bg-brand md:transition-all md:duration-300 md:hover:text-white"
              to="/cart"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
