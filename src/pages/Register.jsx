import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../app/features/authSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleRegisterUser = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, admin: false }));
    navigate("/");
  };

  return (
    // <div className="pt-20">
    //   <form onSubmit={handleRegisterUser}>
    //     <input type="text" onChange={(e) => setName(e.target.value)} />
    //     <input type="email" onChange={(e) => setEmail(e.target.value)} />
    //     <input type="password" onChange={(e) => setPassword(e.target.value)} />
    //     <button type="submit">submit</button>
    //   </form>
    // </div>
    <div className="w-full min-h-screen relative">
      <div className="h-16 bg-blackLighterSeeThrough lg:bg-transparent lg:h-32"></div>
      <div className="w-[90%] mx-auto absolute top-[40%] translate-y-[-50%] left-[50%] translate-x-[-50%] md:w-[70%] lg:w-[50%]">
        <form
          onSubmit={handleRegisterUser}
          className="flex flex-col gap-4 w-[90%] mx-auto shadow-shop-card my-4 p-4 h-[40vh] justify-evenly "
        >
          <h1 className="text-3xl mb-2 text-center border-b-brand border-b-2 pb-2">
            Register
          </h1>
          <div className="flex flex-col flex-1 justify-center gap-4">
            <input
              placeholder="Name"
              id="name"
              type="text"
              className=" shadow-shop-card p-2"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              className=" shadow-shop-card p-2"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
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

export default Register;
