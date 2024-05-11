import React from 'react'
import logo from '../../assets/images/apple-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
        <div className="nav-container">
            <div className="nav-content">
                <a href="/" className='nav-logo_link'>
                    <img src={logo} className='nav-logo' alt="" />
                </a>

                <ul className="nav-links">
                    <Link to="/backet" className='nav-link'>Backet</Link>
                    <Link className='nav-link'>Favourites</Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar   