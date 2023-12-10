import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "../../index.css";
import logo from "../../assets/Ajax-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../app/features/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userCart, setUserCart] = useState([]);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    setUserCart(cart);
    console.log(userCart);
  }, [cart, setUserCart, user]);

  const handleScroll = () => {
    setIsOpen(false);
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`h-16 px-4 z-[999] fixed w-full  ${
        scrolled ? "bg-blackSeeThrough" : "bg-transparent"
      } transition-all duration-200 ease-in-out lg:hidden`}
    >
      <div className="container mx-auto h-full flex items-center justify-between z-50">
        <div>
          <Link to="/" className=" text-xl   text-brandDark ">
            <img src={logo} alt="logo" className="h-12 " />
          </Link>
        </div>

        <div
          className="h-[20%] flex flex-col justify-between z-50 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-[2px] bg-white w-8 ${
              isOpen ? "rotate-45 translate-y-[10px]" : ""
            } transition duration-500 ease-in-out`}
          ></div>
          <div
            className={` h-[2px] bg-white w-8 ${
              isOpen ? "rotate-[-45deg]" : ""
            } transition duration-500 ease-in-out`}
          ></div>
          {/* <div className=" h-[2px] bg-white w-8"></div> */}
        </div>
      </div>
      <div>
        <ul
          className={` border-l-2 border-brand px-16 flex absolute items-left justify-center text-4xl flex-col bg-blackSeeThrough  text-white  h-[100vh]  translate-x-[-50%] top-[0] z-[49] w-[100%]   ${
            isOpen ? "left-[50%]" : " left-[-100%]"
          } transition-all duration-500 ease-in-out    `}
        >
          <li
            className="mb-6 border-l-2 border-brand pl-4"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li
            className="mb-6 border-l-2 border-brand pl-4"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to="/shake-factory">Shake Factory</NavLink>
          </li>
          <li
            className="mb-6 border-l-2 border-brand pl-4 flex items-center "
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to="/fit-shop">Fit Shop</NavLink>
          </li>
          <li
            className="mb-6 border-l-2 border-brand pl-4 flex items-center "
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <NavLink to="/cart">Cart</NavLink>
            <div className="relative">
              <AiOutlineShoppingCart className="text-4xl ml-4" />
              <div
                className="
              
              absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-white text-black text-sm flex items-center justify-center"
              >
                {cart.cartSize}
              </div>
            </div>
          </li>

          {!user && (
            <div>
              {" "}
              <li
                className="mb-6 border-l-2 border-brand pl-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li
                className="mb-6 border-l-2 border-brand pl-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <NavLink to="/register">Register</NavLink>
              </li>
            </div>
          )}
          {user && (
            <div>
              <li
                className="mb-6 border-l-2 border-brand pl-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <NavLink to="/exercises">FitFolio</NavLink>
              </li>
              <li
                className="mb-6 border-l-2 border-brand pl-4"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li
                className="mb-6 border-l-2 border-brand pl-4"
                onClick={() => {
                  dispatch(logout());
                  setIsOpen(false);
                  window.location.reload();
                }}
              >
                Logout
              </li>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
