import React, { useEffect } from "react";
import axios from "axios";
import { HiOutlineChevronUp } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
const ExerciseCard = ({ exercise }) => {
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = React.useState(false);
  const [exercises, setExercises] = React.useState([]);
  const [saved, setSaved] = React.useState(false);
  const [currentExercise, setCurrentExercise] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await axios.get(
        "https://ajaxfitness.herokuapp.com/api/exercises",
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      setExercises(response.data);
      if (exercises.find((ex) => ex.name === exercise.name)) {
        setSaved(true);
        setCurrentExercise(exercises.find((ex) => ex.name === exercise.name));
      }
    };
    fetchUserInfo();
  }, [exercises, exercise.name, user.token, saved]);

  const unFavorite = async (id) => {
    const response = await axios.delete(
      `https://ajaxfitness.herokuapp.com/api/exercises/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log(response);
    setExercises(exercises.filter((ex) => ex._id !== id));
  };

  const handleSaveExercise = async () => {
    setLoading(true);
    const response = await axios.post(
      "https://ajaxfitness.herokuapp.com/api/exercises",
      exercise,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );
    setLoading(false);
  };
  const isExerciseSaved = exercises.some((ex) => ex.name === exercise.name);
  return (
    <div>
      <div className="relative my-4 cursor-pointer border-l-4 pl-1 border-l-transparent hover:border-l-brand">
        <h1 onClick={() => setOpen(!open)} className="text-xl">
          {exercise.name}
        </h1>
        <HiOutlineChevronUp
          className={` transition-all duration-300 ease-in-out absolute right-0 top-[50%] translate-y-[-50%] ${
            open ? "rotate-180" : "rotate-0"
          } 
            `}
        />
      </div>
      <div
        className={` ${
          open ? "h-auto p-2 border border-black" : "h-0 p-0"
        } overflow-hidden   `}
      >
        <h2>
          <span className="font-bold">Muscle Group</span> :{" "}
          {exercise.muscle.toUpperCase()}
        </h2>

        {loading && <PulseLoader color={"#70e000"} size={15} />}
        {!loading && (
          <button className="flex gap-3">
            {isExerciseSaved ? (
              <AiFillHeart
                className="text-3xl text-brand"
                onClick={() => {
                  unFavorite(currentExercise._id);
                }}
              />
            ) : (
              <AiOutlineHeart
                className="text-3xl text-brand"
                onClick={handleSaveExercise}
              />
            )}{" "}
            {isExerciseSaved ? "Unfavorite" : "Favorite"}
          </button>
        )}

        <p className=" leading-loose ">
          <span className="font-bold">Instructions</span> :{" "}
          {exercise.instructions}
        </p>
      </div>
    </div>
  );
};

export default ExerciseCard;
