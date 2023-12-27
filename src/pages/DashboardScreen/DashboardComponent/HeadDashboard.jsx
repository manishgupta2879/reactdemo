import React from "react";

const headdashboard = () => {
  return (
    <>
 
 <section className="md:mt-4 md:p-1 xs:p-[25px] xs:h-auto h-[850px]">
   <div className="mt-20">
     <h1 className=" text-4xl font-black leading-9 m-auto max-w-[500px] opacity-80 text-center">
       The simplest way to host &amp; share your web project
     </h1>
   </div>
   <div className=" mx-auto flex justify-center mt-[3rem]">
     <div className="hidden xl:block w-[300px]  mt-[100px] ml-auto pr-5 flex-grow-0">
       <div className="rotate-[-4deg]">
         <p className="text-[17px] font-Indie max-w-[250px] opacity-70 tracking-[2px] ml-auto">
           "Perfect for sharing quick updates with clients. It's just a simple,
           hassle-free way to host prototypes."
         </p>
         <p className="mt-3 text-sm trackingh-[2px] text-end ml-auto font-Indie opacity-70 ">
           - Phil Delvecchio,
         </p>
         <p className="mt-3 text-sm trackingh-[2px] text-end ml-auto font-Indie opacity-70 ">
           Hapday Group
         </p>
       </div>
     </div>
     <div className="max-w-[640px] xl:mx-[80px] mx-auto flex-grow-[10] flex-1">
       <div
         style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
         className="bg-white  p-5 rounded-[20px]"
       >
         <div className="">
           <form className="max-w-[600px] mx-auto">
             <div className="relative flex items-stretch mt-[3px] max-w-[460px] m-auto">
               <input
                 className=" block w-full py-[.375rem] px-[.75rem]
                         text-[16px] font-normal leading-[1.5] text-[ #212529] font-semibold bg-[#fff] border border-[#ced4da] rounded-l-[6px] focus:ring-1  focus:outline-none focus:ring-blue-300  "
                 type="text"
                 placeholder="link-name"
               />
               <button
                 id="dropdownDefaultButton"
                 data-dropdown-toggle="dropdown"
                 className="text-[#0d6efd] font-semibold border border-[#0d6efd] hover:text-[#fff] hover:bg-[#0d6efd] focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-r-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                 type="button"
               >
                 .tiiny.site{" "}
                 <svg
                   className="w-2.5 h-2.5 ms-3"
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 10 6"
                 >
                   <path
                     stroke="currentColor"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="m1 1 4 4 4-4"
                   />
                 </svg>
               </button>
               {/* Dropdown menu */}
               <div
                 id="dropdown"
                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
               >
                 <ul
                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
                   aria-labelledby="tinny site"
                 >
                   <li>
                     <a
                       href="#"
                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                       Dashboard
                     </a>
                   </li>
                   <li>
                     <a
                       href="#"
                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                     >
                       Settings
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="max-w-[600px] text-[14px] mt-[15px] text-center">
               <ul className="flex justify-center flex-wrap mb-1 text-sm text-center text-gray-500 border-b  dark:text-gray-400">
                 <li className="me-2">
                   <a
                     href="#"
                     className="inline-block p-4  text-[14px]  hover:border"
                   >
                     HTML
                   </a>
                 </li>
                 <li className="me-2">
                   <a
                     href="#"
                     aria-current="page"
                     className="inline-block p-4 text-[14px] text-blue-600  border-b-2 border-[#0d6efd] rounded-t-lg active"
                   >
                     ZIP
                   </a>
                 </li>
                 <li className="me-2">
                   <a
                     href="#"
                     className="inline-block p-4  text-[14px] hover:border"
                   >
                     PDF
                   </a>
                 </li>
                 <li className="me-2">
                   <a
                     href="#"
                     className="inline-block p-4  text-[14px] hover:border"
                   >
                     Templates
                   </a>
                 </li>
               </ul>
               <div className="text-[14px] mt-[15px] text-center">
                 <div className="flex flex-col items-center p-[65px] border-[3px] rounded-lg border-[#DC9BFF] border-dashed bg-[#FAFAFA] text-[#BDBDBD] outline-none cursor-pointer transition duration-[.24s] ease-in-out delay-0">
                   <div className="flex">
                     <img
                       className="p-2 w-[50px] object-contain opacity-[.2] hover:opacity-100"
                       src="./img/folder.png"
                       alt=""
                     />
                     <div className="ms-2 me-2 h-10 border-l border-[#CBCBCB]" />
                     <img
                       className="h-10 object-contain opacity-[.2] hover:opacity-100 p-[5px] w-[50px]"
                       src="./img/html.png "
                       alt=""
                     />
                   </div>
                   <div className="mt-2">
                     <span className="text-[#BDBDBD] text-[14px] cursor-pointer text-center">
                       Drag &amp; drop zip or <br /> single file here
                     </span>
                     <button className="block mt-3 ps-4 pe-4 py-[6px] px-[1.6rem] w-[200px] border-2 border-[#ab65d0] bg-[#ab65d0] text-[#fff] rounded-[5px] hover:bg-transparent hover:text-[#bc67ec]">
                       Upload file
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </form>
         </div>
       </div>
       <div className=" max-w-[600px] text-[#dfdfdf] text-[12px] mt-2 text-center">
         This site is protected by reCAPTCHA and the Google
         <a
           className="text-[#dfdfdf] text-[12px] underline"
           href="https://policies.google.com/privacy"
         >
           Privacy Policy
         </a>
         and
         <a href="https://policies.google.com/terms">Terms of Service</a>apply.
       </div>
     </div>
     <div className="hidden xl:block text-[ #914ab5] flex-grow-0 text-2xl mt-[100px] mr-auto text-left w-[300px] md-block">
       <div className="mb-3 ml-[100px] text-[24px] text-[#914ab5] font-Indie text-left">
         Try for free
       </div>
       <img className="h-[90px]" src="./img/errow.png" alt="" />
     </div>
   </div>
   {/* START-UPS & CORPORATES */}
   <div className="max-w-[1528px] mx-auto mt-[3rem] text-center">
     <h3 className="text-[12px] font-normal tracking-[2px] opacity-[.4] mb-2">
       USED BY INDIVIDUALS, START-UPS &amp; CORPORATES
     </h3>
     <div className="mt-[15px] opacity-75 flex flex-wrap justify-center items-center text-center">
       <img className="me-3 h-10 md:me-5" src="./img/logo1.png" alt="" />
       <img
         className="me-3 h-[25px] opacity-70 md:me-5"
         src="./img/logo2.png"
         alt=""
       />
       <img
         className="me-3 h-[20px] opacity-70 md:me-5"
         src="./img/logo3.png"
         alt=""
       />
       <img
         className="me-3 h-[25px] opacity-60 md:me-5"
         src="./img/logo4.png"
         alt=""
       />
       <img className=" h-10 opacity-70" src="./img/logo5.png" alt="" />
     </div>
   </div>
 </section>
 
    </>
   )
};

export default headdashboard;
