import React, { useEffect } from "react";
import axios from "axios";
import ExerciseCard from "../components/Exercises/ExerciseCard";
import { HiOutlineChevronUp } from "react-icons/hi";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";
const Exercises = () => {
  const [exercises, setExercises] = React.useState([]);
  const [muscleGroup, setMuscleGroup] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [headerOpened, setHeaderOpened] = React.useState(false);
  const [priceOpen, setPriceOpen] = React.useState(false);
  const [useOpen, setUseOpen] = React.useState(false);
  const [exercisesOpen, setExercisesOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      const headers = {
        "X-Api-Key": "rgkowmIvtyNZKiuZI24Wfg==mdPm8u23qRsv6DuJ",
        "Content-Type": "application/json",
      };
      const res = await axios.get(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`,
        {
          headers,
        }
      );
      setExercises(res.data);
      setLoading(false);
    };
    if (buttonClicked) {
      fetchExercises();
    }
  }, [muscleGroup]);

  const handleMuscleGroup = async (e) => {
    setMuscleGroup(e.target.value);
    setButtonClicked(true);
  };
  return (
    <div className="w-full">
      <div className=" h-screen exercises-wrapper flex items-center">
        <div className=" h-screen  flex items-center">
          <div className="ml-8 relative sm:ml-14 xl:ml-40 xl:mt-20 ">
            <div className="h-8 w-8 border-t-white border-r-white border-b-0 border-l-0 border-r-2 border-t-2 absolute right-[-10px] top-[0]"></div>
            <h1 className="text-white text-4xl md:text-5xl">
              Find your <span className="text-brand">passion</span>.
            </h1>
            <div className="h-8 w-8 border-l-brand border-b-brand border-r-0 border-t-0 border-l-2 border-b-2 absolute left-[-10px] bottom-[-10px]"></div>
          </div>
        </div>
      </div>
      <div className="w-[80%] my-8 mx-auto relative lg:w-[70%]">
        <div
          className="relative cursor-pointer "
          onClick={() => setHeaderOpened(!headerOpened)}
        >
          <h2 className="font-bold text-xl border-b-brand border-b-2 pb-1 mb-1">
            What is FitFolio?
          </h2>
          <HiOutlineChevronUp
            className={` transition-all duration-300 ease-in-out absolute right-0 top-[50%] translate-y-[-50%] ${
              headerOpened ? "rotate-180" : "rotate-0"
            } 
            `}
          />
        </div>
        <div
          className={` mb-4  transition duration-1000 ease-in-out  ${
            headerOpened ? " h-[auto] pb-1 mb-1" : "h-0"
          } overflow-hidden  `}
        >
          <p className="my-2">
            <span className="font-bold">FitFolio</span> is an exercise app
            designed for people who are interested in finding and saving
            different types of workouts. With FitFolio, you can easily search
            for exercises that target specific muscle groups, have a particular
            level of difficulty, or require certain equipment.
          </p>
          <p className="pb-2">
            Whether you're a beginner or a seasoned athlete, FitFolio offers a
            variety of exercises that can help you achieve your fitness goals.
            With its easy-to-use interface and customizable features, this app
            is perfect for anyone looking to improve their fitness level and
            keep track of their progress.
          </p>
        </div>
        <div
          className="relative  cursor-pointer"
          onClick={() => setPriceOpen(!priceOpen)}
        >
          <h2 className="font-bold text-xl border-b-brand border-b-2 pb-1 mb-1">
            How much does it cost?
          </h2>
          <HiOutlineChevronUp
            className={` transition-all duration-300 ease-in-out absolute right-0 top-[50%] translate-y-[-50%] ${
              priceOpen ? "rotate-180" : "rotate-0"
            } 
            `}
          />
        </div>
        <div
          className={` mb-4   transition duration-1000 ease-in-out  ${
            priceOpen ? " h-[auto]  pb-1 mb-1" : "h-0"
          } overflow-hidden  `}
        >
          <p className="my-2 pb-2">
            <span className="font-bold">FitFolio</span> is 100% free to use. You
            can create an account, search for exercises, and save your favorite
            workouts without paying a dime.
          </p>
        </div>
        <div
          className="relative  cursor-pointer"
          onClick={() => setUseOpen(!useOpen)}
        >
          <h2 className="font-bold text-xl border-b-brand border-b-2 pb-1 mb-1">
            How do I use it?
          </h2>
          <HiOutlineChevronUp
            className={` transition-all duration-300 ease-in-out absolute right-0 top-[50%] translate-y-[-50%] ${
              useOpen ? "rotate-180" : "rotate-0"
            } 
            `}
          />
        </div>
        <div
          className={` mb-4   transition duration-1000 ease-in-out  ${
            useOpen ? " h-[auto]  pb-1 mb-1" : "h-0"
          } overflow-hidden  `}
        >
          <p className="my-2 pb-2">
            <span className="font-bold">FitFolio</span> is very easy to use. To
            get started, simply create an account and log in. Once you're logged
            in, you can search for exercises by muscle group, difficulty, or
            equipment. You can also save your favorite workouts to your profile
            for easy access. Use the buttons below to search for exercises.
          </p>
        </div>
        <div
          className="relative  cursor-pointer"
          onClick={() => setExercisesOpen(!exercisesOpen)}
        >
          <h2 className="font-bold text-xl border-b-brand border-b-2 pb-1 mb-1">
            Exercises
          </h2>
          <HiOutlineChevronUp
            className={` transition-all duration-300 ease-in-out absolute right-0 top-[50%] translate-y-[-50%] ${
              exercisesOpen ? "rotate-180" : "rotate-0"
            } 
            `}
          />
        </div>
        {!user && <p className="my-2 pb-2">Please log in to view exercises.</p>}
        {user && (
          <div
            className={` mt-8 grid grid-cols-2 gap-2 transition duration-1000 ease-in-out  ${
              exercisesOpen ? " h-[auto]  pb-1 mb-1" : "h-0"
            } overflow-hidden lg:grid-cols-4 `}
          >
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"biceps"}
              onClick={handleMuscleGroup}
            >
              Biceps
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"triceps"}
              onClick={handleMuscleGroup}
            >
              Triceps
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"shoulders"}
              onClick={handleMuscleGroup}
            >
              Shoulders
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"chest"}
              onClick={handleMuscleGroup}
            >
              Chest
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"lats"}
              onClick={handleMuscleGroup}
            >
              Lats
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"traps"}
              onClick={handleMuscleGroup}
            >
              Traps
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"quadriceps"}
              onClick={handleMuscleGroup}
            >
              Quads
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"hamstrings"}
              onClick={handleMuscleGroup}
            >
              Hamstrings
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"calves"}
              onClick={handleMuscleGroup}
            >
              Calves
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"glutes"}
              onClick={handleMuscleGroup}
            >
              Glutes
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"abdominals"}
              onClick={handleMuscleGroup}
            >
              Abdominals
            </button>
            <button
              className=" border border-brand rounded-sm py-1 px-2 lg:hover:bg-brand lg:hover:text-white transition-all duration-200"
              value={"lower_back"}
              onClick={handleMuscleGroup}
            >
              Lower Back
            </button>
          </div>
        )}
        <div className="flex justify-center my-8">
          {loading && <PulseLoader color={"#70e000"} loading={loading} />}
        </div>{" "}
        <div>
          {exercises?.map((exercise) => {
            return <ExerciseCard exercise={exercise} key={exercise._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
