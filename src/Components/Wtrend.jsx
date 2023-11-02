import React from 'react'
import Wtren from '../assets/westrnd.png'
import ele from '../assets/ele1.png'
import { Button } from 'react-scroll'

const Wtrend = () => {
  return (
    <div>
        <div className='grid grid-cols-2 md:mx-[54px] mx-[18px] bg-[#EFE5D8]'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-[#515233] font-fashion md:text-[48px] text-[16px]'>
                    <span>The Western Trend</span>
                </div>
                <div className='md:text-[28px] text-[9px] font-inria text-[#875A33]'>
                    <span>Shop the latest collection</span>
                </div>
                <div className='md:py-[72px] py-[24px]'>
                    <img src={ele} alt=''/>
                    
                </div>
                <div>
                    <button className='bg-[#515233] text-white font-playfair text-[2vw] px-[7vw] py-[2vw]'>
                        SHOP NOW
                    </button>

                </div>

            </div>
            
                <img src={Wtren} alt='' className=' md:h-[648px] h-30vw w-full'/>

        </div>
    </div>
  )
}

export default Wtrend