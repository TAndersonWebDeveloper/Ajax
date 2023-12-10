import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLoginUser = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
    window.location.href = "/";
  };

  return (
    <div className="w-full min-h-screen relative">
      <div className="h-16 bg-blackLighterSeeThrough lg:bg-transparent lg:h-32"></div>
      <div className="w-[90%] mx-auto absolute top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%] md:w-[70%] lg:w-[50%]">
        <form
          onSubmit={handleLoginUser}
          className="flex flex-col gap-4 w-[90%] mx-auto shadow-shop-card my-4 p-4 h-[30vh] justify-evenly "
        >
          <h1 className="text-3xl mb-2 text-center border-b-brand border-b-2 pb-2">
            Login
          </h1>
          <div className="flex flex-col flex-1 justify-center gap-4">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className=" shadow-shop-card p-2"
            />
            <input
              className=" shadow-shop-card p-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200 cursor-pointer w-[30%] mx-auto md:w-[20%] xl:w-[15%]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
