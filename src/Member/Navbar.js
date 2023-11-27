import '../App.css';
import { VscThreeBars } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdFace6 } from 'react-icons/md';
import { IoMdNotifications } from 'react-icons/io';
import { IoIosArrowRoundForward } from 'react-icons/io'
import { GiHamburgerMenu } from "react-icons/gi";
import pic from '../../src/Pic/Logo2.png';
import { Link as ScrollLink } from 'react-scroll';
import Div from './Div';
import Div2 from './Div2';
import Div3 from './Div3';
import Div4 from './Div4';
import Div5 from './Div5';
import Footer from './Footer';
import '../LoginComponents/CSSFolder/Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
    // let Links =[
    //     {name:"Home", link:"/home"},
    //     {name:"Service", link:"/services"},
    //     {name:"Pricing", link:"/pricing"},
    //     {name:"Contact Us", link:"/contactUs"},
    // ];
    // const [open ,Setopen] = useState(true);
    const [showMediaIcons, setShowMediaIcons] = useState(false);


  return (
    <>
    {/* <div className= "bg-slate-900 px-5 md:bg-slate-900 w-full py-4">
    
      <span className='text-white absolute right-9 top-5 md:hidden'>
      <div onClick={()=>Setopen(!open)} className='bg-white text-xl absolute right-9 top-5 md:hidden'>
       { open ? <GrClose/> : <VscThreeBars/> } 
      </div>
      </span>
    
    <ul className="items-center relative md:flex justify-center">
        {
            Links.map((link) =>{
              return   <li className='text-center py-3 text-white md:text-white font mr-9 hover:text-gray-400' key={link.name}>
                    <Link to={link.link}> {link.name}  </Link>
                </li>
                
            })
        }

        <div className='flex md:absolute right-0 flex-row justify-center items-center'>
        <Link className='  text-white py-1 bg-blue-900 px-3  rounded-md  md:bg-slate-900 text-white mr-6 underline hover:no-underline' to='/'>sign in</Link>
         <button className='bg-orange-900 md:bg-orange-500 px-3 py-1 rounded-md mr-10 text-white'>Get Started</button>
         </div>
    </ul>
    </div> */}

    <nav id='main-nav'>

      <div id='nav-logo'>
      <img src={pic} alt="logo" />
      </div>


      <div className={showMediaIcons ? "mobile-menu-link" : "menu-link"}>
        <ul id='link-desktop'>
          <li>
            {/* <Link to='/'>Home</Link> */}
            <ScrollLink to='home' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</ScrollLink>
          </li>
          <li>
            {/* <Link to='/'>Services</Link> */}
            <ScrollLink to='working' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Working</ScrollLink>
          </li>
          <li>
            {/* <Link to='/'>Pricing</Link> */}
            <ScrollLink to='services' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</ScrollLink>
          </li>
          <li>
            {/* <Link to='/'>Contact Us</Link> */}
            <ScrollLink to='FAQ1' smooth={true} duration={500} style={{ cursor: 'pointer' }}>FAQ's</ScrollLink>
          </li>
        </ul>
      </div>

      <div id={showMediaIcons ? "signin-getstarted" : "nav-btns"}>
      {/* <div id="nav-btns"> */}
        <ul id="social-media-desktop">
          <li id='signin' onClick={() => navigate('/login')}>
            <button>Sign in</button>
          </li>

          <li>
            <button id='getstarted' onClick={() => navigate('/register')} style={{ padding:'1ch', borderRadius:'2ch', color:'white', paddingLeft:'2ch', paddingRight:'2ch'}}>Get Started</button>
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



    <Div/>
    <Div2/>
    <Div3/>
    <Div4/>
    <Div5/>
    <Footer/>
    </>
  )
}
