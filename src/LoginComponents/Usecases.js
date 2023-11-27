import React, {useState, useEffect , useRef, useMemo} from 'react';
import jwtDecode from 'jwt-decode'; // Import jwt-decode
import { Link, useNavigate } from "react-router-dom";
import {HiOutlinePlusSm} from 'react-icons/hi';
import { ImBlog } from 'react-icons/im';
import {HiHome} from 'react-icons/hi';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { SlEnergy } from 'react-icons/sl';
import { SlBookOpen } from 'react-icons/sl';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { HiMailOpen } from 'react-icons/hi';
import { AiFillYoutube } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { ImAmazon } from 'react-icons/im';
import Dropdownprofile from './Components/Dropdownprofile';
import {TfiMenu} from 'react-icons/tfi';
import axios from 'axios';
import './CSSFolder/usecase.css';

export default function Usecases() {
    
    const navigate = useNavigate();
    const [openProfile, Setopenprofile] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userWord, setUserWord] = useState(null);
    const [remainingHeight, setRemainingHeight] = useState(0);
    //Error
    const [errorMessage, setErrorMessage] = useState(null);
    
    const dropdownRef = useRef(null);


    // Getting the Words from the Database
    useEffect(() => {
      const token = localStorage.getItem("token");
    
      if (token) {
        const decodedToken = jwtDecode(token);
        const email = decodedToken.email;
        const data = { email };
    
        axios.post("http://localhost:9000/Getword", data, {
          headers: {
            'Accept': 'application/json',
          },
        })
        .then((response) => {
          const RemWords = response.data.words
          if(RemWords <= 0)
          {
            setUserWord(0);
            setErrorMessage("Words will be available shortly."); // Set your error message here
          }
          else{
          setUserWord(RemWords)
          }
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
        });
      }
    }, []);


    // Getting the Data fro the token
    useEffect(() => {
      // e.preventDefault();
      const token = localStorage.getItem("token");
  
      if (token) {
        const decodedToken = jwtDecode(token);
        // Retrieve user data from the decoded token
        // setUserData(decodedToken);
        setUserName(decodedToken.name.substring(0, 2).toUpperCase());
        // console.log(userName)
        // console.log(userData.email)
        // console.log(userData.words)
        // console.log("User name ",userData.name);
        // console.log("Email: ",userData.email);
        // console.log("Words Remaining: ",userData.words);
      }
      else{
        console.log("Token not available")
      }
    }, []);


    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          Setopenprofile(false);
        }
      }
  
      window.addEventListener('click', handleClickOutside);
  
      return () => {
        window.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    const handleDropdownClick = (event) => {
      // Prevent the click event from propagating to the window
      event.stopPropagation();
  
      if (dropdownRef.current.contains(event.target)) {
        console.log(dropdownRef.current.contains(event.target.window))
        Setopenprofile((prevState) => !prevState);
        return;
      }
  
      return
    };

    function Blogs(){
      navigate("/aichat/blogs")
    }
    function Email(){
      navigate("/aichat/coldemail")
    }
    function Twitter(){
      navigate("/aichat/tweet")
    }
    function Youtube_Title(){
      navigate("/aichat/youtube-title")
    }
    function AmazonPT(){
      navigate("/aichat/amazon-product-title")
    }
    function InstagramCap(){
      navigate("/aichat/instagram-captions")
    }
    function Emails(){
      navigate("/aichat/email")
    }
    function Product_Desc(){
      navigate("/aichat/product-description")
    }
    function Coverletter(){
      navigate("/aichat/coverletter")
    }
    function YoutubeDesc(){
      navigate("/aichat/youtube-description")
    }
    function Amazon_prod_desc(){
      navigate("/aichat/amazon-product-description")
    }
    function Youtube_idea(){
      navigate("/aichat/youtube-ideas")
    }


    // Height checking
    useEffect(() => {
      const handleResize = () => {
        const totalHeight = window.innerHeight;
        console.log(totalHeight)
        const contentDivHeight = document.getElementById('contentDiv').clientHeight;
        console.log(contentDivHeight)
        setRemainingHeight(totalHeight - contentDivHeight);
        // console.log(remainingHeight)
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
   }, []);

  return (
    <>
<div className='flex flex-row'>
  <div id='Usecaseflex1' className='w-2/5 bg-slate-900 min-h-screen'>

    {/* //Onclick Function New Documnt */}
  <div id='flex1_link' className='mt-6'>
          <Link id='flex1_btn' className='flex space-x-2 rounded-lg items-center'>
          <span 
          className="text-xl text-white">
            <HiOutlinePlusSm/>
          </span>
            <button className='text-white bg-blue-700'>New Document</button>
          </Link>
  </div>
 
 
    <div id='Usecasespan_text' className='text-white rounded-lg mx-auto border-dashed	mt-6 text-center'>
        <span style={{color:'blue'}}><BsChatRightDotsFill/></span> <span className='font-semibold text-blue-800'>Note:</span>  At <span className='font-semibold'>Tustify</span>, we are dedicated to advancing the field of AI and making it accessible to everyone
    </div>

    <div className='mt-16'>
      <Link id='home' className='flex flex-row space-x-1 text-white'>
        <span><HiHome/></span>
        <button>Get Started</button>
      </Link>
    </div>

    <div style={{position:'absolute', bottom:'0', marginBottom:'4ch', left:'3ch'}}>
        <span id='footer'> <u>{userWord}</u> words available </span>
    </div>

    </div>
 
      <div  style={{}} className='w-full bg-stone-300 min-h-screen'>
      <div id='contentDiv'>
          <div id='flex2' style={{}} className='flex items-center justify-between bg-white border border-blue-500'>
            <div className='items-center space-x-1 ' style={{paddingLeft:'4ch', display:'flex'}}>
                 <span className='font-bold text-3xl	'> Get Started </span>
                 <span className='font-bold text-2xl ' style={{color:'blue'}}><SlEnergy/></span>
            </div>

            <div id="dropdown-btn" style={{ paddingRight: '4ch' }}>
      <span
        ref={dropdownRef}
        className="text-white text-base items-center"
        onClick={handleDropdownClick}
        style={{
          backgroundColor: 'blue',
          padding: '1ch',
          borderRadius: '70%',
          cursor: 'pointer',
        }}
      >
        {userName}
      </span>
      {openProfile && (
        <div>
          {/* Your dropdown content here */}
          <Dropdownprofile />
        </div>
      )}
    </div>
          </div>


        <div className='space-y-10'>

        {/* <div style={{zIndex:'100'}}>
      {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      </div> */}

        <div className='bg-white items-center justify-center'>
      <div className='flex flex-row items-center justify-center'>

    <div>
    <button style={{backgroundColor:'#d0fae5', padding:'1ch', color:'blue'}}>
    <p>Use Cases</p>
  </button>
  </div>

<div>
  <div>
      <button style={{backgroundColor:'#d0fae5',color:'blue', padding:'1.13ch'}} className='text-lg'>
      <span>  <TfiMenu/> </span>
      </button>

    </div>
</div>
</div>
    </div> 
        </div>
        
        </div>

{/* Scrolling here */}
{/* style={{ overflowY: 'auto', maxHeight: '400px' }} */}
   <div id='resContainer' style={{ overflowY: 'auto', maxHeight:`${remainingHeight}px` }} >
      <div onClick={Blogs} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color: '#9d42c9'}} className='text-3xl sm:h-6 sm:w-6'>
            <ImBlog/>
          </span>
          <span className='font-semibold text-base'>
          Blog Idea & Outline
          </span>
          <span>
          AI-crafted blogs, where words weave magic, ideas flourish, and every read leaves you inspired and eager for more!.
          </span>
            
        </div>
      </div>
     
      <div onClick={Email} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color: '#105d7b'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <HiMailOpen/>
          </span>
          <span className='font-semibold text-base'>
          Cold Emails
          </span>
          <span>
          Supercharge your outreach with our Cold Mail Service - simple, effective, and designed to boost your connections effortlessly.
          </span>
            
        </div>
      </div>

      <div onClick={Twitter} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'#1da1f2'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <FaTwitter/>
          </span>
          <span className='font-semibold text-base'>
          Tweet Generator
          </span>
          <span>
          Elevate your Twitter with our AI Tweet Generator - creating tweets that stand out, resonate, and make an impact effortlessly.          
          </span>
        </div>
      </div>
      
      <div onClick={Youtube_Title} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'red'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <AiFillYoutube/>
          </span>
          <span className='font-semibold text-base'>
          Youtube Title
          </span>
          <span>
          Level up your content with our AI YouTube Title Generator. Crafting eye-catching titles made easy, boosting views and keeping your audience hooked!          </span>
        </div>
      </div>
          {/* Next */}

          <div onClick={AmazonPT} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'#FF9900'}} className='text-3xl sm:h-6 sm:w-6'>
            <ImAmazon/>
          </span>
          <span className='font-semibold text-base'>
          Amazon Product Title
          </span>
          <span>
          Revolutionize your Amazon listings with our AI-powered Product Title Generator - creating compelling titles that turn clicks into customers.          </span>
        </div>
      </div>
     
      <div onClick={InstagramCap} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'#962fbf'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <AiFillInstagram/>
          </span>
          <span className='font-semibold text-base'>
          Instagram Captions
          </span>
          <span>
          Elevate your Instagram presence with our AI Caption Generator – where every post becomes a story, effortlessly told in captivating lines.          </span>
        </div>
      </div>

      <div onClick={Emails} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'red'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <AiOutlineMail/>
          </span>
          <span className='font-semibold text-base'>
          Email
          </span>
          <span>
          Make your emails stand out in crowded inboxes! Our AI Email Assistant creates compelling messages that engage, ensuring your communications leave a lasting impression.          </span>
            
        </div>
      </div>
      
      <div onClick={Product_Desc} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'#cd1963'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <MdOutlineProductionQuantityLimits/>
          </span>
          <span className='font-semibold text-base'>
          Product Descriptions
          </span>
          <span>
          Elevate your online store! Our AI Product Description Generator creates persuasive and detailed product narratives, turning browsers into confident buyers.          </span>
        </div>
      </div>


      {/* Check Line Scroll bar */}
      <div onClick={Coverletter} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <SlBookOpen/>
          </span>
          <span className='font-semibold text-base'>
          Cover Letter
          </span>
          <span>
          Land your dream job with a cover letter that speaks volumes. Our AI crafting tool tailors each word to your strengths, making your application memorable and impactful.          </span>
        </div>
      </div>
     
      <div onClick={YoutubeDesc} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'red'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <AiFillYoutube/>
          </span>
          <span className='font-semibold text-base'>
          Youtube Descriptions
          </span>
          <span>
          Transform your video descriptions with our AI-powered generator, engaging and SEO-optimized content that boosts your YouTube visibility.          </span>
        </div>
      </div>

      <div onClick={Amazon_prod_desc} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'#FF9900'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <ImAmazon/>
          </span>
          <span className='font-semibold text-base'>
          Amzaon Product Descriptions
          </span>
          <span>
          Enhance your product listings on Amazon with our AI-powered Product Description Generator that convert browsing into buying.          </span>
        </div>
      </div>
      
      <div onClick={Youtube_idea} id='box' className='border border-solid border-gray-300 rounded-lg'>
        <div className='flex flex-col p-3 space-y-3'>
          <span style={{color:'red'}} className='text-blue-600 text-3xl sm:h-6 sm:w-6'>
            <AiFillYoutube/>
          </span>
          <span className='font-semibold text-base'>
          Youtube Ideas
          </span>
          <span>
          Supercharge your content strategy! Our AI generates fresh and exciting YouTube ideas, providing you with a constant stream of inspiration to keep your audience engaged.          </span>
        </div>
      </div>


   </div>

  </div>
</div>
    </>
  )
}
