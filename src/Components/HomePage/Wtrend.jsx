import React from 'react'
import Wtren from '../../assets/westrnd.png'
import ele from '../../assets/ele1.png'
import { Link } from 'react-router-dom'

const Wtrend = () => {
  return (
    <div className='w-full h-[44vw] '>
        <div className='grid grid-cols-2 md:mx-[3vw] mx-[5vw] bg-[#EFE5D8]'>
            <div className='flex flex-col items-center justify-center '>
                <div className='text-[#515233] font-fashion md:text-[48px] text-[16px]'>
                    <span>The Western Trend</span>
                </div>
                <div className='md:text-[28px] text-[9px] font-inria text-[#875A33]'>
                    <span>Shop the latest collection</span>
                </div>
                <div className='w-[2vw] h-[2vw] my-[5vw]'>
                    <img src={ele} alt='w-[2vw] h-[2vw] '/>
                    
                </div>
                <div>
                    <Link to='/Westrend'><button className='bg-[#515233] text-white 
                    font-playfair rounded-[0.5vw] text-[2vw] md:text-[1.6vw] px-[7vw] py-[1.5vw]'>
                        SHOP NOW
                    </button></Link>

                </div>

            </div>
                <div className='w-[40vw] h-[44vw]'>
                    <img src={Wtren} alt='' className='object-cover object-top ml-[8vw] w-[40vw] h-[44vw]'/>
                </div>

        </div>
    </div>
  )
}

export default Wtrend