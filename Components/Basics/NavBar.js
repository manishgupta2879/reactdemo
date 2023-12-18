import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { userData } from '@/store/features/User/userReducer';



function NavBar() {
    const userLoadData = useSelector(userData)
    console.log(userLoadData,"userLoadData navbar")
  return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link href="/">
              My Dash board
            </Link>
            <div className="collapse navbar-collapse">
            
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/dashboard">
                  Dashboard
                  </Link>
                  
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
    
  )
}

export default NavBar
