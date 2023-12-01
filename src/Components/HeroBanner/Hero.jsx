import React, { useState } from 'react'
import hero1 from '../../assets/hero1.png'
import vec1 from '../../assets/vec1.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
      <div className='flex relative  w-[98vw] space-between'>
            <div className=' '>
            <div className='z-300 '>
                    <img src={hero1} alt='hero' className='w-[65vw]'/>
            </div>

            </div>
            <div className='flex flex-col w-1/3 '> 
                <div className='font-normal font-fashion text-[#CC911D] text-[5vw] justify-center'>
                    <div className='text-center mt-[2.5vw]'>
                        <div>Top Picks of</div>
                        <div>kalki koechlin</div>
                    </div> 
                </div>
                <div className='z-250 absolute lg:right-[19.9vw] right-[19.8vw] xl:left-[50vw]
                md:right-[18.5vw] top-[22.4vw] w-[30vw] sm:right-[17.8vw] z-3'>
                    <img src={vec1} className='' alt='vector'/>
                </div>
                <div className='justify-center z-550'>
                    <Link to='/Dresses'><button className='bg-[#cc911dcc]
                     font-playfair md:text-[32px] text-[11px] mx-[1.8vw] 
                     mt-[12vw] py-[1vw]  w-[30vw] text-white '>
                        {/* md:px-[116px] md:py-[16.5px] */}
                        SHOP NOW
                    </button></Link>
                </div>
            </div> 
         </div>
    )
  }
  
  export default Hero