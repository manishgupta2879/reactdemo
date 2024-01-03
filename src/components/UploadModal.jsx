import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fileData, uploadsFiles, verifyLink } from '../store/features/User/fileReducer';

const UploadModal = ({handleClose , openModel}) => {
    const dispatch  =  useDispatch()
    const fileModelData = useSelector(fileData);
    const [filehost, setFileHost] = useState(null);
    const [link, setLink] = useState('');


    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files[0];
        checkfileExtention(files) ? setFileHost(files) : toast.error('Invalid file type. Please select an HTML or ZIP file')
    };

    const checkfileExtention = (selectedFile) => (
        selectedFile && ['text/html', 'application/zip', 'application/x-zip-compressed'].includes(selectedFile.type)
    );
      

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        checkfileExtention(selectedFile)
          ?  setFileHost(selectedFile)
          : toast.error('Invalid file type. Please select an HTML or ZIP file');
      
        e.target.value = ''; // Clear the input field
      };
      

    const handleLink = () => {
      try {
        link == null ? toast.warning('link is null') : dispatch(verifyLink({link}))
      } catch (error) {

      }
    }

    const removeFile = () =>{
        setFileHost(null)
    }

    const publish = (e) => {
        e.preventDefault();
        if (!fileModelData.link) return toast.error("Verify the link, please.");
        if (!filehost) return toast.error("No file selected.");
      
        dispatch(uploadsFiles({ link: fileModelData.link, file: filehost }));
      
        handleClose();
        setLink("");
        removeFile();
      };
      
    useEffect(() => {
        
    }, [])
    

  return (
    <div className={`fixed inset-0 overflow-y-auto ${openModel ? '' : 'hidden'}`}>
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-200 opacity-75" onClick={()=>handleClose()} ></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"  aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  md:max-w-[30rem] lg:max-w-[100%]">
            <div className="bg-white p-4">

                <div className="max-w-[100%]  xl:mx-[80px] mx-auto flex-grow-[10] flex-1">

                    <div className="">
                        <form className="max-w-100  mx-auto">
                            <div className="relative flex items-stretch mt-[3px] max-w-[100%]   m-auto">
                                <input
                                    className=" block w-full py-[.375rem] px-[.75rem]
                                    text-[16px] font-normal leading-[1.5] text-[ #212529] font-semibold bg-[#fff] border border-[#ced4da] rounded-l-[6px] focus:ring-1  focus:outline-none focus:ring-blue-300  "
                                    type="text"
                                    placeholder="link-name"
                                    value={link}
                                    onChange={(e)=>setLink(e.target.value)}
                                />
                                <button
                                    id="dropdownDefaultButton"
                                    // data-dropdown-toggle="dropdown"
                                    className="text-[#0d6efd] font-semibold border border-[#0d6efd] hover:text-[#fff] hover:bg-[#0d6efd] focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-r-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                                    type="button"
                                    onClick={handleLink}
                                >
                                    .site.revaltronics.com{" "}
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
                                    // id="dropdown"
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

                                </ul>
                                {!filehost? 
                                <div className="text-[14px] mt-[15px] text-center"
                                    onDrop={handleDrop}>
                                    <div className="flex flex-col items-center p-[65px] border-[3px] rounded-lg border-[#4f93f8] border-dashed bg-[#FAFAFA] text-[#BDBDBD] outline-none cursor-pointer transition duration-[.24s] ease-in-out delay-0">
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
                                            <input className='hidden' type='file' id='filehost'
                                                accept=".html,.htm,.zip,application/zip,application/x-zip,application/x-zip-compressed"
                                                onChange={handleFileChange} />
                                            <label htmlFor='filehost' className="block mt-3 ps-4 pe-4 py-[6px] px-[1.6rem] w-[200px] border-2 border-[#4f93f8] bg-gradient-to-r from-sky-400 to-indigo-600 text-[#fff] rounded-[5px] hover:bg-gradient-to-r from-sky-400 to-indigo-600 ">
                                                Upload file
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                : 
                                <div className="text-[14px] mt-[15px] text-center">
                                    <div className="flex flex-col items-center p-[65px] border-[3px] rounded-lg border-[#4f93f8] border-dashed bg-[#FAFAFA] text-[#BDBDBD] outline-none cursor-pointer transition duration-[.24s] ease-in-out delay-0">
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
                                            {filehost?.name}
                                            </span>

                                            <button onClick={removeFile} className="block mt-3 ps-4 pe-4 py-[6px] px-[1.6rem] w-[200px] border-2 border-[#4f93f8] bg-gradient-to-r from-sky-400 text-[#fff] rounded-[5px] hover:bg-transparent">
                                                Remove File
                                            </button>
                                        </div>
                                    </div>
                                </div> 
                            }
                            </div>
                        </form>
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
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center">
                <button
                    type="button"
                    onClick={(e)=>{publish(e)}}
                    className="w-full items-center justify-center rounded-md border  bg-gradient-to-r from-sky-400 to-indigo-600 shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-gradient-to-r focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-gradient-to-r sm:ml-3 sm:w-[50%] sm:text-sm"
                >
                    Publish
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default UploadModal