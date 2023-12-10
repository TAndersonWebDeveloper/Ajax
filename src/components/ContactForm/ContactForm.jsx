import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      message,
    };
    await axios
      .post("https://ajaxfitness.herokuapp.com/api/contact", data)
      .then((res) => {
        setConfirmationMessage(res.data);
        toast.success(res.data);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        toast.error(err.response.data);
        setConfirmationMessage(err.data);
      });
    setLoading(false);
  };

  return (
    <div className="w-[90%] mx-auto text-center mt-8 mb-8 sm:w-[80%] lg:w-[70%] xl:w-[60%] shadow-shop-card p-8">
      <ToastContainer />
      <h2 className="text-3xl my-4 lg:my-16 lg:mb-8">QUESTIONS? REACH OUT.</h2>

      {loading && <PulseLoader color="#70e000 " />}

      {!loading && (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex w-full  mx-auto">
            <div className="flex flex-col items-start w-2/4 lg:mb-2">
              <input
                type="text"
                className=" w-[90%] p-1 shadow-shop-card"
                onChange={handleFirstName}
                value={firstName}
              />
              <span className="mt-1 ">First Name*</span>
            </div>
            <div className="flex flex-col items-start w-2/4 lg:mb-2">
              <input
                type="text"
                className="w-[100%] shadow-shop-card p-1"
                onChange={handleLastName}
                value={lastName}
              />
              <span className="mt-1">Last Name*</span>
            </div>
          </div>
          <div className="flex flex-col items-start mt-4 lg:mb-2">
            <input
              type="text"
              className="w-[100%] shadow-shop-card p-1"
              onChange={handleEmail}
              value={email}
            />
            <span className="mt-1">Email*</span>
          </div>
          <div className="flex flex-col items-start mt-4 lg:mb-8">
            <textarea
              className=" resize-none w-[100%] shadow-shop-card p-1 lg:h-28"
              onChange={handleMessage}
              value={message}
            />
            <span className="mt-1">How can we help?*</span>
          </div>
          <div className="flex justify-end lg:justify-center">
            <button
              type="submit"
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
