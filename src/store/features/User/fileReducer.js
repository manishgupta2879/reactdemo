// src/features/counterSlice.js
import { Baseurl } from '../../../Utils/Constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const INITIAL_STATE = {
    loading: false,
    isError: false,
    data: null,
    fileList: [],
    link: null,
    error: "",
}



export const verifyLink = createAsyncThunk(
  "file/linkVerify",
  async (arg, thunkAPI) => {
     try {

        const { user } = thunkAPI.getState();
        const { token } = user
      
        const config = {
            method: 'post',
            headers: { 
              'Accept': 'application/json', 
              'Authorization': `Bearer ${token}`, 
            },
          };
          
      thunkAPI.dispatch(fileLoading());
      const response = await axios.post(Baseurl+'/api/hosting/check', arg, config);
      if(response.data.status === 'success'){
        thunkAPI.dispatch(setFileLink(arg.link));
        toast.success(response.data.message)
      }else{
        thunkAPI.dispatch(fileError("Something went wrong"));
        toast.error(response.data.message)
      }
     } catch (error) {
      console.log("error", error)
      thunkAPI.dispatch(fileError("Something went wrong"));
      toast.error("verification failed")
     }
  }
)

export const getFiles = createAsyncThunk(
    "file/linkVerify",
    async (arg, thunkAPI) => {
       try {
  
          const { user } = thunkAPI.getState();
          const { token } = user

  
          const config = {
              method: 'get',
              headers: { 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${token}`, 
              },
            };
            
        thunkAPI.dispatch(fileLoading());
        const response = await axios.get(Baseurl+'/api/hosting/list', config);
        if(response.data.status === 'success'){
          thunkAPI.dispatch(setFileList(response?.data.data.activeHostings || []));
        }else{
          thunkAPI.dispatch(fileError("Something went wrong"));
          toast.error(response.data.message)
        }
       } catch (error) {
        console.log("error", error)
        thunkAPI.dispatch(fileError("Something went wrong"));
        toast.error("verification failed")
       }
    }
)

export const uploadsFiles = createAsyncThunk(
    "file/fileUpload",
    async (arg, thunkAPI) => {
       try {
  
          const { user } = thunkAPI.getState();
          const { token } = user


            let data = new FormData();
            data.append('link', arg.link);
            data.append('files[]', arg.file);

  
          const config = {
              method: 'post',
              headers: { 
                'Accept': 'application/json', 
                'Authorization': `Bearer ${token}`, 
              },
            };
            
        thunkAPI.dispatch(fileLoading());
        const response = await axios.post(Baseurl+'/api/hosting/create', data, config);
        if(response.data.status === 'success'){
          thunkAPI.dispatch(getFiles());
          toast.success(response.data.message)
        }else{
          thunkAPI.dispatch(fileError("Something went wrong"));
          toast.error(response.data.message)
        }
       } catch (error) {
        console.log("error", error)
        thunkAPI.dispatch(fileError("Something went wrong"));
        toast.error(error?.response?.data?.message)
       }
    }
)
  




const fileSlice = createSlice({
  name: 'file',
  initialState: INITIAL_STATE,
  reducers: {
    fileLoading: (state) => {
      state.loading = true
    },

    setFileLink: (state, action) =>{
        state.link = action.payload
    },
    setFileList: (state, action) =>{
        state.fileList = action.payload
    },

    setFile: (state, action) =>{
        state.data = action.payload
    },

    fileError: (state, action) =>{
        state.data = action.payload
        state.link = null
    },
  },
});

export const fileReducer = fileSlice.reducer;
export const { fileLoading , setFile, setFileLink , setFileList, fileError} = fileSlice.actions;
export const fileData = (state) => state.file;
