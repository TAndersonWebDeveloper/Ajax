import React, { useEffect, useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";
import axios from "axios";
import { useSelector } from "react-redux";
const SavedExerciseCard = (exercise) => {
  const user = useSelector((state) => state.auth.user);
  const [show, setShow] = useState(false);
  const unFavorite = async (id) => {
    const response = await axios.delete(
      `https://ajaxfitness.herokuapp.com/api/exercises/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    setShow(false);
  };
  return (
    <div>
      <div
        onClick={() => {
          setShow(!show);
        }}
        className="relative mt-6 mb-2 cursor-pointer"
      >
        <h1>{exercise.exercise.name}</h1>
        <HiOutlineChevronUp
          className={` transition-all duration-300 ease-in-out absolute right-0 top-[50%] translate-y-[-50%] ${
            show ? "rotate-180" : "rotate-0"
          } 
            `}
        />
      </div>
      {show && (
        <div className={`shadow-shop-card p-4`}>
          <h2>
            <span className="font-bold">Target Muscle :</span>{" "}
            {exercise.exercise.muscle.toUpperCase()}
          </h2>
          <p>
            {" "}
            <span className="font-bold">Instructions :</span>{" "}
            {exercise.exercise.instructions}
          </p>
          <button
            className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
            onClick={() => {
              unFavorite(exercise.exercise._id);
            }}
          >
            Unfavorite
          </button>
        </div>
      )}
    </div>
  );
};

export default SavedExerciseCard;
