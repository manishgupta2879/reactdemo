import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    // const userLoadData = useSelector((state)=>state.user)
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
