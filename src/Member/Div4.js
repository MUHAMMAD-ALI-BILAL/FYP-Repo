import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { ImBlog } from 'react-icons/im';
import { HiMailOpen } from 'react-icons/hi';
import { FaTwitter } from 'react-icons/fa';
import { SlBookOpen } from 'react-icons/sl';
import { AiFillInstagram } from 'react-icons/ai';
// import { AiFillYoutube } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { ImAmazon } from 'react-icons/im';
import { useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import '../LoginComponents/CSSFolder/Div4.css';

export default function Div4() {
  const navigate = useNavigate();

  function UserReg(){
    navigate('/register')
  }
  return (
    <div id='services' className='my-24 text-white'>
        <div className='space-y-14 container rounded-3xl bg-usecase bg-cover bg-gray-900 py-16 p-3'>

            <div className='mx-auto space-y-3 text-center sm:w-3/4'>
              <h2 className='text-3xl font-black !leading-[2.5rem] sm:!leading-[3.5rem] md:text-4xl lg:text-5xl lg:!leading-[4.5rem] xl:!leading-[5.5rem]'>
              What fantastic content can Tustify write? 
              </h2>
              <p className='text-lg sm:text-xl'>
              Our AI has been trained to write high-performing copy that resonates with your audience.              
              </p>
            </div>

  <div>
    <div id='main-grid'>

          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color: '#9d42c9'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <ImBlog/>
                  </span>
                </div>
              </div>
                  <div>
                  Blog PostBot
                  </div>
            </a>
          </div>


          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color: '#105d7b'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <HiMailOpen/>
                  </span>
                </div>
              </div>
                  <div>
                  Cold Email
                  </div>
            </a>
          </div>


          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'#1da1f2'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <FaTwitter/>
                  </span>
                </div>
              </div>
                  <div>
                  Twitter Tweet
                  </div>
            </a>
          </div>


          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <SlBookOpen/>
                  </span>
                </div>
              </div>
                  <div>
                  Cover Letter
                  </div>
            </a>
          </div>


          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'#962fbf'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <AiFillInstagram/>
                  </span>
                </div>
              </div>
                  <div>
                  Instagram Captions
                  </div>
            </a>
          </div>


          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span  style={{color:'red'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <AiFillYoutube/>
                  </span>
                </div>
              </div>
                  <div>
                  Youtube Title
                  </div>
            </a>
          </div>


          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span  style={{color:'red'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <AiFillYoutube/>
                  </span>
                </div>
              </div>
                  <div>
                  Youtube Descriptions
                  </div>
            </a>
          </div>



          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span  style={{color:'red'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <AiFillYoutube/>
                  </span>
                </div>
              </div>
                  <div>
                  Youtube Ideas
                  </div>
            </a>
          </div>



          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'#FF9900'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <ImAmazon/>
                  </span>
                </div>
              </div>
                  <div>
                  Amzaon Product Descriptions
                  </div>
            </a>
          </div>



          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'#FF9900'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <ImAmazon/>
                  </span>
                </div>
              </div>
                  <div>
                  Amzaon Product Title
                  </div>
            </a>
          </div>



          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'#cd1963'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <MdOutlineProductionQuantityLimits/>
                  </span>
                </div>
              </div>
                  <div>
                  Product Descriptions
                  </div>
            </a>
          </div>





          <div>
            <a id='toolBox' onClick={UserReg} className="mb-3 inline-flex w-full items-center space-x-3 rounded-xl border border-primary-50/25 p-1.5 transition hover:border-primary-50/10 hover:bg-primary-50/10 sm:mb-5 sm:mr-3 sm:w-auto sm:p-2.5">
              <div>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-white text-secondary-1000 sm:h-10 sm:w-10'>
                  <span style={{color:'red'}} className='flex h-7 w-7 items-center justify-center text-blue-600 text-xl sm:h-6 sm:w-6'>
                  <AiOutlineMail/>
                  </span>
                </div>
              </div>
                  <div>
                  Emails
                  </div>
            </a>
          </div>



    </div>
  </div>


<div className='mx-auto space-y-5 text-center sm:w-3/4'>
  <h3 className='text-3xl font-semibold'>
      Over 32 Powerful tools
  </h3>
  <p className='mx-auto lg:w-3/4 2xl:w-1/2'>
  Create well-written, engaging content for various platforms, including articles, blog posts, landing pages, and social media content. 
  </p>

  <div>
    <a onClick={UserReg}>
      <button type='submit' className='inline-flex items-center text-xs uppercase tracking-wider ring-offset-1 transition focus:outline-none enabled:focus:ring disabled:opacity-75 bg-orange-500 hover:bg-orange-400 active:bg-secondary-800 active:ring-secondary-800 ring-orange-500 focus:border-secondary-800 focus:ring-secondary-800 text-white px-6 py-3 font-semibold rounded-lg'>
        Get Started for Free
      </button>
    </a>
  </div>

</div>

        </div>

    </div>
  )
}
