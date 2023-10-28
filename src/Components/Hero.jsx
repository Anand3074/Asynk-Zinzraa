import React, { useState } from 'react'
import hero1 from '../assets/hero1.png'
import vec1 from '../assets/vec1.png'

const Hero = () => {
  
    
    return (
      <div className='bg-white-off w-100% h-[464px]'>  
        <div className='relative'>
          <img src={hero1} className='absolute w-[813px] w-[464px] z-10 left-0 right-[467px] '/>
          <img src={vec1} className='absolute z-8 align-center  align-center top-[232px] left-[577px]'/> 
         
        </div>
            {/* <div className="w-[373px] h-[180px] mr-[40px] relative">
            Top Picks of kalki koechlin
            </div> */}
      </div>
    )
  }
  
  export default Hero