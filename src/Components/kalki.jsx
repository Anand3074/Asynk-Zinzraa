import React from 'react'
import ele from '../assets/ele2.png'
import K2 from '../assets/k2.png'
import K3 from '../assets/k3.png'
import Vec3 from '../assets/vec3.png'
import elestar2 from '../assets/ele1.png'

const kalki = () => {
  return (
    <div>
            <div className='flex justify-center'>
                <img src={elestar2} alt='' className='w-[10px] md:w-auto '/>
            </div>
            <div className='flex justify-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>Best Collections</span>
            </div>
        <div className='bg-[#3D3F31] w-full '>
        <div className='grid grid-cols-2 md:px-[54px] px-[18px] md:py-[54px] py-[18px] md:gap-[231px]'>
            <div className='grid grid-cols-2  grid-rows-2 items-center md:gap-[17.94px] gap-[5.4px]'>
                    <div className='md:w-[268px]'>
                        <img src={K2} alt='' className='rounded-tr-[44.5px] md:rounded-tr-[134.50px] 
                         rounded-bl-[44.5px] md:rounded-bl-[134.50px]  md:h-[270px] h-[90px] md:w-[268px]' />
                    </div>
                    <div className=' md:w-[268px]'>
                        <img src={K3} alt='' className='rounded-tl-[44.5px] md:rounded-tl-[134.50px] 
                         rounded-br-[44.5px] md:rounded-br-[134.50px]  md:h-[270px] h-[90px] md:w-[268px]' />
                    </div>
                    <div className='md:w-[268px]'>
                        <img src={K2} alt='' className='rounded-tl-[44.5px] md:rounded-tl-[134.50px] 
                         rounded-br-[44.5px] md:rounded-br-[134.50px]  md:h-[270px] h-[90px] md:w-[268px]' />
                    </div>
                    <div className='md:w-[268px]'>
                        <img src={K3} alt='' className='rounded-tr-[44.5px] md:rounded-tr-[134.50px] 
                         rounded-bl-[44.5px] md:rounded-bl-[134.50px]  md:h-[270px] h-[90px] md:w-[268px]' />
                    </div>
            </div>
            
            
            <div className='flex flex-col items-center justify-end text-white'>
                <div className=''>
                    <div className='font-fashion md:text-[96px] text-[32px]'>
                        The Next 
                    </div>
                    <div className='font-fashion md:text-[96px] text-[32px]'>
                        Big Thing
                    </div>
                </div>
                <div className='md:text-[28px] text-[9px] font-inria'>
                    <span>Fresh Style for you !</span>
                </div>
                <div className='md:py-[66px] py-[24px]'>
                    <img src={ele} alt='' className='text-white'/>
                    
                </div>
                <div>
                    <button className='bg-white text-slate-900 font- semibold font-playfair text-[2vw] px-[7vw] py-[2vw]'>
                        SHOP NOW
                    </button>

                </div>


            </div>
            
    
        </div>
    </div>
    <div className='w-full md:h-[60px] h-[20px] md:mt-[64px] mt-[22px]'>
          <img src={Vec3}/>
        </div>
    </div>
    
  )
}

export default kalki