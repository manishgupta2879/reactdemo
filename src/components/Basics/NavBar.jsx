import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, userlogout } from "../../store/features/User/userReducer";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userlogout());
    navigate("/");
  };

  const userFetchData = useSelector(userData);
  //------------------------------Navbar------------------------------------------------------------
  // useEffect(() => {
  //   if (userFetchData.data === null) {
  //     navigate("/login");
  //   }
  // }, [userFetchData, navigate]);
  return (
      <>
        <div className="bg-[#fafafa] border-b border-[#eaeaea] p-2 text-[14px] font-bold text-center">
          ☆ Hosted 100,000+ links
        </div>
        {/* nav */}
        <nav className="fixed 'relative' w-full z-[999] start-0 bg-[hsla(0,0%,100%,.9)]  navbar">
          <div className="max-w-[1100px] flex flex-wrap items-center justify-between mx-auto py-[15px] px-[15px] md:flex md:items-center">
            <div className="w-full flex justify-between items-center md:w-auto">
              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    className="w-6 h-6 p-y"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <a href="/" className="ms-auto">
                <img className="w-[119px] mr-2" src="/img/logo.png" alt={"logo"} />
              </a>

              <div className="">
                <div
                  id="toggle-menu-button"
                  className="items-center justify-between hidden w-full md:relative md:block md:'flex' md:w-auto md:order-1"
                >
                  <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-90 opacity-0 top-[400px] transition-all ease-in duration-500">
                    <li className="my-6 md:my-0">
                      <a
                        className="text-[14px] text-[#0d0d0d] font-semibold p-2 hover:border-b-2 border-[#ab65d0]"
                        href="/"
                      >
                        Help
                      </a>
                    </li>
                    <li className="my-6 md:my-0">
                      <a
                        className=" text-[#0d0d0d] font-semibold p-2 hover:border-b-2 border-[#ab65d0]"
                        href="/"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                className="text-[#0d0d0d] font-semibold p-2 hover:border-b-2 border-[#ab65d0] opacity-90"
                href="/login"
              >
                Log in
              </a>
              <a href="/">
                <button className=" ml-4 border-2 border-[#bc67ec] rounded-[5px] text-[#bc67ec] text-[14px] py-[6px] px-[14px] hover:text-[#0d6efd] hover:border-[#0d6efd]">
                  Sign up free
                </button>
              </a>
            </div>
          </div>
          <div className="mobile-menu  md:hidden flex flex-col justify-center items-center text-center mt-[-25px] mb-4">
            <ul className=" top-[400px] transition-all ease-in duration-500">
              <li className="my-2 md:my-0">
                <a
                  className="text-[14px] text-[#0d0d0d] font-semibold py-2 hover:border-b-2 border-[#ab65d0] opacity-70"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="my-2 md:my-0">
                <a
                  className="text-[14px] text-[#0d0d0d] font-semibold py-2 hover:border-b-2 border-[#ab65d0] opacity-70"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
            <div className="md:hidden flex flex-col justify-center items-center">
              <a
                className="text-[#0d0d0d] font-semibold py-2 hover:border-b-2 border-[#ab65d0] opacity-70"
                href="#"
              >
                Log in
              </a>
              <a href="#">
                <button className=" my-2 border-2 border-[#bc67ec] rounded-[5px] text-[#bc67ec] text-[14px] py-[6px] px-[14px] hover:text-[#0d6efd] hover:border-[#0d6efd]">
                  Sign up free
                </button>
              </a>
            </div>
          </div>
        </nav>


        
      </>
  );
};

export default Navbar;
