import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../app/cartSlice";
const CartItem = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex w-[90%]  mx-auto items-center mb-8 md:w-[80%] lg:w-[50%] lg:shadow-shop-card lg:pr-8 lg:h-[200px]">
      <div className="w-[50%] mr-2 lg:w-[40%] xl:w-[20%]">
        <img src={item.image} alt="" />
      </div>
      <div className="flex flex-col justify-start w-[80%] ">
        <h3 className="font-bold text-xl md:text-2xl">{item.name}</h3>
        <div>
          <div className="flex gap-4 items-center mt-2 justify-between">
            <p className="text-lg  text-gray-700 md:text-2xl">
              Quantity: {item.quantity}
            </p>
            <div>
              <button
                className="md:text-4xl mr-12 lg:hover:text-brand transition duration-150"
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                +
              </button>
              <button
                className="md:text-4xl  lg:hover:text-brand transition duration-150"
                onClick={() => {
                  dispatch(removeFromCart(item));
                  console.log(cart);
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>

        <p className="mt-2 text-gray-700">${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
