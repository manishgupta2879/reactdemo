import React from 'react'

function DashboardMainCard() {
  return (
  <>
  <>
  {/* pricing */}
  <section className=" relative max-width-[1040px] mt-[150px] mx-auto mb-12 pe-12 ps-12 text-center">
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
        {/* 1 */}
        <div
          className="flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
          style={{
            WebkitAnimation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            animation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))"
          }}
        >
          <div className="fill-white cursor-pointer">
            <h2 className="text-[26px] font-black mt-4 text-left xl:text-[32px]">
              Free
            </h2>
            <div className="flex justify-start items-center text-[32px]">
              <div>
                <div className="flex">
                  <span className="text-[26px] text-[#7d7d7d] font-black">
                    $<b className="text-[47px] font-bold">0</b>
                    <span className="text-[16px] text-black font-normal mt-[-7px] ms-2">
                      / month
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[18px] my-4 text-start font-Indie">
              Try us out for a quick project or two
            </div>
          </div>
          <div>
            <div className="flex pb-1">
              <img
                className="w-[18px] h-[18px] mt-1"
                src="./img/right.png"
                alt="check"
              />
              <div className="px-3 font-bold text-[#333]">1 active site</div>
            </div>
            <div className="flex mt-2">
              <img
                className="w-[18px] h-[18px] mt-1"
                src="./img/right.png"
                alt="check"
              />
              <div className="px-3 font-bold text-[#333]">
                3 mb file uploads <br />
                <span className="text-sm font-normal">(0.5mb PDF limit)</span>
              </div>
            </div>
            <div className="flex mt-2">
              <img
                className="w-[18px] h-[18px] mt-1"
                src="./img/right.png"
                alt="check"
              />
              <div className="px-3 font-bold text-[#333]">
                5,000 visitors
                <span className="text-sm font-bold">/mo</span>
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
          <div clas="mt-2" />
          <div clas="mt-2" />
          <div clas="mt-2" />
          <div clas="mt-2" />
          <div>
            <button className="w-full cursor-pointer mt-4 px-3 py-[6px] text-4 font-normal text-[#0d6efd] border border-[#0d6efd] rounded-[6px] hover:bg-[#0d6efd] hover:text-white">
              Get Free
            </button>
          </div>
        </div>
        {/* 2 */}
        <div
          className="flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
          style={{
            WebkitAnimation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            animation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))"
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
              <div className="px-3 font-bold text-[#333]">1 active site</div>
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
        {/* 3 */}
        <div
          className="relative flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
          style={{
            WebkitAnimation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            animation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))"
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
              <div className="px-3 font-bold text-[#333]">5 active site</div>
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
              <div className="px-3 font-bold text-[#333]">Custom domains</div>
            </div>
          </div>
          <div clas="mt-2">
            <div className="flex mt-2">
              <img
                className="w-[18px] h-[18px] mt-1"
                src="./img/right.png"
                alt="check"
              />
              <div className="px-3 font-bold text-[#333]">
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
                <div className="px-3 font-bold text-[#333]">Edit mode</div>
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
                <div className="px-3 font-bold text-[#333]">Integrations</div>
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
        {/* 4 */}
        <div
          className="relativer flex-1 bg-white fill-white cursor-pointer h-min xs:mt-5 xs:m-w-[450px] sm:m-[5px]  pt-[10px] px-5 pb-[18px] rounded-xl"
          style={{
            WebkitAnimation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            animation:
              "flip-in-ver-left .5s cubic-bezier(.25,.46,.45,.94) both",
            filter: "drop-shadow(4px 4px 50px rgba(0,0,0,.15))"
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
              <div className="px-3 font-bold text-[#333]">12 active site</div>
            </div>
            <div className="flex mt-2">
              <img
                className="w-[18px] h-[18px] mt-1"
                src="./img/right.png"
                alt="check"
              />
              <div className="px-3 font-bold text-[#333] text-left">
                1,000 mb file uploads <br />
                <span className="text-sm font-normal">(0.5mb PDF limit)</span>
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
    {/* table */}
    <div className=" mx-auto overflow-x-auto text-center">
      <table className="table w-full mt-12 mb-4 text-[20px] border-[#dee2e6] border-collapse hover-bg-[rgba(0, 0, 0, 0.075)]">
        <thead className="border-0 border-inherit border-solid text-[20px] font-bold text-start p-2">
          <tr className="border-b">
            <th className=" text-start hidden sm:block w-[293px] p-2">
              PLan
              <span className="block" />
            </th>
            <th className="w-[106px] text-start p-2">
              Free
              <span className="block">$0/mo</span>
            </th>
            <th className=" w-[118px] text-[#6aa6ff] text-start p-2">
              Tiny
              <span className="block">$0/mo</span>
            </th>
            <th className="w-[135px] text-[#ab65d0] text-start p-2">
              Solo
              <span className="block">$13/mo</span>
            </th>
            <th className="w-[135px] text-[#ffc107] text-start p-2">
              Pro
              <span className="block">$31/mo</span>
            </th>
            <th className="w-[153px] text-[#6c757e] text-start p-2">
              Business
              <span className="block">~ /mo</span>
            </th>
          </tr>
        </thead>
        <tbody className="border-0 border-inherit border-solid">
          {/* 1 */}
          <tr className="block sm:hidden  w-full p-2">
            <td className="text-18px font-bold text-left">Active Sites</td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Active sites
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-2.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">1</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">1</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">5</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">12</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">Custom</span>
            </td>
          </tr>
          {/* 2 */}
          <tr className="block sm:hidden  w-full  p-2">
            <td className="text-18px font-bold text-left">File Uploads</td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              File Uploads
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-2.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">3mb</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">25mb</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">75mb</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">100mb</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">Custom mb</span>
            </td>
          </tr>
          {/* 3 */}
          <tr className="block sm:hidden  w-full  p-2">
            <td className="text-18px font-bold text-left">Visitors</td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Visitors
              <span className="text-sm">/mo</span>
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-2.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">5,000</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">10,000</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">1,00,000</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">5,00,000</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">Custom</span>
            </td>
          </tr>
          {/* 4 */}
          <tr className="block sm:hidden  w-full  p-2">
            <td className="text-18px font-bold text-left">Bandwidth</td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Bandwidth
              <span className="text-sm">/mo</span>
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-2.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">5GB</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">10GB</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">50GB</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">100GB</span>
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2">Custom GB</span>
            </td>
          </tr>
          {/* 5 */}
          <tr className="block sm:hidden  w-full  p-2">
            <td className="text-18px font-bold text-left">
              Remove Tiiny Host banner{" "}
            </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Remove Tiiny Host banner
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 6 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">
              Alternate domains/td&gt;
            </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Alternate domains
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 7 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">Custom domains </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Custom domains
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 8 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">
              Built-in analytics{" "}
            </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Built-in analytics
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-3.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 9 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">
              Password protection{" "}
            </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Password protection
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 10 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">
              Disable PDF downloads
            </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Disable PDF downloads
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 11 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">Custom 404 pages</td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Custom 404 pages
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 12 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">Edit mode </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Edit mode
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 13 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">Integrations </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Integrations
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-4.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 14 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">Add team members</td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Add team members
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
          {/* 15 */}
          <tr className="block sm:hidden  w-full border-0 p-2">
            <td className="text-18px font-bold text-left">
              Add additional sites
            </td>
          </tr>
          <tr className="border-b hover:bg-[#dfdfdf]">
            <td className="text-[18px] font-bold text-start hidden sm:block">
              Add additional sites
              <img
                className="ms-2 opacity-5 h-[15px]"
                src="./img/table icon-1.png"
                alt=""
              />
            </td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start"></td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-5.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
            <td className="text-start">
              <img
                className="w-[22px] h-[22px] inline-block ms-2"
                src="./img/icon/table icon-6.png"
                alt=""
              />
              <span className="text-[18px] inline-block p-2" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="flex justify-center w-[150px] ms-auto text-[#6c757d] border rounded-[6px] px-3 py-[6px] border-[#6c757d] hover:text-white hover:bg-[#6c757d]">
        Contact us
      </button>
    </div>
  </section>
</>

  </>
  )
}

export default DashboardMainCard
