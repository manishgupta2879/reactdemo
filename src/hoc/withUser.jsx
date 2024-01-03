import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userData } from '../store/features/User/userReducer';

const WithUser = (WrappedComponent) => {
  const WithUserData = (props) => {
    const isAuthenticated = useSelector(userData);
    const navigation = useNavigate();

    useEffect(() => {
      if (isAuthenticated.tempdata == null && isAuthenticated.data == null) {
        // Redirect to the login page if not authenticated
        navigation('/');
      }

      if (isAuthenticated.tempdata && isAuthenticated.data == null) {
        // Redirect to the login page if not authenticated
        navigation('/otp');
      }

      if(isAuthenticated.data){
        navigation('/home');
      }
    }, [isAuthenticated, navigation]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return WithUserData;
};

export default WithUser;
