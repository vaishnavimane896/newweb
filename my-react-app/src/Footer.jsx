import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          
          <h3 className="footer-brand">Vaishnavi Mane</h3>
          
          <p className="footer-text">
            Building modern web experiences with creativity & passion.
          </p>

          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
