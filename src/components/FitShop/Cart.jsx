import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../app/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <div className=" min-h-screen">
      <div className="h-16 bg-blackLighterSeeThrough lg:bg-transparent lg:h-28"></div>
      {cart.cartSize > 0 && (
        <div className="w-[90%] bg-[#f5f5f5] mx-auto pb-8 mb-8 md:w-[80%]  lg:w-[50%] ">
          <div className="mt-8">
            <h2 className="mx-auto py-2 font-bold text-lg text-center border-b-2 border-gray-300 w-[80%]">
              Summary
            </h2>
            <div className="flex flex-col w-[80%] mx-auto justify-between mt-4 border-b-2 border-gray-300 pb-6">
              <p className="flex justify-between pb-2">
                Items: <span>{cart.cartSize}</span>
              </p>
              <p className="font-bold flex justify-between">
                Subtotal: <span>${cart.total}</span>
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button className=" w-[80%] border border-gray-300 py-1 px-2 text-lg lg:hover:bg-brand lg:hover:text-white transition duration-150">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      {cart.cartSize === 0 && (
        <div className="relative flex flex-col justify-center items-center min-h-screen ">
          <AiOutlineShoppingCart className="text-[10rem] text-gray-300" />
          <h2 className="text-4xl mt-8">Your cart is empty</h2>
          <div className="mb-8 flex justify-center mt-8 ">
            <Link
              to="/fit-shop"
              className="py-1 px-2 text-xl border border-gray-300 lg:hover:bg-brand lg:hover:text-white transition duration-150"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      )}
      {cart.items.map((item) => {
        return <CartItem item={item} />;
      })}
      {cart.cartSize > 0 && (
        <div className="mb-8 flex justify-center">
          <Link
            to="/fit-shop"
            className="py-1 px-2 text-lg border border-gray-300 lg:hover:bg-brand lg:hover:text-white transition duration-150"
          >
            Back to Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
