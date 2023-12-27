import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userData,
  userFetch,
  userSuccess,
  userFail,
  signInWithGoogle,
} from "../store/features/User/userReducer";
import { Baseurl } from "../Utils/Constants";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../components/Basics/Loader";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Basics/NavBar";
import Footer from "../components/Basics/Footer";
// import Loader from '../Basics/Loader';

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const userLoadData = useSelector(userData);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (userForm.email === "") {
      toast.warning("email is empty");
    } else if (userForm.password === "") {
      toast.warning("password is empty");
    } else {
      try {
        dispatch(userFetch());
        const res = await axios.post(Baseurl + "users/adminLogin", userForm);
        if (res.data.status === 200) {
          dispatch(userSuccess(res.data.data));
          toast.success(res.data.message);
          navigate("/");
        } else {
          dispatch(userFail("Something went wrong"));
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("error", error);
        if (error?.response?.data?.message) {
          //   toast.error(error.response.data.message);
        } else {
          //   toast.error("Something went wrong!");
        }
      }
    }
  };

  const handleGoogleLogin = () =>{
      dispatch(signInWithGoogle())
  }

  // useEffect(() => {
  //   // if(userLoadData.data !== null){
  //   //   navigate('/')
  //   // }
  // }, [userLoadData, navigate]);
  return (
    <>
    <Navbar/>
      <section className="flex flex-col md:flex-row w-full  p-[10%] max-w-[1000px] m-auto md:pt-[90px]  md:pb-3 md:px-0 text-center">
        {/* left */}
        <div className="py-5 pr-5 xm:border-r xm:border-[hsla(0,0%,82%,.7)] xm:py-5 xm:pr-[60px] text-center mx-auto">
          <h5 className="text-[20px] font-medium leading-[1.2] mb-2 text-left">
            <b className="font-bold text-center">Log in or sign up</b>
          </h5>
          <div className="text-left mt-4">
            Sign in with your favourite platform or we'll send you a one-time
            login link.
          </div>
          <div className="text-[#7d7d7d] text-left text-[16px] ">
            We're password-less.
          </div>
          <div
            className="w-auto md:w-300px bg-white m-auto mt-6 p-4 rounded-[20px] overflow-x-auto border border-[#f1f1f1f1] text-left "
            style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
          >
            <h5 className="text-[20px] font-medium leading-[1.2] mb-2 text-center">
              Login or sign up
            </h5>
            <div className="relative flex flex-wrap items-stretch w-full mt-[3px]">
              <input
                className="text-[#212529]  bg-white  focus:ring-[#0d6efd]   dark:focus:ring-blue-200  bg-clip-padding border border-[#ced4da] appearance-none rounded-[6px]  opacity-100 relative flex-1 min-w-0 block w-full py-[6px] px-3 text-[16px] leading-[1.5] "
                type="email"
                placeholder="Email"
                aria-label="email"
              />
            </div>
            <button className="w-full bg-[#0d6efd] text-white mt-2 cursor-not-allowed opacity-30 px-3 py-[6px] text-[16px] font-normal border rounded-[6px]">
              Email Me Login Link
            </button>
            <div className="w-[75%] flex items-center text-[12px] text-[#868686] text-center mt-4 mx-auto empty:before:-mr-[.25em] before:*: before:border-b before:border-[#bfbfbf] before:flex-1 empty:after:ml-[.25em] after:*: after:border-b after:border-[#bfbfbf] after:flex-1">
              Or login with
            </div>
            <div className="flex gap-2 mt-4">
              <a
                className="inline-flex justify-center items-center cursor-pointer border border-[#dee2e6] rounded-[10px] w-full transition-all duration-[0.2s] ease-in-out delay-0 px-3 py-[6px] hover:bg-[#d8d8d8]"
                onClick={()=>{handleGoogleLogin()}}
              >
                <img
                  className="w-[17px] h-[17px] m-auto"
                  src="./img/google.png"
                  alt=""
                />
              </a>
              <a
                className="inline-flex justify-center items-center cursor-pointer border border-[#dee2e6] rounded-[10px] w-full transition-all duration-[0.2s] ease-in-out delay-0 px-3 py-[6px] hover:bg-[#d8d8d8]"
                href="#"
              >
                <img
                  className="w-[17px] h-[17px] m-auto"
                  src="./img/git.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="text-[13px] text-[#212529] m-2 opacity-[.5]">
            By using our service you accept our
            <a href="#">
              <u className="text-[#0d6efd]">terms &amp; conditions</u>
            </a>
            &amp;
            <a href="#">
              <u className="text-[#0d6efd]">privacy policy</u>
            </a>
          </div>
          <a href="#"></a>
        </div>
        <a href="#">
          {/* right */}
          <div className=" border-t border-[hsla(0,0%,100%,.32)] m-t-[50px] pt-[50px] text-center md:py-5 md:pl-[60px]">
            <h5 className="text-[20px] font-medium leading-[1.2] mb-2 text-left">
              <b className="text-[#212529]">Upgrade for more</b>
            </h5>
            <p className="w-[75%] text-left mb-4">
              Upgrade to <b className="text-[#212529]">host sites for longer</b>{" "}
              &amp; manage them all from a simple dashboard and more.
            </p>
            <button className="block text-[14px] text-[#bc67ec] border-2 border-[#bc67ec] rounded-[5px] py-[6px] px-[14px] text-left hover:text-[#0d6efd] hover:border-[#0d6efd]">
              Learn More →
            </button>
            <div className="flex flex-col justify-center mt-12 lg:min-w-[585px]">
              <div className="py-[16px] relative">
                <div className="relative inline-flex rounded-[6px]">
                  <button className="py-1 px-2 border border-[#212529] hover:bg-[#212529] hover:text-white rounded-l-[4px] text-[14px]">
                    Monthly
                  </button>
                  <button className="py-1 px-2 border border-[#212529] bg-[#212529] text-white rounded-r-[4px] text-[14px]">
                    Yearly
                  </button>
                </div>
                <p className="mt-6 mb-12 text-[14px]">
                  Questions?
                  <span className="text-[14px] text-[#6f388b] underline cursor-pointer">
                    <u>Chat with us</u>
                  </span>
                </p>
                <div className="xm:max-w-[150px] xm:absolute xm:right-5 xm:top-[-15px] xm:rotate-[8deg] text-[#9c9c9c] text-[18px] font-bold mt-[15px] mb-10 font-Indie">
                  🎖️ 7 day money back guarantee
                </div>
                <p />
                <div className="max-w-[944px] lg:min-w-[585px] mx-auto flex flex-col justify-center">
                  <div className="xs:inline-block md:flex sm:justify-center mt-6 mb-12">
                    {/* 1*/}
                    <div
                      className="flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
                      style={{
                        WebkitAnimation:
                          "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
                        animation:
                          "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
                        filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))",
                      }}
                    >
                      <div className="fill-white cursor-pointer">
                        <h2 className="text-[26px] text-[#6aa6ff] font-black mt-4 text-left xl:text-[32px]">
                          Tiny
                        </h2>
                        <div className="flex justify-start items-center text-[32px]">
                          <div>
                            <div className="flex">
                              <span className="text-[26px] text-[#6aa6ff] font-black">
                                $<b className="text-[47px] font-bold">5</b>
                                <span className="text-[16px] text-black font-normal mt-[-7px] ms-2">
                                  / month
                                </span>
                              </span>
                            </div>
                            <div className="text-[#7d7d7d] text-sm text-left">
                              <i>(Billed $ 60 /year)</i>
                            </div>
                          </div>
                        </div>
                        <div className="text-[18px] my-4 text-start font-Indie">
                          Perfect for a single, professional link
                        </div>
                      </div>
                      <div>
                        <div className="flex pb-1">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            1 active site
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            25 mb file uploads
                            <br />
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            10,000 visitors
                            <span className="text-sm font-bold">/mo</span>
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Remove Tiiny Host banner
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2">
                        <div clas="mt-2">
                          <div className="flex mt-2">
                            <img
                              className="w-[18px] h-[18px] mt-1"
                              src="./img/right.png"
                              alt="check"
                            />
                            <div className="px-3 font-bold text-[#333] text-left">
                              Built-in analytics
                            </div>
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div>
                        <button className="w-full cursor-pointer mt-4 px-3 py-[6px] text-4 font-normal text-white border border-[#6aa6ff] rounded-[6px] bg-[#6aa6ff] hover:bg-transparent hover:text-[#0d6efd]">
                          Get Tiny
                        </button>
                      </div>
                    </div>
                    {/* 2 */}
                    <div
                      className="relative flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
                      style={{
                        WebkitAnimation:
                          "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
                        animation:
                          "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
                        filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))",
                      }}
                    >
                      <div className="bg-[#ae5dd7] text-white text-[14px] rounded-[20px] mx-auto mt-[-29px] py-1 w-[110px]">
                        Most popular
                      </div>
                      <div className="fill-white cursor-pointer">
                        <h2 className="text-[26px] text-[#ab65d0] font-black mt-4 text-left xl:text-[32px]">
                          Solo
                        </h2>
                        <div className="flex justify-start items-center text-[32px]">
                          <div>
                            <div className="flex">
                              <span className="text-[26px] text-[#ab65d0] font-black">
                                $<b className="text-[47px] font-bold">13</b>
                                <span className="text-[16px] text-black font-normal mt-[-7px] ms-2">
                                  / month
                                </span>
                              </span>
                            </div>
                            <div className="text-[#7d7d7d] text-sm text-left">
                              <i>(Billed $ 60 /year)</i>
                            </div>
                          </div>
                        </div>
                        <div className="text-[18px] my-4 text-start font-Indie">
                          Great for individuals and small sites
                        </div>
                      </div>
                      <div>
                        <div className="flex pb-1">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            5 active site
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            75 mb file uploads <br />
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            1,00,000 visitors
                            <span className="text-sm font-bold">/mo</span>
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Remove Tiiny Host banner
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Custom domains
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Built-in analytics
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2">
                        <div clas="mt-2">
                          <div className="flex mt-2">
                            <img
                              className="w-[18px] h-[18px] mt-1"
                              src="./img/right.png"
                              alt="check"
                            />
                            <div className="px-3 font-bold text-[#333] text-left">
                              Edit mode
                            </div>
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div clas="mt-2">
                          <div className="flex mt-2">
                            <img
                              className="w-[18px] h-[18px] mt-1"
                              src="./img/right.png"
                              alt="check"
                            />
                            <div className="px-3 font-bold text-[#333] text-left">
                              Integrations
                            </div>
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div>
                        <button className="w-full cursor-pointer mt-4 px-3 py-[6px] text-4 font-normal text-white border border-[#ab65d0] rounded-[6px] bg-[#ab65d0] hover:bg-transparent hover:text-[#ab65d0]">
                          Get Free
                        </button>
                      </div>
                    </div>
                    {/* 3*/}
                    <div
                      className="relativer flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
                      style={{
                        WebkitAnimation:
                          "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
                        animation:
                          "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
                        filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))",
                      }}
                    >
                      <div className="fill-white cursor-pointer">
                        <h2 className="text-[26px] text-[#ffc107] font-black mt-4 text-left xl:text-[32px]">
                          Pro
                        </h2>
                        <div className="flex justify-start items-center text-[32px]">
                          <div>
                            <div className="flex">
                              <span className="text-[26px] text-[#ffc107] font-black">
                                $<b className="text-[47px] font-bold">31</b>
                                <span className="text-[16px] text-black font-normal mt-[-7px] ms-2">
                                  / month
                                </span>
                              </span>
                            </div>
                            <div className="text-[#7d7d7d] text-sm text-left">
                              <i>(Billed $ 372 /year)</i>
                            </div>
                          </div>
                        </div>
                        <div className="text-[18px] my-4 text-start font-Indie">
                          For freelancers, agencies &amp; organizations
                        </div>
                      </div>
                      <div>
                        <div className="flex pb-1">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            12 active site
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            1,000 mb file uploads <br />
                            <span className="text-sm font-normal">
                              (0.5mb PDF limit)
                            </span>
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            5,00,000 visitors
                            <span className="text-sm font-bold">/mo</span>
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Remove Tiiny Host banner
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Custom domains
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Built-in analytics
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2" />
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Edit mode
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Integrations
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Add team members
                          </div>
                        </div>
                      </div>
                      <div clas="mt-2">
                        <div className="flex mt-2">
                          <img
                            className="w-[18px] h-[18px] mt-1"
                            src="./img/right.png"
                            alt="check"
                          />
                          <div className="px-3 font-bold text-[#333] text-left">
                            Add additional sites
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="w-full cursor-pointer mt-4 px-3 py-[6px] text-4 font-normal text-black border border-[#ffc107] rounded-[6px] bg-[#ffc107]">
                          Get Pro
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
      <Footer/>
    </>
  );
};

export default LoginScreen;
