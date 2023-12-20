// src/features/counterSlice.js
import { Baseurl } from '../../../Utils/Constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const INITIAL_STATE = {
    loading: false,
    isError: false,
    data: null,
    error: ""
}

export const signIn = createAsyncThunk(
  "user/signIn",
  async (arg, thunkAPI) => {
    debugger
     try {

      thunkAPI.dispatch(userFetch());
      const response = await axios.post(Baseurl+'users/adminLogin', arg);
      if(response.data.status === 200){
        thunkAPI.dispatch(userSuccess(response.data.data));
        toast.success(response.data.message)
      }else{
        thunkAPI.dispatch(userFail("Something went wrong"));
        toast.error(response.data.message)
      }
     } catch (error) {
      console.log("error", error)
      thunkAPI.dispatch(userFail("Something went wrong"));
      toast.error("login failed")
     }
  }
)

// Sign out
export const logOutAsync = createAsyncThunk(
  'user/logOut',
  async (arg, thunkAPI) => {
      try {
          thunkAPI.dispatch(userFetch());
          thunkAPI.dispatch(userlogout());
          
      } catch (error) {
        toast.success("User logut")
      }
  }
)

const userSLice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    userFetch: (state) => {
      state.loading = true
    },

    userSuccess: (state, action) => {
      state.loading = false
      state.data = action.payload
      state.isError = false
      state.error = ""
    },

    userFail: (state, action) => {
        state.loading = false
        state.error = action.payload
        state.data = null
        state.isError = true
      },

      userlogout: (state, action) => {
        state.loading = false
        state.error = ""
        state.data = null
        state.isError = false
      },
  },
});

export const userReducer = userSLice.reducer;
export const { userFetch , userSuccess , userFail, userlogout } = userSLice.actions;
export const userData = (state) => state.user;
