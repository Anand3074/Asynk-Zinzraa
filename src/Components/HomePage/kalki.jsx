import React from 'react'
import ele from '../../assets/ele2.png'
import K2 from '../../assets/k2.png'
import K3 from '../../assets/k3.png'
import Vec3 from '../../assets/vec3.png'
import elestar2 from '../../assets/ele1.png'
import { Link } from 'react-router-dom'

const kalki = () => {
  return (
    <div className=' w-[95vw] mx-[2.5vw] mt-[2vw] justify-center items-center'>
            <div className='flex justify-center'>
                <img src={elestar2} alt='' className='w-[10px] md:w-auto '/>
            </div>
            <div className='flex justify-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>Top Picks Of Kalki koechlin</span>
            </div>
        <div className='bg-[#3D3F31]  '>
        <div className='grid grid-cols-2 p-[2.5vw] gap-[10vw]'>
        {/* <div className='grid grid-cols-2  grid-rows-2 items-center md:gap-[17.94px] gap-[5.4px]'> */}
        <div className='flex flex-col'>
            <div className='flex flex-rows gap-[1vw]'>
                <div className='sm:w-[20vw]'>
                    <img src={K2} alt='' className='rounded-tr-[12vw] sm:rounded-tr-[9vw] 
                    rounded-bl-[12vw] sm:rounded-bl-[9vw]  sm:h-[18vw] h-[90px] sm:w-[20vw] sm:m-[1vw] m-[1vw]' />
                </div>
                <div className=' sm:w-[20vw]'>
                    <img src={K3} alt='' className='rounded-tl-[12vw] sm:rounded-tl-[9vw] 
                rounded-br-[12vw] sm:rounded-br-[9vw]  sm:h-[18vw] h-[90px] sm:w-[20vw] sm:m-[1vw] m-[1vw]' />
                </div>
            </div>
            <div className='flex flex-rows gap-[1vw]'>
                <div className='sm:w-[20vw]'>
                <img src={K2} alt='' className='rounded-tl-[12vw] sm:rounded-tl-[9vw] 
                 rounded-br-[12vw] sm:rounded-br-[9vw]  sm:h-[18vw] h-[90px] sm:w-[20vw] sm:m-[1vw] m-[1vw]' />
                 </div>
                <div className='sm:w-[20vw]'>
                <img src={K3} alt='' className='rounded-tr-[12vw] sm:rounded-tr-[9vw] 
                 rounded-bl-[12vw] sm:rounded-bl-[9vw]  sm:h-[18vw] h-[90px] sm:w-[20vw] sm:m-[1vw] m-[1vw]' />
            </div>
            </div>
            </div>
            <div className='flex flex-col items-center justify-center text-white'>
                <div className=''>
                    <div className='ml-[1vw] font-fashion md:text-[6vw] text-[32px]'>
                        The Next 
                    </div>
                    <div className='font-fashion md:text-[6vw] text-[32px]'>
                        Big Thing
                    </div>
                </div>
                <div className='md:text-[28px] text-[9px] font-inria'>
                    <span>Fresh Style for you !</span>
                </div>
                <div className='md:py-[4vw] py-[4vw]'>
                    <img src={ele} alt='' className='text-white w-[3vw] md:w-[1.5vw]'/>
                    
                </div>
                <div>
                    <Link to='/Kalki'><button className='bg-white text-slate-900 font- semibold font-playfair text-[2vw] px-[7vw] py-[2vw]'>
                        SHOP NOW
                    </button></Link>

                </div>
            </div>
            
    
        </div>
    </div>
    <div className='w-full md:h-[60px] h-[20px] md:mt-[64px] mt-[22px]'>
          <img src={Vec3}/>
        </div>
    </div>
    
  );
};

export default kalki