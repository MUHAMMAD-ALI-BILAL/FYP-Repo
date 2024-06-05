import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import '../LoginComponents/CSSFolder/Div2.css'
import Typed from "react-typed"


export default function Div() {
  const navigate = useNavigate();

  const textGradientStyle = {
    background: "-webkit-linear-gradient(90deg, #47beb9, #ddcd86)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  // bg-slate-900
  return (
    <div className='bg-slate-900 relative w-full text-center py-28 rounded-br-lg rounded-bl-lg'>

      <div className='space-y-8'>
        <h1 className='text-2xl font-semibold text-white sm:text-3xl md:text-4xl md:!leading-[3.5rem] lg:text-5xl xl:text-6xl'>
          Your AI-Powered Advisor for Crafting
          <br />
          <div className='py-8'>

            <Typed
              strings={[
                "Precise Answers",
                // "Instagram Caption",
                // "Twitter Tweet",
                // "Facebook Ads",
                // "Content Writter",
                // "Artifical Intelligence",
              ]}
              typeSpeed={100}
              backSpeed={200}
              loop
              style={textGradientStyle}
            />
            {/* <Typical loop={Infinity} 
                   
                   wrapper="p"
                   st
                   steps={[ 
                    'Blogs',
                   2500,

                   'Youtuber',
                   2500,

                   'Web Developer',
                   2500,

                   'Blockchain',
                   2500,

                   'Artifical Intelligence',
                   3500,
                  ]} />  */}
          </div>
        </h1>
        {/* <p className='mx-auto text-gray-400 sm:text-sm md:text-lg lg:text-xl w-1/2'>With Tustify, you can create compelling and informative content 
            <span>10X faster</span> and more efficiently</p> */}
      </div>

      <div className='mt-16 text-white'>
        {/* <div className=''> */}
        {/* <strong className='text-2xl'>Free forever</strong> */}
        {/* <p className='font-medium'>2,000 words per month</p> */}
        {/* </div> */}
      </div>

      <div className='relative flex text-white items-center justify-center space-x-3 py-4'>
        {/* <a href=''>
              <button className='inline-flex items-center bg-white text-slate-900 font-semibold px-6 py-2 rounded-full'>
                <span className='inline-block text-[1rem]'><FcGoogle/></span>
                <span>Start Free With Google</span>
              </button>
              </a>

              <div>
                <span className='text-gray-600 font-medium items-center'> or </span>
              </div> */}

        <a>
          <button id='DivStartBtn' onClick={() => navigate('/register')} className='inline-flex items-center text-4xl text-white-900 font-medium px-6 py-1 rounded-full'>
            <span className='inline-block text-[1rem]'>Start Free With Email</span>
            <span className='text-xl'><AiOutlineArrowRight /></span>
          </button>
        </a>


      </div>

      {/* <div className='font-medium text-gray-600'>
        No credit card required
      </div> */}


    </div>
  )
}
