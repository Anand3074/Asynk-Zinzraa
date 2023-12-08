import React from 'react'
import T1 from '../../assets/T1.png'
import T2 from '../../assets/T2.png'
import T3 from '../../assets/T3.png'
import T4 from '../../assets/T4.png'

const Trusty = () => {
  return (
    <div className='flex flex-row gap-[15vw] my-[2.5vw] mx-[5vw] justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <img src={T1} alt='' className='w-[4.5vw] h-[4.5vw]'/>
            <div className='flex text-[Fraunces] text-[1.8vw] sm:text-[1.2vw]
         text-[#875A33] font-bold mt-[1vw] sm:mt-[0.8vw]  '> High Quality</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={T2} alt='' className='w-[4.5vw] h-[4.5vw]'/>
            <div className='flex text-[Fraunces] text-[1.8vw] sm:text-[1.2vw]
         text-[#875A33] font-bold mt-[1vw] sm:mt-[0.8vw]  '> Trusted Shop</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={T3} alt='' className='w-[4.5vw] h-[4.5vw]'/>
            <div className='flex text-[Fraunces] text-[1.8vw] sm:text-[1.2vw]
         text-[#875A33] font-bold mt-[1vw] sm:mt-[0.8vw]  '> Free Shipping</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={T4} alt='' className='w-[4.5vw] h-[4.5vw]'/>
            <div className='flex text-[Fraunces] text-[1.8vw] sm:text-[1.2vw]
         text-[#875A33] font-bold mt-[1vw] sm:mt-[0.8vw]  '> Easy Return</div>
        </div>
    </div>
  )
}

export default Trusty