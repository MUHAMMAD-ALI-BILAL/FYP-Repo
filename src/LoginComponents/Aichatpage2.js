import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
// import { JwtPayload } from 'jsonwebtoken';/
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {HiOutlinePlusSm} from 'react-icons/hi';
import { Link } from "react-router-dom";
import { HiMailOpen } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { CgMenuGridO } from 'react-icons/cg';
import { ImTwitter } from 'react-icons/im';
import { FaLocationArrow } from 'react-icons/fa';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { SlEnergy } from 'react-icons/sl';
import { BsPencilSquare } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { SiOpenai } from 'react-icons/si';
import Scrollbars from 'react-custom-scrollbars';
import Dropdownprofile from './Components/Dropdownprofile'
import Chatai from './Chatai';
import './CSSFolder/chatpage.css';

export default function Aichatpage() {

  const navigate = useNavigate();
  const [loading, Setloading]         = useState(false);
  const [openProfile, Setopenprofile] = useState(false);
  const [input, Setinput]             = useState("");
  const [maxWords, setMaxWords]       = useState(500);
  const [toneVoice, setTonevoice]     = useState('Professional');
  const [yourName, setyourName]       = useState('');
  const [Recipient, setRecipient]     = useState('');
  const [Company, setCompany]         = useState('');
  const [showInput, setshowInput] = useState(false);
  const [showName, setshowName] = useState(false);
  const [showRecipient, setshowRecipient] = useState(false);
  const [showCompany, setshowCompany] = useState(false);
  const [Tergger, SetTrigger]         = useState(true);
  const [chatLog, SetchatLog]         = useState([]);
   //User Email
   const [userEmail, setUserEmail]    = useState(null)
   //User Name
   const [userName, setUserName]       = useState(null)
   const [userWord, setUserWord] = useState('');



  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!isTokenValid(token)) {
      logout();
    } 
    else {
      const data = localStorage.getItem("token");
      let decodedToken = jwtDecode(data);
      let myVariable = decodedToken.name;
      setUserEmail(decodedToken.email);
      let firstTwoCharacters = myVariable.substring(0, 2);
      setUserName(firstTwoCharacters.toUpperCase());
      // setCharacters(Characters);
    }
  }, []);

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

  function logout() {
    localStorage.removeItem("token");
    // You can replace this with your preferred way of navigating to the login page.
    navigate("/login");
  }
    
  
      const Characters = "AK";

        async function handleSubmit(e){
            e.preventDefault();
            if (yourName.length < 2 || Recipient.length < 2 || Company.length < 2 || input.length < 2) {
              // if either input is empty or has less than 2 characters, show an error message below the corresponding input
              if (yourName.length < 2) {
                setshowName(true);
              }
              if (Recipient.length < 2) {
                setshowRecipient(true);
              }
              if (Company.length < 2) {
                setshowCompany(true);
              }
              if (input.length < 2) {
                setshowInput(true);
              }
              return;
            }

            if( userWord <= 0 )
            {
              navigate('/aichat/usecase')
            }

            else{
            setshowInput(false);
            setshowCompany(false);
            setshowRecipient(false);
            setshowName(false);
            SetTrigger(false);
            Setinput("");
            setCompany("");
            setRecipient("");
            setyourName("");
            Setloading(true);
            let chatLogNew = [...chatLog,{ user: "me", message: `${input}`}]
            // SetchatLog([...chatLog, {user: "me", message: `${input}`}])
            Setinput("");
            SetchatLog(chatLogNew)
          
          const messages = chatLogNew.map((message) => message.message).join("\n")

          try{
            const response = await fetch("http://localhost:9001/chatgpt",{
              method:'POST',
              headers:{
                "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                message  : messages,
                yourName : yourName,
                Recipient:Recipient,
                Company  :Company,
                maxWords : maxWords,
                toneVoice:toneVoice,
                email : userEmail
              })
            });
            const data = await response.json();
            const lines = data.message
            const Resmessage = lines.filter(line => line !== '').join('\n');
            console.log(Resmessage);
            SetchatLog([...chatLogNew, {user: "gpt", message: `${Resmessage}`}]);
            // SetchatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}]);
            // console.log(data.message);
          }catch(error){
            console.log(error)
          } finally {
            Setloading(false);
          }
      }
    }

        // const handleChange = (event) => {
        //   Setinput(event.target.value);
        // };

        function handleMaxWordsChange(event) {
          setMaxWords(event.target.value);
        }

        function handletoneVoice(event){
          setTonevoice(event.target.value);
        }

        function handleName(event){
          setyourName(event.target.value);
          
          if (yourName.length >= 1) {
            setshowName(false);
          }
        }

        function handleRecipient(event){
          setRecipient(event.target.value);
          
          if (Recipient.length >= 1) {
            setshowRecipient(false);
          }
        }

        function handleCompany(event){
          setCompany(event.target.value);

          if (Company.length >= 1) {
            setshowCompany(false);
          }
        }

        function handleReason(event){
          Setinput(event.target.value);

          if (input.length >= 1) {
            setshowInput(false);
          }
        }

        function clearChats(){
          SetchatLog([]);
          SetTrigger(true);
          setMaxWords(200);
          Setinput("");
          setyourName("");
          setCompany("");
          setRecipient("");
          setTonevoice('Professional')
          Setloading(false);
        }


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
              console.log("Words from backend :",response.data.words)
              setUserWord(response.data.words);
              console.log("words from frontend: ",userWord)
            })
            .catch((error) => {
              // Handle errors here
              console.error("Error:", error);
            });
          }
        }, []);

        // function logout() {
        //   localStorage.removeItem("token");
        //   window.location.href = "/login";
        // }

        // function isTokenValid(token) {
        //   if (!token) {
        //     return false;
        //   }
        
        //   try {
        //     const decoded = jwtDecode(token);
        //     if (decoded.exp * 1000 < Date.now()) {
        //       return false;
        //     }
        //     return true;
        //   } catch (error) {
        //     return false;
        //   }
        // }
        

        function Blogs(){
          navigate("/aichat/blogs")
        }
        function Email(){
          navigate("/aichat/email")
        }
        function Twitter(){
          navigate("/aichat/tweet")
        }
        function Growth(){
          navigate("/aichat/growth")
        }

        document.addEventListener('DOMContentLoaded', () => {
          const automateLink = document.getElementById('automate');
          const showElement = document.getElementById('show');
        
          automateLink.addEventListener('mouseenter', () => {
            showElement.classList.add('show');
          });
        
          automateLink.addEventListener('mouseleave', () => {
            showElement.classList.remove('show');
          });
        });

  return (
    <>
    <div className='flex flex-row'>
      <div id='flex1' className='w-2/5 bg-slate-900 min-h-screen mb-6'>
      <Scrollbars id="white-scrollbar" autoHide autoHeightMax={200} style={{overflowX: "hidden"}}>

        <div onClick={clearChats} id='flex1_link' className='mt-6'>
          <Link id='flex1_btn' className='flex space-x-2 rounded-lg items-center'>
          <span className="text-xl text-white">
            <HiOutlinePlusSm/>
          </span>
            <button className='text-white bg-blue-700'>New Chat</button>
          </Link>
        </div>
 

        <div id='span_text' className='text-white rounded-lg mx-auto border-dashed	mt-6 text-center'>
        <span style={{color:'blue'}}><BsChatRightDotsFill/></span> <span className='font-semibold text-blue-800'>Note:</span>  At <span className='font-semibold'>Tustify</span>, we are dedicated to advancing the field of AI and making it accessible to everyone
        </div>

      <div className='mt-6'>
        {/* <button onClick={Blogs} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <BsFacebook/>
                  </span>
                </div>
              </div>
                  <div className='text-white'>
                    Blog Idea & Outline
                  </div>
            </button>

            <button onClick={Email} style={{backgroundColor:'#1d4ed8'}} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <MdEmail/>
                  </span>
                </div>
              </div>
                  <div style={{paddingRight:'55px'}} className='text-white'>
                    Cold Emails
                  </div>
            </button>

            <button onClick={Twitter} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <ImTwitter/>
                  </span>
                </div>
              </div>
                  <div style={{paddingRight:'13px'}} className='text-white'>
                    Tweet Generator
                  </div>
            </button>

            <button onClick={Growth} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <FaLocationArrow/>
                  </span>
                </div>
              </div>
                  <div style={{paddingRight:'40px'}} className='text-white'>
                    Growth Ideas
                  </div>
            </button> */}
  <div>
              <div className='space-y-5'>
              <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} className='flex flex-col'>
              <label className='text-white'>Your name</label>
              <input className='rounded-lg' style={{padding:'0.7ch'}} value={yourName} onChange={handleName} placeholder='Brock'></input>
              {showName && 
              <div className='text-sm' style={{color:'red'}}>Name must have at least 2 characters</div>
              }
              </div>

              <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} className='flex flex-col'>
              <label className='text-white'>Recipient's name</label>
              <input className='rounded-lg' style={{padding:'0.7ch'}} value={Recipient} onChange={handleRecipient} placeholder='Robert'></input>
              {showRecipient && 
              <div className='text-sm' style={{color:'red'}}>Recipient must have at least 2 characters</div>
              }
              </div>

              <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} className='flex flex-col'>
              <label className='text-white'>Company name</label>
              <input className='rounded-lg' style={{padding:'0.7ch'}} value={Company} onChange={handleCompany} placeholder='Tustify'></input>
              {showCompany && 
              <div className='text-sm' style={{color:'red'}}>Comapny must have at least 2 characters</div>
              }
              </div>

              <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} className='flex flex-col'>
              <label className='text-white'>The reason for the appeal</label>
              <textarea className='rounded-lg' style={{padding:'0.7ch'}} value={input} onChange={handleReason} placeholder='AI Tool Use cases...'></textarea>
              {showInput && 
              <div className='text-sm' style={{color:'red'}}>Reason must have at least 2 characters</div>
              }
              </div>

          <div>
            <div style={{width:'90%', marginLeft:'auto', marginRight:'auto'}} className='flex flex-row space-x-7'>
              <div className='flex flex-col'> 
                <label className='text-white'>Tone of voice</label>
                <select className='rounded-lg' value={toneVoice} style={{padding:'0.9ch', backgroundColor:'white'}} onChange={handletoneVoice}>
                  <option style={{padding:'1ch'}}>Professional</option>
                  <option style={{padding:'1ch'}}>Friendly</option>
                  <option style={{padding:'1ch'}}>Informative</option>
                  <option style={{padding:'1ch'}}>Supportive</option>
                  <option style={{padding:'1ch'}}>Trusting</option>
                </select>
              </div>

              <div style={{width:'100%'}}> 
                <div className='flex flex-col'>
                <label className='text-white'>Tone of voice</label>
                <select className='rounded-lg' value={maxWords} style={{padding:'0.9ch', backgroundColor:'white'}} onChange={handleMaxWordsChange}>
                  <option style={{padding:'1ch'}}>200</option>
                  <option style={{padding:'1ch'}}>150</option>
                  <option style={{padding:'1ch'}}>250</option>
                  <option style={{padding:'1ch'}}>300</option>
                  <option style={{padding:'1ch'}}>350</option>
                  <option style={{padding:'1ch'}}>350+</option>
                </select>
                </div> 
              </div>
            </div>
          </div>

          <div className='mb-6' style={{display: 'flex', justifyContent: 'center', marginBottom:'30px'}}>
        {/* <div className='rounded-lg' style={{backgroundColor:'blue', width:'50%', textAlign:'center'}}> */}
        <button className='rounded-lg p-2' onClick={handleSubmit} style={{color:'white',backgroundColor:'blue', width:'50%', textAlign:'center'}}>Generate</button>
        {/* </div> */}
          </div>

              </div>
            </div>

          

          </div>
          </Scrollbars>
      </div>

      <div style={{}} className='w-full bg-stone-300 min-h-screen'>
          <div id='flex2' style={{}} className='flex items-center justify-between bg-white border border-blue-500'>
            {/* <div className='items-center space-x-1 ' style={{paddingLeft:'4ch', display:'flex'}}>
                 <span className='font-bold text-3xl	'> Get Started </span>
                 <span className='font-bold text-2xl ' style={{color:'blue'}}><SlEnergy/></span>
            </div> */}
  <Link id='automate' className='bg-white flex-row'>
        <div style={{marginLeft:'3ch'}} className='flex flex-row space-x-2 items-center'>
          <div style={{padding:'0.7ch'}} className='border border-blue-500 rounded-lg'>
          <span id='color' style={{color: '#105d7b'}} className='items-center text-2xl'> <HiMailOpen/> </span>
          </div>

           <div className=''>
            <div className='flex flex-row'>
          <span className='text-2xl font-sm'>
          <p>Cold Email</p>
          </span>

          <span id='show' className='items-center flex text-xl'>
            <p><CgMenuGridO/></p>
          </span>
            </div>
         <span>
          <p>AI tool generates cold emails on user-defined parameters.</p>
         </span>
          </div> 
        </div>
