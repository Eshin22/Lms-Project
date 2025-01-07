import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h2>About Us</h2>
          <p>We are dedicated to providing the best learning management system for students and educators worldwide.</p>
        </div>
        <div className='footer-section'>
          <h2>Contact Us</h2>
          <p>Email: support@lms.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className='footer-section'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/mycourses'>Courses</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2025 LMS. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
