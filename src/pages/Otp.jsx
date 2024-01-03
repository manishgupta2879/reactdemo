import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtp,
  userData,
  userlogout,
  verifyOtp,
} from "../store/features/User/userReducer";
import WithUser from "../hoc/withUser";

function Otp() {
  const dispatch = useDispatch();
  const userOtpData = useSelector(userData);
  const [inputOtp, setInputOtp] = useState(Array(6).fill(""));
  const [errorOtp, setErrorOtp] = useState(false);
  const [isRequestDisabled, setIsRequestDisabled] = useState(false);
  const [isVerifyDisabled, setIsVerifyDisabled] = useState(true);

  const handleInputChange = (index, value) => {
    const updatedOtp = [...inputOtp];
    updatedOtp[index] = value;
    setInputOtp(updatedOtp);

    if (value && index < inputOtp.length - 1) {
      document.getElementById(`${index + 1}otp`).focus();
    } else if (value === "" && index > 0) {
      document.getElementById(`${index - 1}otp`).focus();
    }

    const isOtpComplete = updatedOtp.every((digit) => digit !== "");
    setErrorOtp(!isOtpComplete);
    setIsVerifyDisabled(!isOtpComplete);
  };


  const submitOtp = () => {
    try {
      const otp = inputOtp.join("");
      if (otp.length === 6) {
        const data = {
          email: userOtpData?.tempdata?.email,
          otp: otp,
        };
        dispatch(verifyOtp(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resendOtp = () => {
    try {
      setIsRequestDisabled(true);
      dispatch(sendOtp({ email: userOtpData?.tempdata?.email }));
      setTimeout(() => {
        setIsRequestDisabled(false);
      }, 5000); // Enable the link after 5 seconds
    } catch (error) {
      console.error(error);
    }
  };

  const gotoHome = () => {
    dispatch(userlogout());
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVerifyDisabled(false);
    }, 5000); // Enable the "Verify" button after 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

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
          {inputOtp &&
            inputOtp?.map((value, index) => (
              <input
                key={index}
                id={`${index}otp`}
                className={`w-[38px] h-[38px] border-2 border-black ${
                  errorOtp && value === "" ? "border border-red-500" : ""
                }`}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ))}
        </div>
        <p
          className={`text-center text-[#56595c] ${
            isRequestDisabled ? "cursor-not-allowed" : "hover:cursor-pointer"
          } hover:text-black`}
          onClick={() => !isRequestDisabled && resendOtp()}
        >
          Click here to request new OTP
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 p-5">
            <button
              onClick={() => submitOtp()}
              disabled={isVerifyDisabled}
              className={`w-full m-1 bg-gradient-to-r from-sky-400 to-indigo-600 -0.9%, rgb(52, 118, 246) 88.7%)] hover:bg-[#527496] text-white mt-2  px-3 py-[6px] text-[16px] font-normal border rounded-[6px] ${
                isVerifyDisabled ? "opacity-50 hover:cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Verify
            </button>
          </div>

          <div className="w-1/2 p-5">
            <button
              onClick={() => gotoHome()}
              className="w-full m-1 bg-[#527496] -0.9%, rgb(52, 118, 246) 88.7%)] hover:bg-[#527496] text-white mt-2 cursor-pointer px-3 py-[6px] text-[16px] font-normal border rounded-[6px]"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProtectedComponentWrapper = WithUser(Otp);
export default ProtectedComponentWrapper;
