import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, verifyOtp } from "../store/features/User/userReducer";
import { useNavigate } from "react-router-dom";

function Otp() {
  // Initialize refs directly in the component using useRef
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userOtpData = useSelector(userData);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null),  useRef(null), useRef(null)];
  const [errorOtp , setErrorOtp] = useState(false)

  const handleInputChange = (index, value) => {
    console.log(index, value)
    inputRefs[index].current.value = value
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }else if(value == "" && index > 0){
      inputRefs[index - 1].current.focus();
      
    }

  };

  const submitOtp = () =>{
    try {
        const arr = inputRefs.map((ref)=>ref.current.value)
        console.log("inputRefs",arr.join(''), arr.join('').length)
        if(arr.join('').length < 6){
            setErrorOtp(true)
        }else{
          setErrorOtp(false)
        }
        const data = {
          email: userOtpData?.tempdata?.email,
          otp: arr.join('')
        }
        dispatch(verifyOtp(data))
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    if(userOtpData.tempdata == null && userOtpData.data ==  null) {
      navigate('/login')
    }
    if(userOtpData.tempdata == null && userOtpData.data) {
      navigate('/home')
    }
    inputRefs[0].current.focus();
  }, [userOtpData])

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center items-center w-1/2 gap-[15px] bg-white m-auto p-5 rounded-[20px] border border-[#f1f1f1f1] text-center"
        style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
      >
        <h5 className="text-[20px] font-medium leading-[1.2] mb-2 text-center">
          <b className="text-[26px] tracking-wide">Verify Account</b>
        </h5>
        <div className="text-[18px] text-[#56595c]">
          Email with OTP has been sent to {userOtpData?.tempdata?.email}
        </div>
        <div className="text-[17px] text-[#56595c]">Enter your OTP here</div>
        <div className="flex justify-center gap-3 my-[15px]">
          {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            className={`w-[38px] h-[38px] border-2 border-black ${
              errorOtp && ref.current.value === "" ? 'border border-red-500' : ''
            }`}
            type="text"
            maxLength={1}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
        </div>
        <div className="w-full">
          {/* <p className="text-center text-[#56595c]">
            Wait for 5 seconds to request new OTP
          </p> */}
          <button onClick={()=>{submitOtp()}} className="w-full bg-[#5c82a8] hover:bg-[#527496] text-white mt-2 cursor-pointer px-3 py-[6px] text-[16px] font-normal border rounded-[6px]">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
