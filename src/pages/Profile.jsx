import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import SavedExerciseCard from "../components/Exercises/SavedExerciseCard";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderHistoryClicked, setOrderHistoryClicked] = useState(false);
  const [savedExercisesClicked, setSavedExercisesClicked] = useState(false);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    const fetchUserInfo = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://ajaxfitness.herokuapp.com/api/exercises",
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      setExercises(response.data);
    };
    fetchUserInfo();
    setLoading(false);
  }, [exercises, user, loading]);

  if (loading) {
    return (
      <div className="absolute top-[20%] left-[50%] translate-x-[-50%]">
        <PulseLoader color="#70e000" />
      </div>
    );
  }

  return (
    <div className=" min-h-screen relative">
      <div className="h-16 bg-blackLighterSeeThrough lg:bg-transparent lg:h-32"></div>
      <div className="w-[80%] mx-auto">
        {!loading && (
          <div className="mt-4">
            <h1 className="text-3xl mb-2 text-center border-b-brand border-b-2 pb-2">
              Welcome <span className="text-brand">{user?.user?.name}</span>!{" "}
            </h1>
            <h2 className="text-center">What would you like to do?</h2>
            <div className="flex items-center justify-evenly my-3">
              <button
                className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
                onClick={() => {
                  setOrderHistoryClicked(false);
                  setSavedExercisesClicked(!savedExercisesClicked);
                }}
              >
                Saved Exercises
              </button>
              <button
                className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
                onClick={() => {
                  setSavedExercisesClicked(false);
                  setOrderHistoryClicked(!orderHistoryClicked);
                }}
              >
                Order History
              </button>
            </div>
          </div>
        )}
        {loading && (
          <div className="absolute top-[20%] left-[50%] translate-x-[-50%]">
            <PulseLoader color="#70e000" />
          </div>
        )}
        {exercises.length === 0 && !loading && savedExercisesClicked && (
          <div>
            <h2 className="text-center text-xl mt-20">
              Add an exercise to get started.
            </h2>
            <div className="flex justify-center mt-2">
              <Link
                className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
                to="/exercises"
              >
                Search
              </Link>
            </div>
          </div>
        )}
        {savedExercisesClicked && (
          <div>
            {" "}
            {exercises.map((exercise) => {
              return <SavedExerciseCard exercise={exercise} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
