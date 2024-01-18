import React, { useState } from 'react'
import hero1 from '../../assets/hero1.png'
import vec1 from '../../assets/vec1.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
      <div className='flex relative w-full bg-[#F9F8F8] space-between'>
            <div className=' w-[65vw]'>
                    <img src={hero1} alt='hero' className='w-[65vw]'/>
            </div>
            <div className='flex flex-col w-[35vw] '> 
                <div className='font-normal font-fashion text-[#CC911D] text-[5vw] justify-center'>
                    <div className='text-center mt-[2.5vw]'>
                        <div>Top Picks of</div>
                        <div>kalki koechlin</div>
                    </div> 
                </div>
                <div className='absolute  right-[19.8vw]
              md:right-[19.5vw] top-[21.9vw] w-[30vw] sm:right-[17.8vw] z-5'>
  <img src={vec1} className='z-250' alt='vector'/>
</div>

<div className='justify-center z-9'>
  <Link to='/Kalki'>
    <button className='bg-yellow-600 opacity-100
                   font-playfair md:text-[32px] text-[11px] mx-[4.5vw] 
                   mt-[12vw] py-[1vw] rounded-[0.5vw]  w-[25vw] text-white relative z-10'>
      SHOP NOW
    </button>
  </Link>
</div>
            </div> 
         </div>
    )
  }
  
  export default Hero