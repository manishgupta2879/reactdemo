import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData, userlogout } from "../../store/features/User/userReducer";
import { Link, useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Handleuserlogout = () => {
    dispatch(userlogout());
    navigate("/");
  };

  const userFetchData = useSelector(userData);
  return (
      <>
        <div className="bg-[#fafafa] border-b border-[#eaeaea] p-2 text-[14px] font-bold text-center">
          ☆ Hosted 100,000+ links
        </div>
        {/* nav */}
        <nav className="z-999 'relative' w-full  start-0 bg-[hsla(0,0%,100%,.9)]  navbar">
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
              <Link to="/" className="ms-auto">
                <img className="w-[119px] mr-2" src="/img/logo.png" alt={"logo"} />
              </Link>

              <div className="">
                <div
                  id="toggle-menu-button"
                  className="items-center justify-between hidden w-full md:relative md:block md:'flex' md:w-auto md:order-1"
                >
                  <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-90 opacity-0 top-[400px] transition-all ease-in duration-500">
                   {userFetchData?.data ? <> </>: <>
                    <li className="my-6 md:my-0">
                      <Link
                        className="text-[14px] text-[#0d0d0d] font-semibold p-2 hover:border-b-2 border-[#ab65d0]"
                        to="/"
                      >
                        Help
                      </Link>
                    </li>
                    <li className="my-6 md:my-0">
                      <Link
                        className=" text-[#0d0d0d] font-semibold p-2 hover:border-b-2 border-[#ab65d0]"
                        to="/"
                      >
                        Pricing
                      </Link>
                    </li></>}
                  

                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
            {userFetchData?.data ? <>
            <button
                className="text-[#0d6efd] font-semibold p-2 hover:border-b-2  hover:bg-gray-300  rounded border-[#0d6efd] opacity-90"
                onClick={()=>Handleuserlogout()}
              >
                Log Out
              </button></>: <>
              <Link
                className="text-[#0d0d0d] font-semibold p-2 hover:border-b-2 border-[#0d6efd] opacity-90"
                to="/login"
              >
                Log in
              </Link>
              <Link to="/login">
                <button className=" ml-4 border-2 border-[#0d6efd] rounded-[5px] text-[#0d6efd] text-[14px] py-[6px] px-[14px] hover:text-[#0d6efd] hover:border-[#0d6efd]">
                  Sign up free
                </button>
              </Link></>}
              
            </div>
          </div>
          <div className="mobile-menu  md:hidden flex flex-col justify-center items-center text-center mt-[-25px] mb-4">
            <ul className=" top-[400px] transition-all ease-in duration-500">
              <li className="my-2 md:my-0">
                <a
                  className="text-[14px] text-[#0d0d0d] font-semibold py-2 hover:border-b-2 border-[#0d6efd] opacity-70"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="my-2 md:my-0">
                <a
                  className="text-[14px] text-[#0d0d0d] font-semibold py-2 hover:border-b-2 border-[#0d6efd] opacity-70"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
            <div className="md:hidden flex flex-col justify-center items-center">
              <a
                className="text-[#0d0d0d] font-semibold py-2 hover:border-b-2 border-[#0d6efd] opacity-70"
                href="#"
              >
                Log in
              </a>
              <a href="#">
                <button className=" my-2 border-2 border-[#0d6efd] rounded-[5px] text-[#0d6efd] text-[14px] py-[6px] px-[14px] hover:text-[#0d6efd] hover:border-[#0d6efd]">
                  Sign up free
                </button>
              </a>
            </div>
          </div>
        </nav>
      </>
  );
};

export default HomeNavbar;
