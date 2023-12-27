// src/features/counterSlice.js
import { Baseurl } from '../../../Utils/Constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const INITIAL_STATE = {
    loading: false,
    isError: false,
    data: null,
    tempdata: null,
    error: "",
    token: null
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

export const signInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async (arg, thunkAPI) => {

    const provider = new GoogleAuthProvider();
    let currentUser = null
    await signInWithPopup(auth, provider)
      .then((res) => {
        currentUser = {
          name: res.user.displayName,
          email: res.user.email,
          password: res.user.uid,
          profilePic: res.user.photoURL,
        }
      }).catch((err) => {
      }).catch((err) => {
        thunkAPI.dispatch(userFail(err.message));
      })

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(`${Baseurl}/api/auth/send-otp`, {email: currentUser.email})
      if(res.data.status === 'success'){
        toast.success(res.data.message)
        thunkAPI.dispatch(setTempData(currentUser))
      }
    } catch (error) {
      console.log("error google", error)
      toast.error(error.response.data.message)
      thunkAPI.dispatch(userFail(error.response.data.message))
    }
  }
)

export const logOutGoogle = createAsyncThunk(
  'user/logOutGoogle',
  async (arg, thunkAPI) => {
    signOut(auth)
      .then(() => {
        thunkAPI.dispatch(userlogout());
      }).catch((err) => {

      })
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
        state.tempdata = null
        state.isError = true
      },

      userlogout: (state, action) => {
        state.loading = false
        state.error = ""
        state.data = null
        state.tempdata = null
        state.isError = false
      },

      setTempData: (state, action) => {
        state.loading = false
        state.error = ""
        state.tempdata = action.payload
        state.isError = false
      },
      
      setToken: (state, action) => {
        state.loading = false
        state.error = ""
        state.isError = false
        state.token = action.payload.token
        state.data = state.tempdata
      },
  },
});

export const userReducer = userSLice.reducer;
export const { userFetch , userSuccess , userFail, userlogout, setTempData ,setToken} = userSLice.actions;
export const userData = (state) => state.user;
