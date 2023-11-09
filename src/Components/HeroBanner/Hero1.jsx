import React from 'react'
import hero2 from '../../assets/hero2.png'
import hero3 from '../../assets/hero3.png'

const Hero1 = () => {
  return (
    <div className='flex flex-row bg-[#EDAF7C] h-[36vw] overflow-hidden flex-grow-1'>
        <div>
            <img src={hero2} alt='' className='w-[30vw]' />
        </div>
        <div className='flex flex-col w-[40vw] font-fashion font-light text-[4.7vw] justify-center text-[#1E1E1E]'>
            <div className='mb-[2vw]'>
            <div className='flex justify-center'>Drape Yourself</div> 
            <div className='flex justify-center'>in the Colors of </div>
            <div className='flex justify-center'>India.</div> 
            </div>
            <div className='flex justify-center'>
            <button className='bg-white font-playfair text-nunito text-[1.8vw] text-slate-900 px-[8vw] py-[1vw]'>
              Shop Now
            </button>
            </div>
        </div>
        <div>
            <img src={hero3} alt='' className='w-[30vw] h-[36vw]' />
        </div>
    </div>
  )
}

export default Hero1