</Link>

            <div id="dropdown-btn" style={{paddingRight:'4ch'}}>
                  <span className='text-white text-base items-center ' onClick={() => Setopenprofile(prevState => !prevState)} style={{backgroundColor:'blue', padding:'1ch', borderRadius:'70%', cursor:'pointer'}}>
                    {userName}
                  </span>
                 {openProfile && <Dropdownprofile/> }
            </div>
          </div>

          {/* ReGenerating */}

      {/* <div className='bg-white'>
        <div style={{padding:'3ch', marginLeft:'10ch'}} className='flex flex-row space-x-2 items-center'>
          <div style={{padding:'0.7ch'}} className='border border-blue-500 rounded-lg'>
          <span className='items-center text-blue-600 text-4xl'> <MdEmail/> </span>
          </div>

          <div className=''>
          <span className='text-3xl font-sm'>
          <p>Cold Mails</p>
          </span>
          <span>
            <p>A valuable tool for Writting mails for businesses and organizations</p>
          </span>
          </div>
        </div>
      </div> */}


{/* Loading */}

      {loading === false ?
        <div className='bg-white items-center justify-center'>
      <div className='flex flex-row items-center justify-center'>
    <div>
    <div style={{backgroundColor:'#d0fae5', padding:'1ch', color:'blue'}}>
    <p>Ready to Genertate</p>
  </div>
  </div>

<div>
  <div>
      <div style={{backgroundColor:'#d0fae5',color:'blue', padding:'1.13ch'}} className='text-lg'>
      <span>  <BsPencilSquare/> </span>
      </div>
    </div>
</div>
</div>
    </div> 
        : 
        <div className='bg-white items-center justify-center'>
      <div className='flex flex-row items-center justify-center'>
        <div>
        <button style={{backgroundColor:'#1d4ed8', padding:'1ch', color:'white'}}>
        <p>Generating the Text</p>
      </button>
      </div>
    
    <div>
      <div>
          <button style={{backgroundColor:'#1d4ed8',color:'blue', padding:'1.1ch'}} className='text-lg'>
          <div id="loading">
          <div id="loading-spinner"></div>
          </div>
          {/* <span>  <BsPencilSquare/> </span> */}
          </button>
        </div>
    </div>
    </div>
    </div>
    }
{/* Loading End */}

    {/* <div id='chat-log'>
      <div id='chat-message' className='flex flex-row space-x-7 items-center'>
        <div id='avatar' className='text-white text-base items-center'>
            AL
        </div>

        <div id='message'>
          Hello my Name is  Ali Bilal and i am in University Every thing is finrne Here and i can see you on the next daty
          Wher you can be happy with your new friends and we will miss you  very much here
        </div>

      </div>
    </div> */}

      {/* <div> */}
 {/* <Chatai/>
    </div> */}
    { Tergger ? <Chatai/> :   
     

<Scrollbars autoHide style={{height: "79vh", overflowX: "hidden"}}>
    {chatLog.map((message, index) => {
      return(
        <ChatMessage key={index} message={message} Characters={Characters}/>
      )
      })}

    </Scrollbars>
}

    {/* <div id='chat-log-chtagpt'>
      <div id='chat-message' className='flex flex-row space-x-7 items-center'>
        <div id='avatar-chatgpt' className='text-white text-lg items-center'>
            <SiOpenai/>
        </div>

        <div id='message'>
        I am An AI
        </div>
        
      </div>
    </div> */}
     
  </div>
</div>
    </>
  )
}

const ChatMessage = ({ message,Characters }) => {
  return (
    <div id={`${message.user === "gpt" ? "chat-log-chtagpt" : "chat-log"}`}>
    <div id='chat-message' className='flex flex-row space-x-7 items-center'>
      <div id={`${message.user === "gpt" ? "avatar-chatgpt" : "avatar"}`} className='text-white items-center'>
          {message.user === "gpt" ? <SiOpenai/> : Characters}
      </div>


      <div id='message'>
          {message.user === "gpt" ? message.message.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          )) : message.message}

      {/* <div id='message'>
      {message.message}
      </div> */}
</div>
    </div>
  </div>
  )
}
