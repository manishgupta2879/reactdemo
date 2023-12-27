import React from 'react';

function Footer() {
  const footerStyle = {
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
  };

  return (
    <>
    <>
  {/* footer */}
  <footer className="pt-5 pb-[50px] bg-[#111827] w-full text-center">
    <div className="">
      <div className="flex flex-col-reverse justify-between  gap-6 max-w-[1300px] w-[80%] mx-auto my-[72px] md:flex-row overflow-x-auto">
        <div className="flex flex-col items-start gap-5 md:gap-10 max-w-[300px] w-full">
          <div className="flex flex-col items-start gap-6">
            <img
              className="h-10 text-left cursor-pointer"
              src="./img/footer-logo.png"
              alt="tiny.host"
            />
            <div className="text-[#d1d5db] text-[12px] font-normal text-left">
              Tiiny Labs Ltd. is a company registered in England and Wales with
              company number 12977077
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-left">
            <div className="text-white text-left">Built on </div>
            <img
              className="h-10 text-center"
              src="./img/amazon logo.png"
              alt=""
            />
          </div>
          <div className="flex flex-row items-start gap-4">
            <a href="#">
              <i className="fa-brands fa-twitter text-[#d1d5db] h-[22px]" />
            </a>
            <a href="#">
              {" "}
              <i className="fa-brands fa-youtube text-[#d1d5db] h-[22px]" />
            </a>
            <a href="#">
              {" "}
              <i className="fa-brands fa-linkedin text-[#d1d5db] h-[22px]" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
          <div className="flex flex-col justify-between items-start gap-4 md:gap-3 min-w-[166px]">
            <h3 className="text-[#f3f4f6] text-[16px] font-bold xl:text-[28px]">
              Examples
            </h3>
            <ul className="flex flex-col items-start gap-2 text-left list-none">
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
               Sales  &amp; Marketing
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Designers &amp; Artistd
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Developers
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
               Real Estate
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
              Recruitment
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                E-Learning &amp; Publishing
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Crypto
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Students
              </li>
            </ul>
          </div>
          <div className="min-w-[166px] flex flex-col justify-between items-start gap-4 md:gap-3">
            <h3 className="text-[#f3f4f6] text-[16px] font-bold xl:text-[28px]">
              Use Cases
            </h3>
            <ul className="flex flex-col items-start gap-2 text-left list-none">
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
              Host HTML file
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Web hosting free sites
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Zip file hosting
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
               Resume link
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                PDF upload
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                PDF to QR Code
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Free static website hosting
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Web hosting for small business
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Web hosting for students
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Marzipano VR host
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                How to host your own website
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
              More use cases
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                More host examples
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-start gap-3 min-w-[166px]">
            <h3 className="text-[#f3f4f6] text-[16px] font-bold xl:text-[28px]">
              Resources
            </h3>
            <ul className="flex flex-col items-start gap-2 text-left list-none">
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Documentation
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
               Test HTML
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Tiiny Invite
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Blog
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
              Support Chat
              </li>
              <li className="text-[rgb(209,213,219)] text-[14px] font-normal py-[2px] hover:underline">
                FAQs
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Affiliate program
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Report abuse
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-start gap-3 min-w-[166px]">
            <h3 className="text-[#f3f4f6] text-[16px] font-bold xl:text-[28px]">
              Useful Links
            </h3>
            <ul className="flex flex-col items-start gap-2 text-left list-none">
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Pricing
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Contact
              </li>
              <li className="text-[#d1d5db] text-[14px] font-normal py-[2px] hover:underline">
                Login / Sign Up
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-center max-w-[1300px] w-full mx-auto pt-6 border-t border-[#374151]">
        <div className="flex items-start gap-6 text-[12px] text-[#9ca3af]">
          © Tiiny Host 2023
        </div>
        <div className="flex items-start gap-6 text-[12px] text-[#9ca3af]">
          <a className="text-[#9ca3af] font-normal text-left" href="#">
            Terms &amp; Conditions
          </a>
          <a className="text-[#9ca3af] font-normal text-left" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
</>

    </>
  );
}

export default Footer;
