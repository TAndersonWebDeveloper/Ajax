import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "../../index.css";
import logo from "../../assets/Ajax-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/features/authSlice";

const DesktopNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  return (
    <nav className="hidden lg:fixed lg:flex lg:justify-between w-full text-white items-center bg-blackLighterSeeThrough text-lg py-1 z-50 pr-4 ">
      <div>
        <NavLink to="/" className=" text-xl   text-brandDark ">
          <img src={logo} className="w-[200px]" />
        </NavLink>
      </div>
      <ul className="flex gap-4">
        <li className="  hover:border-b-2 border-brand">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="  hover:border-b-2 border-brand">
          <NavLink to="/shake-factory">Shake Factory</NavLink>
        </li>
        <li className="  hover:border-b-2 border-brand">
          <NavLink to="/fit-shop">Fitshop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <div className="relative">
              <AiOutlineShoppingCart className="text-3xl hover:text-brand" />
              <div
                className="
              
              absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-white text-black text-sm flex items-center justify-center"
              >
                {cart.cartSize}
              </div>
            </div>
          </NavLink>
        </li>
        <li className="  hover:border-b-2 border-brand">
          <NavLink to="/exercises">FitFolio</NavLink>
        </li>
        <li className="  hover:border-b-2 border-brand">
          <NavLink to="profile">Profile</NavLink>
        </li>
        {!user && (
          <li className="  hover:border-b-2 border-brand">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {!user && (
          <li className="  hover:border-b-2 border-brand">
            <NavLink to="/register">Register</NavLink>
          </li>
        )}
        {user && (
          <li
            className="cursor-pointer  hover:border-b-2 border-brand"
            onClick={() => {
              dispatch(logout());
              window.location.reload();
            }}
          >
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
