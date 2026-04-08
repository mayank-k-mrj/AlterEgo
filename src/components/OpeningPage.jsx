import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import './OpeningPage.css'
import NavBar from './NavBar';
import MainBody from './MainBody';
import Contact from './Contact';

const OpeningPage = () => {
  return (
    <div className="opening_page">
      <div className='opening_div'>
        <NavBar />
        <Outlet/>
      </div>
    </div>
  )
}

export default OpeningPage
