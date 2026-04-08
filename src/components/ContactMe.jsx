import React from 'react'
import './ContactMe.css'

const ContactMe = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
            <div className="contact_container_main">
                <h1 className="contact_title">Get in Touch 📩</h1>
                <p className="contact_description">
                    Want to work together or just say hi? Feel free to connect with me.
                </p>
                <div className="contact_links">
                    <a href="https://github.com/mayank-k-mrj" target="_blank" className="contact_link github">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/mayank-kumar-b0715736a" target="_blank" className="contact_link linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:mayank@example.com" className="contact_link email">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactMe
