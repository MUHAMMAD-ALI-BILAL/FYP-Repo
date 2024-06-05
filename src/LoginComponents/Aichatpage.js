import React, { useState, useEffect, useRef } from 'react';
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";
// import { JwtPayload } from 'jsonwebtoken';/
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from "react-router-dom";
import { ImBlog } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { ImTwitter } from 'react-icons/im';
import { FaLocationArrow } from 'react-icons/fa';
import { BsChatRightDotsFill } from 'react-icons/bs';
import { SlEnergy } from 'react-icons/sl';
import { BsPencilSquare } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { SiOpenai } from 'react-icons/si';
import { CgMenuGridO } from 'react-icons/cg';
import Scrollbars from 'react-custom-scrollbars';
import Chatai from './Chatai';
import PopupMenus from './Components/PopupMenus';
import Dropdownprofile from './Components/Dropdownprofile'
import './CSSFolder/chatpage.css';
import './CSSFolder/usecase.css';

export default function Aichatpage() {

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [loading, Setloading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [openProfile, Setopenprofile] = useState(false);
  const [showInput, setshowInput] = useState(false);
  const [showKeyboard, setshowKeyboard] = useState(false);

  const [description, SetDescription] = useState('');
  const [motive, setMotive] = useState('');
  const [eyewitnesses, setEyewitnesses] = useState('');
  const [evidence, setEvidence] = useState('');
  const [prediction, setPrediction] = useState('');
  const [sectionDescription, setSectionDescription] = useState('');

  const [maxWords, setMaxWords] = useState(500);
  const [toneVoice, setTonevoice] = useState('Professional');
  // const [Characters, setCharacters] = useState("");
  const [Tergger, SetTrigger] = useState(true);
  // const [remainingHeight, setRemainingHeight] = useState(window.innerHeight);
  const [chatLog, SetchatLog] = useState([]);
  //User Email
  const [userEmail, setUserEmail] = useState(null)
  //User Name
  const [userName, setUserName] = useState(null)
  const [userWord, setUserWord] = useState('');


  const Characters = "AK";

  async function handleSubmit(e) {
    e.preventDefault();

    if (description.length < 1 || eyewitnesses.length < 1) {
      if (description.length < 1) {
        setshowInput(true);
      }
      if (eyewitnesses.length < 1) {
        setshowKeyboard(true);
      }
      return;
    } else {
      setshowKeyboard(false);
      setshowInput(false);
      SetTrigger(false);
      setTimeout(() => {
        Setloading(true);
      }, 5000);

      try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            case_description: description,
            motive: motive,
            eyewitnesses: eyewitnesses,
            evidence: evidence
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const userMessage = {
          user: 'me',
          message: description,
        };

        const newMessage = {
          user: 'gpt',
          message: `Predicted Section: ${data.predicted_section}\nSection Description: ${data.section_description}`,
          predictedSection: data.predicted_section,
          sectionDescription: data.section_description,
        };

        const chatLogNew = [...chatLog, userMessage];
        SetchatLog(chatLogNew);
        setTimeout(() => {
          Setloading(true);
        }, 5000);
        setTimeout(() => {
          const chatLogUpdated = [...chatLogNew, newMessage];
          SetchatLog(chatLogUpdated);
          SetDescription("");
          setMotive("");
          setEyewitnesses("");
          setEvidence("");
          Setloading(false);
        }, 6000);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      } finally {
        Setloading(false);
      }
    }
  }
  

  const handleMenuToggle = () => {
    setShowMenu(true);
  };

  const handleCloseModal = () => {
    setShowMenu(false);
  };

  const handleChange1 = (event) => {

    setMotive(event.target.value);
    if (motive.length >= 1) {
      setshowInput(false);
    }
  };

  const handleChange2 = (event) => {
    SetDescription(event.target.value);

    if (description.length >= 1) {
      setshowKeyboard(false);
    }
  };

  const handleChange3 = (event) => {
    setEyewitnesses(event.target.value);

    if (eyewitnesses.length >= 1) {
      setshowKeyboard(false);
    }
  };

  const handleChange4 = (event) => {
    setEvidence(event.target.value);

    if (evidence.length >= 1) {
      setshowKeyboard(false);
    }
  };

  function handleMaxWordsChange(event) {
    setMaxWords(event.target.value);
  }

  function handletoneVoice(event) {
    setTonevoice(event.target.value);
  }

  function clearChats() {
    SetchatLog([]);
    SetTrigger(true);
    //Setinput("");
    SetDescription("");
    //Setloading(false);
    setMaxWords(500);
    setTonevoice('Professional');
  }




  // document.addEventListener('DOMContentLoaded', () => {
  //   const automateLink = document.getElementById('automate');
  //   const showElement = document.getElementById('show');

  //   automateLink.addEventListener('mouseenter', () => {
  //     showElement.classList.add('show');
  //   });

  //   automateLink.addEventListener('mouseleave', () => {
  //     showElement.classList.remove('show');
  //   });
  // });

  return (
    <>
      <div style={{}} className='flex flex-row max-h-screen'>
        <div id='flex1' style={{}} className='w-2/5 bg-slate-900 max-h-screen'>

          <div onClick={clearChats} id='flex1_link' className='mt-6'>
            <Link id='flex1_btn' className='flex space-x-2 rounded-lg items-center'>
              <span className="text-xl text-white">
                <HiOutlinePlusSm />
              </span>
              <button className='text-white bg-blue-700'>New Chat</button>
            </Link>
          </div>


          <div id='span_text' className='text-white rounded-lg mx-auto border-dashed	mt-6 text-center'>
            <span style={{ color: 'blue' }}><BsChatRightDotsFill /></span> <span className='font-semibold text-blue-800'>Note:</span> Predicting Judicial Decision from Cases
          </div>

          <div className='mt-6'>

            <div>
              <div className='space-y-5'>


                <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} className='flex flex-col'>
                  <label className='text-white'>Description</label>
                  <textarea value={description} onChange={handleChange2} className='rounded-lg' style={{ padding: '0.7ch' }} placeholder='Case Description...'></textarea>
                  {showKeyboard &&
                    <div className='text-sm' style={{ color: 'red' }}>descriptions must have at least 2 characters</div>
                  }
                </div>

                <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} className='flex flex-col'>
                  <label className='text-white'>Motive</label>
                  <input name='topic' value={motive} onChange={handleChange1} className='rounded-lg' style={{ padding: '0.7ch' }} placeholder='Yes / No'></input>
                  {showInput &&
                    <div className='text-sm' style={{ color: 'red' }}>Topic must have at least 2 characters</div>
                  }
                </div>

                <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} className='flex flex-col'>
                  <label className='text-white'>Eyewitness</label>
                  <input name='topic' value={eyewitnesses} onChange={handleChange3} className='rounded-lg' style={{ padding: '0.7ch' }} placeholder='Yes / No'></input>
                  {showInput &&
                    <div className='text-sm' style={{ color: 'red' }}>Topic must have at least 2 characters</div>
                  }
                </div>

                <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} className='flex flex-col'>
                  <label className='text-white'>Evidence</label>
                  <input name='topic' value={evidence} onChange={handleChange4} className='rounded-lg' style={{ padding: '0.7ch' }} placeholder='Yes / No'></input>
                  {showInput &&
                    <div className='text-sm' style={{ color: 'red' }}>Topic must have at least 2 characters</div>
                  }
                </div>



                {/* <div>
                  <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }} className='flex flex-row space-x-7'>
                    <div className='flex flex-col'>
                      <label className='text-white'>Tone of voice</label>
                      <select className='rounded-lg' value={toneVoice} style={{ padding: '0.9ch', backgroundColor: 'white' }} onChange={handletoneVoice}>
                        <option style={{ padding: '1ch' }}>Professional</option>
                        <option style={{ padding: '1ch' }}>Friendly</option>
                        <option style={{ padding: '1ch' }}>Informative</option>
                        <option style={{ padding: '1ch' }}>Supportive</option>
                        <option style={{ padding: '1ch' }}>Trusting</option>
                      </select>
                    </div>

                    <div style={{ width: '100%' }}>
                      <div className='flex flex-col'>
                        <label className='text-white'>Maximum words</label>
                        <select className='rounded-lg' value={maxWords} style={{ padding: '0.9ch', backgroundColor: 'white' }} onChange={handleMaxWordsChange}>
                          <option style={{ padding: '1ch' }}>500</option>
                          <option style={{ padding: '1ch' }}>400</option>
                          <option style={{ padding: '1ch' }}>300</option>
                          <option style={{ padding: '1ch' }}>200</option>
                          <option style={{ padding: '1ch' }}>100</option>
                          <option style={{ padding: '1ch' }}>500+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* <div className='rounded-lg' style={{backgroundColor:'blue', width:'50%', textAlign:'center'}}> */}
                  <button className='rounded-lg p-2' onClick={handleSubmit} style={{ color: 'white', backgroundColor: 'blue', width: '50%', textAlign: 'center' }}>Generate</button>
                  {/* </div> */}
                </div>
                {prediction !== '' && sectionDescription !== '' && (
        <div>
          <h2>Predicted Section: {prediction}</h2>
          <p>Section Description: {sectionDescription}</p>
        </div>
      )}

              </div>
            </div>



          </div>

        </div>

        <div style={{}} className='w-full bg-stone-300 min-h-screen'>
          <div id='flex2' style={{}} className='flex items-center justify-between bg-white border border-blue-500'>

            <Link id='automate' onClick={handleMenuToggle} className='bg-white flex-row'>
              <div style={{ marginLeft: '3ch' }} className='flex flex-row space-x-2 items-center'>
                {/* <div style={{ padding: '0.7ch' }} className='border border-blue-500 rounded-lg'>
                  <span id='color' style={{ color: '#9d42c9' }} className='text-blue-600 items-center text-2xl'> <ImBlog /> </span>
                </div> */}

                <div className=''>
                  <div className='flex flex-row'>
                    <span className='text-2xl font-sm'>
                      <p>Predicting Judicial Decisions</p>
                    </span>

                    {/* <span id='show' className='items-center flex text-xl'>
                      <p><CgMenuGridO /></p>
                    </span> */}
                  </div>
                  <span>
                    <p>AI tool generates blog posts on user-defined parameters.</p>
                  </span>
                </div>
              </div>
            </Link>

            <div id="dropdown-btn" style={{ paddingRight: '4ch' }}>
              <span className='text-white text-base items-center ' onClick={() => Setopenprofile(prevState => !prevState)} style={{ backgroundColor: 'blue', padding: '1ch', borderRadius: '70%', cursor: 'pointer' }}>
                {userName}
              </span>
              {openProfile && <Dropdownprofile />}
            </div>
          </div>


          {showMenu &&
            <PopupMenus onClose={handleCloseModal} />
          }
          {/* </div> */}

          {loading === false ?
            <div className='bg-white items-center justify-center'>
              <div className='flex flex-row items-center justify-center'>
                <div>
                  <div style={{ backgroundColor: '#d0fae5', padding: '1ch', color: 'blue' }}>
                    <p>Ready to Genertate</p>
                  </div>
                </div>

                <div>
                  <div>
                    <div style={{ backgroundColor: '#d0fae5', color: 'blue', padding: '1.13ch' }} className='text-lg'>
                      <span>  <BsPencilSquare /> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='bg-white items-center justify-center'>
              <div className='flex flex-row items-center justify-center'>
                <div>
                  <button style={{ backgroundColor: '#1d4ed8', padding: '1ch', color: 'white' }}>
                    <p>Generating the Text</p>
                  </button>
                </div>

                <div>
                  <div>
                    <button style={{ backgroundColor: '#1d4ed8', color: 'blue', padding: '1.1ch' }} className='text-lg'>
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

          {Tergger ? <Chatai /> :


<Scrollbars autoHide style={{ height: "79vh", overflowX: "hidden" }}>
{chatLog.map((message, index) => {
  return (
    <ChatMessage
      key={index}
      message={message}
      Characters={Characters}
      predictedSection={message.predictedSection} // Pass predictedSection from message
      sectionDescription={message.sectionDescription} // Pass sectionDescription from message
    />
  );
})}
</Scrollbars>

          }


        </div>
      </div>
    </>
  )
}

const ChatMessage = ({ message, Characters, predictedSection, sectionDescription }) => {
  return (
    <div id={`${message.user === "gpt" ? "chat-log-chtagpt" : "chat-log"}`}>
      <div id='chat-message' className='flex flex-row space-x-7 items-center'>
        <div id={`${message.user === "gpt" ? "avatar-chatgpt" : "avatar"}`} className='text-white items-center'>
          {message.user === "gpt" ? <SiOpenai /> : Characters}
        </div>
          
        <div id='message'>
          {message.user === "gpt" ? message.message.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          )) : (
            <div>
              <p>{message.message}</p>
              {predictedSection && sectionDescription && (
                <div>
                  <p>Predicted Section: {predictedSection}</p>
                  <p>Section Description: {sectionDescription}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

