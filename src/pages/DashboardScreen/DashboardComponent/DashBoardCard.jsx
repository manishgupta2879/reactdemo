import React from "react";

function DashBoardCard() {
  return (
    <>
  {/* how it works */}
  <section className="relative flex flex-col items-center text-center w-[80%] min-h-[690px] mt-[50px] lg:mt-[72px] mx-auto">
    <div className="flex flex-col justify-center gap-6">
      <div className="text-[48px] leading-[48px] lg:text-[64px] font-black">
        <div className="text-[#818181] text-[20px] font-medium">
          It's really simple...
        </div>
        How it works
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[linear-gradient(92deg,#ae5dd7,#0d6efd)] text-[#fff] border-0 rounded-3xl text-[16px] font-normal gap-1 leading-6 py-3 px-6">
          Try it out for free
          <span className="text-[#fff] ml-[5px]">→</span>
        </button>
      </div>
    </div>
    {/* boom */}
    <div className="relative flex justify-between gap-16 mt-[60px]">
      <div className="absolute left-6 w-[2px] h-full bg-[#0d6efd]" />
      <div className="w-full flex flex-col gap-[30px] justify-between items-start mb-[56px] mt-[96px] z-[2] flex-1">
        <div className="flex gap-5 w-full">
          <div
            className="flex justify-center items-center bg-[#0d6efd] rounded-full min-w-12 h-12"
            style={{ boxShadow: "0 0 32px rgba(13,110,253,.32)" }}
          >
            <span className="text-[#fff] text-2xl font-semibold">1</span>
          </div>
          <div className="flex flex-col items-start gap-[5px] text-left w-full">
            <div className="text-[#1f2937] text-2xl font-semibold leading-8">
              Upload
            </div>
            <div className="text-[#1f2937] text-[16px] font-normal leading-[22px]">
              Drag &amp; drop an HTML, ZIP or PDF into the upload box
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div
            className="flex justify-center items-center bg-[#0d6efd] rounded-full min-w-12 h-12"
            style={{ boxShadow: "0 0 32px rgba(13,110,253,.32)" }}
          >
            <span className="text-[#fff] text-2xl font-semibold">2</span>
          </div>
          <div className="flex flex-col items-start gap-[5px] text-left w-full">
            <div className="text-[#1f2937] text-2xl font-semibold leading-8">
              Customise
            </div>
            <div className="text-[#1f2937] text-[16px] font-normal leading-[22px]">
              Type in a link-name or leave it blank
            </div>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div
            className="flex justify-center items-center bg-[#0d6efd] rounded-full min-w-12 h-12"
            style={{ boxShadow: "0 0 32px rgba(13,110,253,.32)" }}
          >
            <span className="text-[#fff] text-2xl font-semibold">3</span>
          </div>
          <div className="flex flex-col items-start gap-[5px] text-left w-full">
            <div className="text-[#1f2937] text-2xl font-semibold leading-8">
              Publish
            </div>
            <div className="text-[#1f2937] text-[16px] font-normal leading-[22px]">
              Hit the Upload button to get a shareable link
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-1 border-0 rounded-3xl pt-10 w-full h-full">
        <img
          className=" h-[400px] rounded-[20px]"
          style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
          src="./img/demo.gif"
          alt=""
        />
      </div>
    </div>
  </section>
</>

  );
}

export default DashBoardCard;
