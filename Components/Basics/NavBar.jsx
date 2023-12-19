import React from 'react';
import { Image } from 'react-bootstrap';


const Navbar  = () =>  {
 
//------------------------------Navbar------------------------------------------------------------

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container text-white fs-7">
       <h1 className='navbar-brand text-white h-2'>Dashboard</h1>
       
        <button className="navbar-toggler" type="button" >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse`} id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <button className="nav-link " type="button">
                USER PROFILE
              </button>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link " type="button" >
                TASK ASSIGN
              </button>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link" type="button" >
                ORDER DETAIL
              </button>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link " type="button" >
                EMPLOYEYE
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
