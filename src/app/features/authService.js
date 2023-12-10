import axios from "axios";

const API_URL = "https://ajaxfitness.herokuapp.com/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

export const authService = {
  register,
  login,
  logout,
};

export default authService;
