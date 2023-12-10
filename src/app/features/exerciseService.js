import axios from "axios";

const API_URL = "https://ajaxfitness.herokuapp.com/api/exercises/";

const getAll = async () => {
  const response = await axios.get(API_URL);
  window.localStorage.setItem("exercises", JSON.stringify(response.data));
  return response.data;
};

const addExercise = async (exerciseData) => {
  const response = await axios.post(API_URL, exerciseData);
  window.localStorage.setItem("exercises", JSON.stringify(response.data));
  return response.data;
};

const exerciseService = {
  getAll,
  addExercise,
};

export default exerciseService;
