import React from 'react'
import './About.css'

const About = () => {

    function handleClick(){
        window.open("https://my-portfolio-ilup.vercel.app/");
    }

    return (
        <div className="about_container">

            <h1 className="about_title">Hi, I'm Mayank 👋</h1>

            <p className="about_description">
                I'm a passionate developer who loves building web applications and learning new technologies.
                Currently exploring React and Spring Boot to create real-world projects.
            </p>

            <button className="about_btn" onClick={handleClick}>My-Portfolio</button>
        </div>
    )
}

export default About
