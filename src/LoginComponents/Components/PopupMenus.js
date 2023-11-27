import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { ImBlog } from 'react-icons/im';
import { HiMailOpen } from 'react-icons/hi';
import { FaTwitter } from 'react-icons/fa';
import { SlBookOpen } from 'react-icons/sl';

import './component.css';

  export default function PopupMenus({ onClose }) {
  return (
    <>
     <div className="modal">
        <div className="overlay"></div>

        <div className='modal-content'>
          
          <div id='constainer'>
        <button onClick={''} style={{backgroundColor:'#1d4ed8', width:'25ch'}} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div className=''>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color: '#9d42c9'}} className='flex h-7 w-7 items-center justify-center text-xl sm:h-6 sm:w-6'>
                  <ImBlog/>
                  </span>
                </div>
              </div>
                  <div className='text-white'>
                  Blog PostBot
                  </div>
            </button>

            <button onClick={''} style={{backgroundColor:'#1d4ed8', width:'25ch'}} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div className=''>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span  style={{color: '#105d7b'}} className='flex h-7 w-7 items-center justify-center text-xl sm:h-6 sm:w-6'>
                  <HiMailOpen/>
                  </span>
                </div>
              </div>
                  <div className='text-white'>
                  Cold Email
                  </div>
            </button>            
            </div>


            <div id='constainer1'>
        <button onClick={''} style={{backgroundColor:'#1d4ed8', width:'25ch'}} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div className=''>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'#1da1f2'}} className='flex h-7 w-7 items-center justify-center text-xl sm:h-6 sm:w-6'>
                  <FaTwitter/>
                  </span>
                </div>
              </div>
                  <div className='text-white'>
                  Twitter Tweet
                  </div>
            </button>

            <button onClick={''} style={{backgroundColor:'#1d4ed8', width:'25ch'}} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div className=''>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7  text-blue-600 items-center justify-center text-xl sm:h-6 sm:w-6'>
                  <SlBookOpen/>
                  </span>
                </div>
              </div>
                  <div className='text-white'>
                  Cover Letter
                  </div>
            </button>            
            </div>

            {/* <button onClick={''} style={{backgroundColor:'#1d4ed8'}} id='button_bg' className="mb-3 mx-auto inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div className=''>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <BsFacebook/>
                  </span>
                </div>
              </div>
                  <div className='text-white'>
                    Blog Idea & Outline
                  </div>
            </button> */}
           
          <button 
          onClick={onClose}
          className='close-modal'>
              Close
          </button>
        </div>
      </div> 
    </>
  )
}
