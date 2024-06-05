import '../App.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from 'react-scroll';
import Div from './Div';
import Div3 from './Div3';
import Footer from './Footer';
import '../LoginComponents/CSSFolder/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);


  return (
    <>
      <nav id='main-nav'>

        <div className={showMediaIcons ? "mobile-menu-link" : "menu-link"}>
          <ul id='link-desktop'>
            <li>
              <ScrollLink to='home' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to='working' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Working</ScrollLink>
            </li>
          </ul>
        </div>

        <div id={showMediaIcons ? "signin-getstarted" : "nav-btns"}>

          <ul id="social-media-desktop">
            <li id='signin' onClick={() => navigate('/login')}>
              <button>Sign in</button>
            </li>

            <li>
              <button id='getstarted' onClick={() => navigate('/register')} style={{ padding: '1ch', borderRadius: '2ch', color: 'white', paddingLeft: '2ch', paddingRight: '2ch' }}>Get Started</button>
            </li>
          </ul>
        </div>


        {/* hamburget menu start  */}
        <div id="hamburger-menu">
          <Link to="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </Link>
        </div>
      </nav>



      <Div />
      {/* <Div2 /> */}
      <Div3 />
      {/* <Div4 /> */}
      {/* <Div5 /> */}
      <Footer />
    </>
  )
}
