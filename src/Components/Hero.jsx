import React, { useState } from 'react'
import hero1 from '../assets/hero1.png'
import vec1 from '../assets/vec1.png'

const Hero = () => {
  
    
    return (
      <div className='flex w-full  space-between'>
            <div className='w-2/3 '>
            <div className='z-10 w-80vw'>
                    <img src={hero1} alt='hero' className='w-[65vw]'/>
            </div>

            </div>
            <div className='flex flex-col w-1/3 '> 
                <div className='font-normal font-Fashion text-[#CC911D] md:text-[64px] justify-center'>
                    <div className='text-center'>
                        <p >Top Picks of</p>
                        <p>kalki koechlin</p>
                    </div> 
                </div>
                <div className='z-4 relative'>
                    <img src={vec1} className='' alt='vector'/>
                </div>
                <div className=' relative justify-center z-10'>
                    <button className='bg-gold-pi font-playfair md:text-[32px] md:px-[116px] md:py-[16.5px] text-white '>
                        SHOP NOW
                    </button>
                </div>
            </div> 
         </div>
    )
  }
  
  export default Hero