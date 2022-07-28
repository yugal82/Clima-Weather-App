import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-wrapper">
        <a href='#' className='logo'>
          <img src="./images/logo.png" />
          <div className="logo-content">
            <h2>Clima</h2>
            <small>A future forecast</small>
          </div>
        </a>

        <div className='nav-links'>
          <ul className='menu'>
            <li className='menu-item'>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar