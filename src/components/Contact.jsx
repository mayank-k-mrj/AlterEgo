import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
      <div className="footer">
        <div className="dev_by">
            Developed by Mayank
        </div>
        <div className="cont_link">
            <a href="https://github.com/mayank-k-mrj" target='blank' className="link1"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mayank-kumar-b0715736a" target='blank' className="link2"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
