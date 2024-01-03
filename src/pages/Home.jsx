import React, { useEffect, useState } from 'react'
import { getFiles, fileData } from '../store/features/User/fileReducer';
import { useDispatch, useSelector } from 'react-redux';
import HomeNavbar from '../components/Basics/HomeNavBar';
import UploadModal from '../components/UploadModal';
import WithUser from '../hoc/withUser';
import { FiEdit, FiTrash2 ,FiUploadCloud } from 'react-icons/fi';

const Home = () => {
    const dispatch  =  useDispatch()
    const fileHomeData = useSelector(fileData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toggleState, setToggleState] = useState('live');
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    const formatDate = (dateString) => {
      const date = new Date(dateString); 
      const formattedDay = date.toLocaleString('en-US', { day: '2-digit' });
      const formattedMonth = date.toLocaleString('en-US', { month: 'short' });
      const formattedYear = date.toLocaleString('en-US', { year: 'numeric' });
    
      return `${formattedDay} ${formattedMonth} ${formattedYear}`;
    };
    


  useEffect(() => {
      dispatch(getFiles()) 
  }, [dispatch]);

    return (
        <>
            {/* Navigation */}
            <HomeNavbar />
            {/* Main Content */}
           
              {/* /------------------------------------------------/ */}

                <div className="grid grid-cols-[minmax(260px,1fr)]  max-w-[1000px] m-auto tab:mt-[75px] tab:mx-auto min-h-[972px] p-[5%] tab:p-0 text-center">
                  <div className="max-w-[800px] md:min-w-[600px] w-full ">
                    <h4 className="text-[22px] text-[#4f82cf] font-bold text-left mb-2 leading-[1.2]">
                      My Links
                    </h4>
                    <button
                        onClick={handleOpenModal}
                      className="flex justify-center items-center  bg-gradient-to-r from-sky-400 hover:bg-gradient-to-r to-indigo-600 text-white border-2 border-[#4f82cf] float-right font-bold cursor-pointer px-3 py-[6px] text-[16px] rounded-md"
                      style={{ boxShadow: "0 2px 20px 3px rgba(0,0,0,.2)" }}
                    >
                      <FiUploadCloud className="cursor-pointer text-white mr-2" />
                      UPLOAD
                    </button>
                    
                    
                    {/* popup */}
                    <div className="mt-[60px] text-center">
                      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                        <ul
                          className="flex flex-wrap -mb-px"
                          id="default-tab"
                         
                          role="tablist"
                        >
                          <li className="me-2" role="presentation">
                            <a
                              className={`inline-block p-4 border-b-2 ${toggleState === 'live'? 'font-bold text-[#4f82cf]' : ''} rounded-t-lg    hover:cursor-pointer border-transparent`}
                              id="profile-tab"
                              onClick={()=>setToggleState('live')}
                              type="button"
                              role="tab"
                            >
                              Live
                            </a>
                          </li>
                          <li className="me-2" role="presentation">
                            <a
                              className={`inline-block ${toggleState === 'in-active'? 'font-bold text-[#4f82cf]' : ''} p-4 border-b-2 rounded-t-lg hover:cursor-pointer border-transparent `}
                              id="dashboard-tab"
                              onClick={()=>setToggleState('in-active')}
                              type="button"
                            >
                              In-active
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div id="default-tab-content">
                      {toggleState === 'live'? 
                        <div
                          className=""
                          style={{ transition: "opacity .15s linear" }}
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div
                            className="w-[100%] tab:w-full py-[10px] rounded-lg bg-white m-auto"
                            style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
                          >
                            {/* if get files show  */}
                            {fileHomeData?.fileList.length > 0 ?
                            <div className="overflow-x-auto">
                            <div className="flex border border-gray-800 bg-gray-100 rounded-md mb-2">
                              <div className="p-2 w-1/3">Status</div>
                              <div className="p-2 w-1/3">Domain</div>
                              <div className="p-2 w-1/3">Date</div>
                              <div className="p-2 w-1/3">Action</div>
                            </div>
                            {fileHomeData?.fileList.map((item) => (
                              <div key={item.id} className="flex border border-gray-800 bg-white rounded-md mb-2">
                                 <div className={`p-2 w-1/3 ${item.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                                  {item.status}
                                </div>
                                <div className="p-2 w-1/3">
                                  <a href={`${item.link}.${item.domain}`} target='_blank'> 
                                  {item.link.concat(`.${item.domain}`)}
                                  </a>
                                </div>
                                <div className="p-2 w-1/3">{formatDate(item.created_at)}</div>
                               
                                <div className="p-2 w-1/3 flex items-center justify-center gap-4">
                                  <FiEdit className="cursor-pointer text-blue-500 hover:text-blue-700 mr-2" />
                                  <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
      
                                </div>
                              </div>
                            ))}
                            </div>
                            
                            
                            : 
                            <div className="p-8 text-center">
                              <div className="text-center">
                                <span className="text-[#9c9c9c]">No live links</span>
                              </div>
                              <button  onClick={handleOpenModal} className="text-[20px] text-[#0d6efd] px-4 py-2 mt-4 border border-[#0d6efd] rounded-lg focus:ring-4 hover:bg-[#0d6efd] hover:text-white">
                                Upload
                              </button>
                          </div>
                          }
                          </div>
                          <div className="text-[14px] text-[#9c9c9c] text-right ml-auto opacity-70 mt-4">
                            0 / 1 live site
                          </div>
                        </div>
                        :
                        <div
                          className=""
                          style={{ transition: "opacity .15s linear" }}
                          id="dashboard"
                          role="tabpanel"
                          aria-labelledby="dashboard-tab"
                        >
                          <div
                            className="w-full py-5 rounded-[20px] overflow-x-auto bg-white m-auto"
                            style={{ boxShadow: "0 2px 50px rgba(0,0,0,.12)" }}
                          >
                            <div className="p-8">
                              <div className="text-center">
                                <span className="text-16  text-[#9c9c9c] font-bold">
                                  No archived sites
                                </span>
                              </div>
                              <div className="text-sm text-[#9c9c9c] mt-1">
                                Archived sites will appear here.
                              </div>
                            </div>
                          </div>
                        </div>
                       }
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* upload model  */}
                <UploadModal handleClose={handleCloseModal} openModel={isModalOpen} se/>
        </>


    )
}

const ProtectedHomeWrapper = WithUser(Home);
export default ProtectedHomeWrapper