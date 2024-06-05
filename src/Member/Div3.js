import React from 'react'
import { FaRobot } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { GiArrowCursor } from 'react-icons/gi';
import Typed from "react-typed"
import '../LoginComponents/CSSFolder/NavDiv3.css'


export default function Div3() {

  const textGradientStyle = {
    // background: "-webk)",
    WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
  };

  return (
    <div id='working' className='rounded-3xl space-y-15 border bg-gray-100 py-20 text-gray-900 text-center'>
      <div className='space-y-15'>
        <div className='space-y-7 text-center justify-center items-center'>
          <h2 className='text-2xl font-black !leading-[2.5rem] sm:text-2xl md:text-4xl lg:text-5xl'>How Our AI copywriting Platform Works</h2>
          <p className='text-lg text-center pb-16 sm:text-xl sm:text-center'> See a real-time example of how one of our tools works </p>
        </div>

        <div className='relative justify-center flex items-center'>
          <div className='w-5/6 flex items-center justify-between border px-8 bg-gray-900 py-4 text-white rounded-t-3xl'>
            <div className='relative flex items-center space-x-3'>
              <div className=''>
                <span className='text-4xl text-orange-500'><FaRobot /></span>
              </div>
              <div>
                <p className='text-2xl'>AI Advensiter Writter 1.0</p>
              </div>
            </div>

            <span className='text-sm'>
              Untitled Document
            </span>
          </div>
        </div>

        <div className='relative flex w-5/6 mx-auto rounded-b-lg rounded-br-lg'>
          <div className='space-y-5 p-5 pb-10 bg-gray-200 w-full rounded-bl-lg border-solid border-2 border-x-gray-400 border-b-gray-400 '>
            <div className='text-left space-y-1'>
              <lable className='font-medium text-sm '>
                Description
              </lable>

              <div className='bg-white w-full rounded-lg p-1 pl-3 border-solid border-2 border-indigo-600'>
                <span className='flex items-center space-x-1'>
                  {/* <span className='text-blue-600'>
                    <BsFacebook />
                  </span> */}
                  <span>
                    B was killed by A due to a land conflict.
                  </span>
                </span>
              </div>
            </div>

            <div className='text-left space-y-1'>
              <lable className='font-medium text-sm '>
                Motive
              </lable>
              <div className='bg-white w-full rounded-lg p-1 pl-3 border-solid border-2 border-indigo-600'>
                <span className='flex items-center space-x-1'>
                  <span>
                    Yes / No
                  </span>
                </span>
              </div>
            </div>

            <div className='text-left space-y-1'>
              <lable className='font-medium text-sm '>
                Eyewitness
              </lable>
              <div className='bg-white w-full rounded-lg p-1 pl-3 border-solid border-2 border-indigo-600'>
                <span className='flex items-center space-x-1'>
                  <span>
                    Yes / No
                  </span>
                </span>
              </div>
            </div>



            <div className='text-left space-y-1'>
              <lable className='font-medium text-sm '>
                Evidence
              </lable>
              <div className='bg-white w-full rounded-lg p-1 pl-3 border-solid border-2 border-indigo-600'>
                <span className='flex items-center space-x-1'>
                  <span>
                    Yes / No
                  </span>
                </span>
              </div>
            </div>


            <div className='relative flex'>
              <a className='px-4 uppercase border-solid border-2 border-gray-500 rounded-lg'>
                generate
              </a>

              <div className='absolute flex text-orange-900 transition-all duration-1000 left-[8%] -bottom-8'>
                <span className='i-fluent:cursor-20-filled  h-6 w-6 block'> <GiArrowCursor /> </span>
                <span className='i-fluent:cursor-click-24-filled h-6 w-6 hidden'></span>
                <span className='class="mt-6 -ml-2 rounded-md border border-white bg-orange-900 px-2 py-0.5 -bottom-5 text-white shadow"'>you</span>
              </div>

            </div>



          </div>
          <div className='bg-white text-left p-5 rounded-br-lg  w-full border-solid border-2 border-r-gray-400 border-b-gray-400'>
            {/* <p>Hello</p> */}
            <Typed
              strings={[
                "302",
              ]}
              typeSpeed={300}
              backSpeed={200}
              loop
              style={textGradientStyle}
            />
          </div>
        </div>


        <div id='points' className='pt-16'>
          <div id='line' style={{ display: 'none' }} className="relative w-64 mx-auto border border-solid border-b top-6 left-44"></div>
          <div className='mx-auto sm:w-3/4'>
            <div className='h-10'>
              <ol className='relative z-10 flex justify-between font-medium'>
                <li className='relative flex items-center p-2'>
                  <span className='absolute text-white w-8 h-8 rounded-full bg-orange-600 leading-8 font-bold'>
                    1
                  </span>
                  <span className='text-black ml-10 block'>
                    Choose your use case
                  </span>
                </li>

                <li className='relative flex items-center p-2'>
                  <span className='absolute text-white w-8 h-8 rounded-full bg-orange-600 text-centr leading-8 font-bold'>
                    2
                  </span>
                  <span className='text-black ml-10 block'>
                    Add input
                  </span>
                </li>

                <li className='relative flex items-center p-2'>
                  <span className='absolute text-white w-8 h-8 rounded-full bg-orange-600 text-centr leading-8 font-bold'>
                    3
                  </span>
                  <span className='text-black ml-10 block'>
                    Click to generate
                  </span>
                </li>

              </ol>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
