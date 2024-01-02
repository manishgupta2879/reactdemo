import React from 'react'

function QuestionsSeaction() {
  return (
    <>
    
  {/* ask question */}
  <section className="max-w-[1100px] mx-auto block mt-[90px] p-[25px] lg:mt-[120px] text-center">
    <div className="max-w-[800px] mx-auto ">
      <h2 className="text-4xl font-black xl:text-[32px]">
        Frequently Asked Questions
      </h2>
      <div
        className="mt-[50px] "
        id="accordion-collapse"
        data-accordion="collapse"
      >
        {/* 1 */}
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium   dark:bg-white  text-gray-500 rtl:text-right  border-b border-gray-200 focus:ring-4 bg-transparent focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-1"
            
          >
            <span className="text-[18px]  text-[#454d55] font-medium text-left">
              What type of file formats do you support?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              We currently support HTML, ZIP and PDF files (more coming soon).
              If you're uploading a website, we support static sites. A static
              site is composed of frontend only static files such as such as
              HTML, JavaScript and images (jpeg, png, svg etc). These files
              should be uploaded as a zip file.
            </p>
          </div>
        </div>
        {/* 2 */}
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              How long will my link be online on your free plan?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className=" border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              Links stay online indefinitely on our free plan as long as you log
              into your account once every 3 months. We do not remove your links
              after a period of time as long as your account remains active.
            </p>
          </div>
        </div>
        {/* 3 */}
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              Do you support WordPress or similar CMS?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className=" border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              No, we only host static websites. However you can "static-ify your
              WordPress website through plugins:
            </p>
          </div>
        </div>
        {/* 4 */}
        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-4"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              Do you support PHP?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-4"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              No, we do not currently support PHP files
            </p>
          </div>
        </div>
        {/* 5 */}
        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-5"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              Are my links publicly accessible
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-5"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              Yes, all content you upload is publicly available on your link. If
              you prefer to keep it private, we recommend adding a password to
              your link through one of our subscription plans.
            </p>
          </div>
        </div>
        {/* 6 */}
        <h2 id="accordion-collapse-heading-6">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-6"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-6"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              Do you support e-commerce sites?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-6"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-6"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              We do not in the traditional CMS way (WordPress, Joomla etc), but
              we do support static e-commerce sites.
            </p>
          </div>
        </div>
        {/* 7 */}
        <h2 id="accordion-collapse-heading-7">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-7"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-7"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              What's the fastest way to reach you in case I need help?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-7"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-7"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              Send us a message via the chat icon in the bottom right-hand
              corner or an email at support@tiiny.host. We're quick to respond
              and always happy to help. Our goal is to make sharing to the web
              as simple as possible.
            </p>
          </div>
        </div>
        {/* 8 */}
        <h2 id="accordion-collapse-heading-8">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-8"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-8"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              How does your 7 day money back guarantee work?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-8"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-8"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              &gt;We have many happy customers. However, if for some reason
              after you upgrade to one of our paid plans you decide that it's
              not for you, then just reach out to our friendly support within 7
              days and we'll be happy to give you a full refund.
            </p>
          </div>
        </div>
        {/* 9 */}
        <h2 id="accordion-collapse-heading-9">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-9"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-9"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              Can I cancel at anytime?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-9"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-9"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              Of course! If you no longer need us, just cancel your subscription
              via your control panel. We process subscriptions through Stripe -
              which also manages thousands of other subscription services.
            </p>
          </div>
        </div>
        {/* 10 */}
        <h2 id="accordion-collapse-heading-10">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-5 font-medium rtl:text-right border-b border-gray-200 focus:ring-4 focus:ring-blue-200 focus:bg-transparent focus:text-blue-600 dark:focus:ring-blue-200 gap-3"
            data-accordion-target="#accordion-collapse-body-10"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-10"
          >
            <span className="text-[18px] text-[#454d55] font-medium text-left">
              What happens after I cancel?
            </span>
            <svg
              data-accordion-icon=""
              className="w-3 h-3 rotate-180 shrink-0"
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
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-10"
          className="hidden"
          aria-labelledby="accordion-collapse-heading-10"
        >
          <div className="border-b">
            <p className="py-4 px-5 text-[#454d55] text-[18px] text-left">
              Your sites will remain live until the end of your billing period.
              After this time, we'll completely remove them along with your
              account from our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      className=" rounded-[40px] my-[30px] p-10 lg:my-[72px] lg:p-20 text-center"
      style={{
        background:
          "radial-gradient(453.32% 127.15% at 21.47% 100%,rgba(13,110,253,.16) 0,rgba(174,93,215,.24) 100%),#fff"
      }}
    >
      <h3
        className="text-[64px] font-extrabold leading-[64px] mb-2"
        style={{
          background: "linear-gradient(91deg,#ae5dd7,#0d6efd)",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          WebkitBackgroundClip: "text"
        }}
      >
        Publish to the web in seconds
      </h3>
      <div className="mx-auto flex justify-center">
        <a
          className="max-w-[200px] bg-black text-white border-0 rounded-[100px] text-[16px] font-medium mt-10 py-3 px-5 hover:bg-[#0b5ed7]"
          href="#"
        >
          Upload for free →
        </a>
      </div>
    </div>
  </section>
    </>
  )
}

export default QuestionsSeaction
