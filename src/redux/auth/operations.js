import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = "";
  };
// POST
// @ "/users/signup" 
// Create a new user

export const register = createAsyncThunk("auth/register", 
    async (newUser, thunkApi) =>{
    try {
        const responce = await axios.post("/users/signup", newUser);
        setAuthHeader(responce.data.token);
        return responce.data;
    } catch(error) {
        return thunkApi.rejectWithValue(error.massage);
}
});

// POST
// /users/login
// Login user

export const logIn = createAsyncThunk("auth/login",
    async (userInfo, thunkAPI) => {
      try {
        const responce = await axios.post("/users/login", userInfo);
        setAuthHeader(responce.data.token);
        return responce.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

//   POST
// /users/logout
// Log out user

  export const logOut = createAsyncThunk("auth/logout", 
    async (_, thunkAPI) => {
    try {
        const responce = await axios.post("/users/logout");
      clearAuthHeader();
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  
//   GET
//   /users/current
//   Get information about the current user

  export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      setAuthHeader(reduxState.auth.token);
  
      const res = await axios.get("/users/current");
      return res.data;
    },
    {
      condition(_, thunkAPI) {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
      },
    }
  );