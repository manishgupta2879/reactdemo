

import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { userData , signIn , logOutAsync , userFetch , userSuccess , userFail , userlogout } from '@/store/features/User/userReducer';
import { Baseurl } from '@/Utils/Constants';
import axios from 'axios';
import { setCookie } from "cookies-next";
import {  useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Loader from '../Basics/Loader';
// import Loader from '../Basics/Loader';

const LoginScreen = () => {
    const router = useRouter()
    const dispatch  = useDispatch()
    const [userForm, setUserForm] = useState({
    
        email: "",
        password: ""
        
      });
      const userLoadData = useSelector(userData)

      const submitHandler = async (e) => {
        e.preventDefault();
        if (userForm.email === "") {
            toast.warning('email is empty')
        }     
        else if (userForm.password === "") {
          toast.warning('password is empty')
        }
         else {
          try {
            dispatch(userFetch())
            const res = await axios.post(Baseurl+ 'users/adminLogin', userForm)
            if(res.data.status == 200){
                dispatch(userSuccess(res.data.data));
                toast.success(res.data.message)
                setCookie("token", userLoadData.token);
                setCookie("user", userLoadData.id);
                router.push('/dashboard')
              }else{
                dispatch(userFail("Something went wrong"));
                toast.error(res.data.message)
              }

          } catch (error) {
            console.log("error", error)
            if (error?.response?.data?.message) {
            //   toast.error(error.response.data.message);
            } else {
            //   toast.error("Something went wrong!");
            }
          }
        }
      };
      useEffect(() => {
        if(userLoadData.data !== null){
          router.push('/dashboard')
        }
      }, [userLoadData])
  return (
    <>
      {userLoadData?.data == null ? 
        <div className="login_wrapper">
          <div className="login_box">
              <div className="header"> Please Login to Continue </div>
              <div className="content_box">
                  <form className='login_form' onSubmit={submitHandler} >
                      <div className="field_box">
                          <label htmlFor="username">Email</label>
                          <input
                              type="text"
                              name="email"
                              id="email"
                              placeholder='Please enter your email'
                              className='form-control'
                              onChange={(e) => { setUserForm({ ...userForm, email: e.target.value.trim() }) }}
                          />
      
                      </div>
                      <div className="field_box">
                          <label htmlFor="password">Password</label>
                          <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder='Please enter your password'
                              className='form-control'
                              onChange={(e) => { setUserForm({ ...userForm, password: e.target.value }) }}
                          />
                      </div>
                      <div className="btn_box">
                          <button className="btn  btn-dark" type='submit'>Submit</button>
                      </div>
                      <div className="forget_links">
                          {/* <Link href='/ResetPassword'> Forgot Password? </Link> */}
                      </div>
                  </form>
              </div>
          </div>
        </div> : <Loader /> 
      }
    </>
  
  
  )
}

export default LoginScreen

