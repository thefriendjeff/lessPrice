import React from 'react';
import myVideo from '../assets/video/video_hero.mp4';

import "../styles/components/header.css";



const Header = () => {
  return (
   <div>
      <div className="navbar">
          <h2>LESS PRICE</h2>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Create Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Download App</a>
              </li>
            </ul>
          </div>
      </div>
      <video autoPlay loop muted>
          <source src={myVideo}/>
      </video>
   </div>
  )
}

export default Header
