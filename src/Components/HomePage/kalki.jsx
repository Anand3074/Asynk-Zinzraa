import React from 'react'
import ele from '../../assets/ele2.png'
import K1 from '../../assets/k1.png'
import K2 from '../../assets/k2.png'
import K3 from '../../assets/k3.png'
import K4 from '../../assets/k4.png'
import Vec3 from '../../assets/vec3.png'
import elestar2 from '../../assets/ele1.png'
import { Link } from 'react-router-dom'

const kalki = () => {
  return (
    <div className=' w-full  '>
        <div className='mx-[2.5vw] my-[2.5vw]'>
            <div className='flex justify-center h-[2vw] '>
                <img src={elestar2} alt='' className='w-[2vw] h-[2vw]' />
            </div>
            <div className='flex justify-center text-[#875A33] font-lora 
            md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>Top Picks Of Kalki koechlin</span>
            </div>
        <div className='bg-[#3D3F31] h-[52.5vw]  md:h-[42.5vw] '>
        <div className='grid grid-cols-2 px-[5vw] py-[2.5vw] gap-[10vw] '>
        {/* <div className='grid grid-cols-2  grid-rows-2 items-center md:gap-[17.94px] gap-[5.4px]'> */}
        <div className='flex flex-col md:ml-[5vw]'>
            <div className='flex flex-rows gap-[1vw]'>
                <div className='h-[22vw] sm:w-[15vw] sm:h-[16vw] my-[0.3vw] '>
                    <img src={K1} alt='' className=' h-[20.85vw] rounded-tr-[10vw] sm:rounded-tr-[10vw] 
                    rounded-bl-[10vw] sm:rounded-bl-[10vw]  sm:h-[16vw] h-[90px] sm:w-[15vw]  
                    sm:m-[1vw] m-[1vw]' />
                </div>
                <div className='h-[22vw] sm:w-[15vw] sm:h-[16vw] my-[0.3vw] '>
                    <img src={K2} alt='' className=' h-[20.85vw] rounded-tl-[10vw] sm:rounded-tl-[10vw] 
                rounded-br-[10vw] sm:rounded-br-[10vw]  sm:h-[16vw] h-[90px] sm:w-[15vw]  
                sm:m-[1vw] m-[1vw]' />
                </div>
            </div>

            <div className=' flex flex-rows gap-[1vw]'>
                <div className='h-[22vw] sm:w-[15vw] sm:h-[16vw] my-[0.3vw] '>
                <img src={K3} alt='' className=' h-[20.85vw] rounded-tl-[10vw] sm:rounded-tl-[10vw] 
                 rounded-br-[10vw] sm:rounded-br-[10vw]  sm:h-[16vw] h-[90px] sm:w-[15vw]  
                 sm:m-[1vw] m-[1vw]' />
                 </div>
                <div className='h-[22vw] sm:w-[15vw] sm:h-[16vw] my-[0.3vw] '>
                <img src={K4} alt='' className=' h-[20.85vw] rounded-tr-[10vw] sm:rounded-tr-[10vw] 
                 rounded-bl-[10vw] sm:rounded-bl-[10vw]  sm:h-[16vw] h-[90px] 
                 sm:w-[15vw]  sm:m-[1vw] m-[1vw]' />
            </div>
            </div>
            </div>
            <div className='flex flex-col items-center justify-center text-white'>
                <div className=''>
                    <div className='ml-[1vw] font-fashion md:text-[5vw]  text-[6vw]'>
                        The Next 
                    </div>
                    <div className='font-fashion md:text-[5vw]  text-[6vw]'>
                        Big Thing
                    </div>
                </div>
                <div className='md:text-[2vw] mt-[2vw] text-[9px] font-inria'>
                    <span>Fresh Style for you !</span>
                </div>
                <div className='md:py-[4vw] py-[4vw]'>
                    <img src={ele} alt='' className='text-white w-[3vw] md:w-[1.5vw]'/>
                    
                </div>
                <div>
                    <Link to='/Kalki'><button className='bg-white
                     text-slate-900 opacity-100 text-black
                     font-playfair md:text-[1.6vw] text-[2vw] mx-[4.5vw] 
                      py-[1.5vw] rounded-[0.5vw]  w-[25vw] relative z-10'>
                        SHOP NOW
                    </button></Link>

                </div>
            </div>
            
    
        </div>
    </div>
    </div>
    <div className='w-full my-[2vw]  md:h-[3vw] h-[4vw]'>
          <img src={Vec3} className='w-full  md:h-[4vw] h-[4vw]'/>
        </div>
        </div>
    
  );
};

export default kalki