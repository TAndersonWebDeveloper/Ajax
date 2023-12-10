import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exerciseService from "./exerciseService";
const initialState = {
  exercises: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getAll = createAsyncThunk("exercise/getAll", async (thunkAPI) => {
  try {
    return await exerciseService.getAll();
  } catch (error) {
    const message = error.response.data || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const addExercise = createAsyncThunk(
  "exercise/addExercise",
  async (exerciseData, thunkAPI) => {
    try {
      return await exerciseService.addExercise(exerciseData);
    } catch (error) {
      const message = error.response.data || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getAll.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      isSuccess: true,
      exercises: action.payload,
    }));
    builder.addCase(getAll.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      message: action.payload,
    }));
    builder.addCase(addExercise.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(addExercise.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      isSuccess: true,
      exercises: [...state.exercises, action.payload],
    }));
    builder.addCase(addExercise.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      isError: true,
      message: action.payload,
    }));
  },
});

export default exerciseSlice.reducer;
