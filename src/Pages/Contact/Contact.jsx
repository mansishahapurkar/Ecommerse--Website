// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
        <form action="https://formspree.io/f/xdkkyawe"method='POST'>
        <input type="text"placeholder='Enter Your Name...'name='username'required/>
        <input type="email"placeholder='Email'required/>
        <textarea name="message"placeholder='Message'required></textarea>
        <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Contact
