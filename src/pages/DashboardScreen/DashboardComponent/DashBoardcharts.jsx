import React from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function DashBoardcharts() {
 
  return (
   <>
   <>
  {/* sales & marketing */}
  <section className="max-w-[1075px] mx-auto grid xs:grid-cols-[1fr] gap-20 w-full my-[50px] p-[25px] text-center grid-cols-[1fr,2fr] tab:my-[30px] tab:w-[90%] xl:w-[70%] xl:my-[50px]">
    <div className="flex flex-col justify-between gap-9  w-full tab:p-0">
      <div
        className=" text-[64px] font-black max-w-[400px] leading-[64px] relative text-left"
        style={{
          WebkitTextFillColor: "transparent",
          background: "linear-gradient(97deg,#ae5dd7,#0d6efd)",
          backgroundClip: "text"
        }}
      >
        Yes, tiiny is for you
      </div>
      <div className="">
        <Link
          href="#"
          className="text-decoration-none flex justify-between items-center w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon1.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Sales &amp; Marketing
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          href="#"
          className="flex justify-between text-decoration-none items-center w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon2.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Designers &amp; Artists
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          href="#"
          className="flex justify-between text-decoration-none items-center w-full cursor-pointer rounded-2xl p-[10px] bg-[#f2f5fb] border border-[#f3f4f6] shadow-[10px 10px 5px 0px rgba(0,0,0,0.75)]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon3.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Developers
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          href="#"
          className="flex justify-between text-decoration-none items-center w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon4.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Real Estate
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          href="#"
          className="flex justify-between text-decoration-none items-center w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon5.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Recruitment
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          href="#"
          className="flex justify-between text-decoration-none items-center w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon6.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Hospitality
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          href="#"
          className="flex justify-between text-decoration-none items-center w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon7.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              E-Learning Publishing
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          
          className="flex justify-between items-center text-decoration-none w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon8.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Crypto
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
        <Link
          
          className="flex justify-between items-center text-decoration-none w-full cursor-pointer rounded-2xl p-[10px]"
        >
          <div className="flex justify-between items-center gap-2 py-2 px-4">
            <div className="w-5 h-5 mb-[6.4px]">
              <img
                className="w-full h-full opacity-30"
                src="./img/icon/icon9.png"
                alt=""
              />
            </div>
            <span className="text-[#9ca3af] text-[16px] font-medium">
              Students
            </span>
          </div>
          <span className="text-[#e5e7eb] text-[18px]">→</span>
        </Link>
      </div>
    </div>
    <div
      className="xs:hidden w-full h-full bg-[#fff] rounded-[20px] overflow-hidden text-left flex justify-between"
      style={{ boxShadow: "0 2px 50px rgba(0,0,0,.3)" }}
    >
      <div className="flex flex-col justify-between items-start p-12 w-[60%]">
        <div className="flex-grow-1">
          <h3 className="text-[#111827] text-[30px] font-semibold leading-[38px]">
            Publish your work &amp; easily see how your clients really feel
            about your designs.{" "}
          </h3>
          <a
            className="flex justify-center items-center bg-black text-white border-0 rounded-[100px] cursor-pointer mt-10 py-3 px-5 max-w-[200px] "
            href="#"
          >
            See examples here →
          </a>
        </div>
        <div className="flex flex-col gap-2 items-end ml-auto text-right">
          <h3 className="text-[#111827] text-[20px] font-extralight">
            "I can upload &amp; share content without a tech team."
          </h3>
          <span className="text-[#374151] text-[16px] font-medium text-right">
            Phil, Hapday group
          </span>
        </div>
      </div>
      <div className="w-[40%] h-full">
        <img
          className="w-full h-full object-cover"
          src="./img/teach-team.png"
          alt=""
        />
      </div>
    </div>
  </section>
</>

   </>
  );
}

export default DashBoardcharts;
