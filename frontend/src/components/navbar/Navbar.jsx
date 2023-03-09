import React from 'react'
import "./navbar.scss"
import logo from "../../assets/gol-logo 1.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="left">
        <img src={logo} alt="" />
    </div>
        <nav>
            <ul>
                <li>Find Reservations</li>
                <li>Packages</li>
                <li>About Lakshadweep</li>
                <li>About Us</li>
                <li>Gol</li>
                <li>support</li>
            </ul>
        </nav>
    <div className="right">
        <button className='login'>Login</button>
        <button className='signup'>Sign Up</button>
    </div>

    </div>
  )
}

export default Navbar