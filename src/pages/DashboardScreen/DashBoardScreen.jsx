import React, { useRef } from 'react'
import Navbar from '../../components/Basics/NavBar'
import { useSelector } from 'react-redux';
import { userData } from '../../store/features/User/userReducer';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Basics/Loader';

const DashBoardScreen = () => {

    const userFetchingData = useSelector(userData);
    const priceRef = useRef()
  return (
    <>
        {userFetchingData?.data === null && userFetchingData?.loading 
        ?<Loader /> //Display loader if data is still loading.
        :<>
            <Navbar price={priceRef}/>
            <Outlet context={priceRef}/>
          </>
        }
        </>
  )
}

export default DashBoardScreen