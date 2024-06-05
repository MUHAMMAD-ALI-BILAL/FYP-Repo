import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../LoginComponents/CSSFolder/Footer.css';
import jwtDecode from "jwt-decode";
import pic from '../Pic/Logo2.png'

const Footer = () => {

  const navigate = useNavigate();

  function BlogPost() {
    const token = localStorage.getItem("token");
    if (!isTokenValid(token)) {
      navigate('/login')
      return;
    }
    else {
      navigate('/aichat/blogs')
    }
  }

  function TwitterTweet() {
    const token = localStorage.getItem("token");
    if (!isTokenValid(token)) {
      navigate('/login')
      return;
    }
    else {
      navigate('/aichat/tweet')
    }
  }

  function CoverLetter() {
    const token = localStorage.getItem("token");
    if (!isTokenValid(token)) {
      navigate('/login')
      return;
    }
    else {
      navigate('/aichat/coverletter')
    }
  }

  function Email() {
    const token = localStorage.getItem("token");
    if (!isTokenValid(token)) {
      navigate('/login')
      return;
    }
    else {
      navigate('/aichat/email')
    }
  }

  function isTokenValid(token) {
    if (!token) {
      return false;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <>
      {/* <footer id="footer_main">
      <div id="footer-column">
         <div id='footer-logo'>
          <img src={pic} alt="logo" />
        </div>
      </div>

      <div id="footer-column">
        <h2 id='footer_heading'>Use Cases</h2>

        <div id='footer_ul'>
        <ul id=''>
          <li>
            <button onClick={BlogPost}>Blog Post</button>
          </li>
          <li>
            <button onClick={TwitterTweet}>Twitter Tweet</button>
          </li>
          <li>
            <button onClick={CoverLetter}>Cover Letter</button>
          </li>
          <li>
            <button onClick={Email}>Email</button>
          </li>
        </ul>
      </div>
      </div>

      <div id="footer-column">
        <h2 id='footer_heading'>Product</h2>
        <div id='footer_ul'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/'>Register</Link>
          </li>
         
        </ul>
      </div>
      </div>
    </footer> */}

      <div className="footer-container">
        <div className="copyright-text">
          All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
