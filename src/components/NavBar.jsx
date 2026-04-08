import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/Logo.png'

const NavBar = () => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    navigate('/form');
  }

  function handleNavClick() {
    setOpen(false);
  }

  return (
    <div>
      <div className="nav_div">

        <div className="left_div">
          <img src={logo} alt="logo" className="logo" />
          <div className="bot_name">AlterEgo.</div>
        </div>

        <nav className="navigation">
          <NavLink className={({ isActive }) => isActive ? "isActive" : ""} id="nvLink" to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "isActive" : ""} id="nvLink" to="/about">About</NavLink>
          <NavLink className={({ isActive }) => isActive ? "isActive" : ""} id="nvLink" to="/contact">Contact</NavLink>
        </nav>

        <div className="menu_icon" onClick={() => setOpen(!open)}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

        <div className="btn">
          <button className='small_btn' onClick={handleClick}>Get Started</button>
        </div>

      </div>

      {open && (
        <div className="mobile_menu">
          <NavLink to="/home" id="home" onClick={handleNavClick}>Home</NavLink>
          <NavLink to="/about" id="about" onClick={handleNavClick}>About</NavLink>
          <NavLink to="/contact" id="contact" onClick={handleNavClick}>Contact</NavLink>
        </div>
      )}
    </div>
  )
}

export default NavBar