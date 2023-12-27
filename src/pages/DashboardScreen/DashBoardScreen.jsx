import React from 'react'
import Navbar from '../../components/Basics/NavBar'
import { useSelector } from 'react-redux';
import { userData } from '../../store/features/User/userReducer';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Basics/Loader';
import Footer from '../../components/Basics/Footer';

const DashBoardScreen = () => {

    const userFetchingData = useSelector(userData);
  return (
    <>
        {userFetchingData?.data === null && !userFetchingData?.loading 
        ?<Loader /> //Display loader if data is still loading.
        :<>
            <Navbar/>
            <Outlet />
            {/* <Footer /> */}
          </>
        }
        </>
  )
}

export default DashBoardScreen