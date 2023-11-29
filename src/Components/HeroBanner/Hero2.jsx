import React from 'react'
import hero4 from '../../assets/hero4.png'
import vec6 from '../../assets/vec6.png'
import { Link } from 'react-router-dom'

const Hero2 = () => {
  return (
    <div className='flex relative bg-[#bd9d6ecc] h-[36vw]'>
        <div className='flex flex-col w-[44vw] font-fashion font-light 
        text-[4.3vw]  justify-center text-white'>
            <div className='mb-[2vw]'>
            <div className='flex justify-center'>Discover</div> 
            <div className='flex justify-center'>Timeless</div>
            <div className='flex justify-center'>Elegance in</div> 
            <div className='flex justify-center'>Every Stitch</div>
            </div>
            <div className='z-500 absolute lg:left-[28.5vw] left-[28.5vw] xl:left-[28.5vw]
                md:left-[28.5vw] top-[0] w-[30vw]'>
                    <img src={vec6} className='' alt='vector'/>
            </div>
            <div className='flex justify-center'>
            <Link to='Category'>  <button className='bg-[#883D6A] font-playfair text-white  text-[2.2vw] text-slate-900 px-[8vw] py-[1vw]'>
              SHOP NOW
            </button></Link>
            </div>
        </div>
            <div className='z-600'>
                    <img src={hero4} alt='hero' className='w-[56vw] h-[36vw]'/>
            </div>
         </div>
  )
}

export default Hero2