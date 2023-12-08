import React from 'react'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'
import { Link } from 'react-router-dom'

const Hero1 = () => {
  return (
    <div className='flex w-full flex-row bg-[#EDAF7C] h-[36vw] overflow-hidden'>
        <div className='w-[30vw]'>
            <img src={hero2} alt='' className='w-[30vw] h-[36vw]' />
        </div>
        <div className='flex flex-col w-[40vw] font-fashion  font-light text-[4.7vw]
         justify-center text-[#1E1E1E]'>
            <div className='mb-[2vw]'>
            <div className='flex justify-center'>Drape Yourself</div> 
            <div className='flex justify-center'>in the Colors of </div>
            <div className='flex justify-center'>India.</div> 
            </div>
            <div className='flex justify-center'>
            <Link to='/Kurtas'><button className='bg-white opacity-100
                   font-playfair md:text-[32px] text-[11px] mx-[4.5vw] 
                   mt-[1.5vw] py-[1vw] rounded-[0.5vw]  w-[25vw] text-black 
                   relative z-10'>
              SHOP NOW
            </button>
            </Link>
            </div>
        </div>
        <div className='w-[30vw]'>
            <img src={hero3} alt='' className='w-[30vw] h-[36vw]' />
        </div>
    </div>
  )
}

export default Hero1