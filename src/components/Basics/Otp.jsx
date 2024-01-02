import React, { useRef } from "react";

function Otp() {
  // Initialize refs directly in the component using useRef
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (index, value) => {
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      <div
        className="flex flex-col justify-center items-center w-1/2 gap-[15px] bg-red m-auto p-5 rounded-[20px] border border-[#f1f1f1f1] text-center"
        style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
      >
        <h5 className="text-[20px] font-medium leading-[1.2] mb-2 text-center">
          <b className="text-[26px] tracking-wide">Verify Account</b>
        </h5>
        <div className="text-[18px] text-[#56595c]">
          Email with OTP has been sent to goyelyash501@gmail.com
        </div>
        <div className="text-[17px] text-[#56595c]">Enter your OTP here</div>
        <div className="flex justify-center gap-3 my-[15px]">
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              ref={ref}
              className="w-[38px] h-[38px] border-2 border-black"
              type="text"
              maxLength={1}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="w-full">
          <p className="text-center text-[#56595c]">
            Wait for 5 seconds to request new OTP
          </p>
          <button className="w-full bg-[#5c82a8] hover:bg-[#527496] text-white mt-2 cursor-pointer px-3 py-[6px] text-[16px] font-normal border rounded-[6px]">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Otp;
