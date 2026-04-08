import React from 'react'
import './MainBody.css'
import logo from '../assets/Logo.png'
import { Navigate, useNavigate } from 'react-router-dom'

const MainBody = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/form');
  }

  return (
    <>
      <div className="mainbody">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="welcome_note">
            Welcome to AlterEgo
        </div>
        <div className="use_cont">
            Create your personalize AI chatbot with a unique personality and behaviour tailored to your style.
        </div>
        <div className="btn">
            <button className='big_btn' onClick={handleClick}>Get Started</button>
        </div>
        <hr />
        <div className="bottom_cont">
            Build your own AI chatbot that reflects your personality, with behavior and communication style customized exactly the way you like.
        </div>
      </div>
    </>
  )
}

export default MainBody
