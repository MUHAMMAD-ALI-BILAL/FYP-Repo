import React from 'react';
import '../LoginComponents/CSSFolder/Div2.css'
import pic1 from '../Pic/bluefort.eu.png';
import pic2 from '../Pic/gardensofthesun.com.webp';
import pic3 from '../Pic/PlanetWatch_logo_new-2.png';
import pic4 from '../Pic/startupbenefits.eu.png';

export default function Div2() {
  return (
    <div className='bg-gray-50 w-full'>
        <div className='space-y-8 py-16 items-center justify-center text-center'>
            <div className='border-b border-dashed pb-5'>
                <h3 className='text-xl'>
                        Over
                    <span className='text-orange-500'> 10,000 </span>
                    content creators from leading businesses have put their trust in us 
                </h3>
            </div>

            <div className='flex flex-wrap justify-center items-center space-x-7 pb-5 border-b border-dashed'>
                <img className='h-12 mb-5' src={pic1} alt="bluefort"></img>
                <img className='h-12 mb-5' src={pic2} alt="bluefort"></img>
                <img className='h-12 mb-5' src={pic3} alt="bluefort"></img>
                <img className='h-12 mb-5' src={pic4} alt="bluefort"></img>
            </div>

            {/* <div className='flex justify-center items-center space-x-2'>
                <span className='font-medium'>Leave us a review on</span>
                <img className='h-4' src={pic3} alt=''></img>
            </div> */}
        <div style={{ backgroundColor: '#f9fafb', paddingTop: '2ch', paddingBottom: '2ch' }}>
            <div id='span' style={{ display: 'flex', alignItems: 'center', padding:'1.5ch', borderRadius:'1.3ch' }}>
            <div style={{marginRight: '2ch' }}></div>
            <div id='borderleft'>
             <span style={{ color: '#dcfc35', marginLeft:'-2ch'}}>Share Tustify</span><br />
             <span style={{ color: '#969479'}}>with your friends</span>
            </div>
            </div>
        </div>

        </div>
    </div>
  )
}
