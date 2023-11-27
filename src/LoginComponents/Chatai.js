import React from 'react';
import { FcIdea } from 'react-icons/fc';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiHelp } from 'react-icons/gi';
// import './CSSFolder/chatai.css'

export default function Chatai() {
  return (
    <>
      <div style={{padding:'3ch'}} className='max-w-xl'>
        <div style={{width:'70%', marginLeft:'auto', marginRight:'auto'}} className='flex m-auto flex-row justify-center space-x-3 text-center items-center max-w-2xl'>
            <div className='flex-1'>
            <div style={{textAlign:'center', alignItems:'center'}} className='flex flex-col'>
            <span className='text-3xl'><FcIdea/></span>
            <span className='text-xl'><p>Creativity</p></span>
            </div>
            <ul className="flex flex-1 flex-col space-y-3 gap-3.5 w-">
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
             </ul>
            </div>


            {/* Row 2 */}
            <div className='flex-1'> 
            <div style={{textAlign:'center', alignItems:'center'}} className='flex flex-col'>
            <span className='text-3xl'><FcSalesPerformance/></span>
            <span className='text-xl'><p>Performance</p></span>
            </div>
            {/* <div className='flex flex-col'> */}
            <ul className="flex flex-1 flex-col space-y-3 gap-3.5 w-full sm:max-w-md m-auto">
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
            </ul>
            {/* </div> */}
            </div>


            {/* Row 3 */}
            <div className='flex-1'>
            <div style={{textAlign:'center', alignItems:'center'}} className='flex flex-col'>
            <span style={{color:'#fbc02d'}} className='text-3xl'><GiHelp/></span>
            <span className='text-xl'><p>Limitations</p></span>
            </div>
            {/* <div className='flex flex-col'> */}
            <ul className="flex flex-col space-y-3 gap-3.5 w-full sm:max-w-md m-auto">
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
              <button className='rounded-xl border-2 border-blue-900 p-1'>
              Explain quantum computing in simple terms
              </button>
            </ul>
            {/* </div> */}
            </div>
        </div>
      </div>

      {/* <div id="text-bar">
        Your text goes here
      </div> */}
    </>
  )
}
