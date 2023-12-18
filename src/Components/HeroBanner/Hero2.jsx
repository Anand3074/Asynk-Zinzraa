import React from 'react'
import hero4 from '../../assets/hero4.png'
import vec6 from '../../assets/vec6.png'
import { Link } from 'react-router-dom'

const Hero2 = () => {
  return (
    <div className='flex  w-full relative bg-[#bd9d6ecc] h-[36vw]'>
        <div className='flex flex-col w-[45vw] font-fashion font-light 
        text-[4vw]  justify-center text-white flex-grow-1'>
            <div className='mb-[2vw]'>
            <div className='flex justify-center'>Discover</div> 
            <div className='flex justify-center'>Timeless</div>
            <div className='flex justify-center'>Elegance in</div> 
            <div className='flex justify-center'>Every Stitch</div>
            </div>
            <div className='z-500 absolute lg:left-[29vw] left-[29vw] xl:left-[29vw]
                md:left-[29vw] top-[0] w-[30vw] '>
                    <img src={vec6} className='' alt='vector'/>
            </div>
            <div className='flex justify-center'>
            <Link to='Westrend'>  <button className='bg-[#883D6A] font-playfair 
            opacity-100
            font-playfair md:text-[32px] text-[11px] mx-[4.5vw] 
            mb-[3.5vw] py-[1vw] rounded-[0.5vw]  w-[25vw] text-white 
            relative z-10'>
              SHOP NOW
            </button></Link>
            </div>
        </div>
            <div className='w-[55vw]'>
                    <img src={hero4} alt='hero' className='w-[55vw] h-[36vw] '/>
            </div>
         </div>
  )
}

export default Hero2