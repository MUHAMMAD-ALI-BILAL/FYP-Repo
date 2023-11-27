import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import '../LoginComponents/CSSFolder/Footer.css';
import pic from '../Pic/Logo2.png'

const Footer = () => {
  return (
    <footer id="footer_main">
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
            <Link to='/'>Blog Post</Link>
          </li>
          <li>
            <Link to='/'>Twitter Tweet</Link>
          </li>
          <li>
            <Link to='/'>Cover Letter</Link>
          </li>
          <li>
            <Link to='/'>Email</Link>
          </li>
        </ul>
      </div>
      </div>

      <div id="footer-column">
        <h2 id='footer_heading'>Product</h2>
        <div id='footer_ul'>
        <ul>
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/'>Register</Link>
          </li>
          {/* <li>
            <Link to='/'>Cover Letter</Link>
          </li>
          <li>
            <Link to='/'>Email</Link>
          </li> */}
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
