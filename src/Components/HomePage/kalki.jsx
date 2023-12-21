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
    <div className=' w-full md:h-[50vw] h-[58vw] '>
        <div className=''>
         
        <div className='bg-[#3D3F31] h-[58vw] md:h-[45vw] p-[4vw]'>
        <div className='grid grid-cols-2  gap-[5vw] '>
        {/* <div className='grid grid-cols-2  grid-rows-2 items-center md:gap-[17.94px] gap-[5.4px]'> */}
        <div className='flex flex-col md:ml-[5vw]  md:px-[2.5vw] md:py-[2.5vw]'>
            <div className='flex flex-rows gap-[1vw]'>
                <div className='h-[21vw] sm:w-[15vw] md:h-[16vw]'>
                    <img src={K1} alt='' className=' h-[19.4vw] object-cover object-top rounded-tr-[10vw] sm:rounded-tr-[10vw] 
                    rounded-bl-[10vw] sm:rounded-bl-[10vw]  md:h-[16vw] h-[90px] sm:w-[15vw]  
                    sm:m-[1vw] m-[1vw]' />
                </div>
                <div className='h-[21vw] sm:w-[15vw] md:h-[16vw] '>
                    <img src={K2} alt='' className=' h-[19.4vw] object-cover object-top rounded-tl-[10vw] sm:rounded-tl-[10vw] 
                rounded-br-[10vw] sm:rounded-br-[10vw]  md:h-[16vw] h-[90px] sm:w-[15vw]  
                sm:m-[1vw] m-[1vw]' />
                </div>
            </div>

            <div className=' flex flex-rows gap-[1vw] mt-[3.5vw] md:mt-[0.3vw]'>
                <div className='h-[21vw] sm:w-[15vw] md:h-[16vw] '>
                <img src={K3} alt='' className=' h-[19.4vw] object-cover object-top rounded-tl-[10vw] sm:rounded-tl-[10vw] 
                 rounded-br-[10vw] sm:rounded-br-[10vw]  md:h-[16vw] h-[90px] sm:w-[15vw]  
                 sm:m-[1vw] m-[1vw]' />
                 </div>
                <div className='h-[21vw] sm:w-[15vw] md:h-[16vw] '>
                <img src={K4} alt='' className=' h-[19.4vw] object-cover object-top rounded-tr-[10vw] sm:rounded-tr-[10vw] 
                 rounded-bl-[10vw] sm:rounded-bl-[10vw]  md:h-[16vw] h-[90px] 
                 sm:w-[15vw]  sm:m-[1vw] m-[1vw]' />
            </div>
            </div>
            </div>
            <div className='flex flex-col  items-center justify-center text-white'>
                <div className='font-[500] md:text-[6vw]  text-[8vw]'>
                    <div className='ml-[1vw] font-fashion '>
                        The Next 
                    </div>
                    <div className='font-fashion '>
                        Big Thing
                    </div>
                </div>
                <div className='md:text-[2vw] mt-[2vw] text-[9px] font-inria'>
                    <span>Fresh Style for you !</span>
                </div>
                <div className='md:py-[3vw] py-[3vw]'>
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
          <img src={Vec3} className='w-full  md:h-[3.75vw] h-[4.25vw] object-cover object-center'/>
        </div>
        </div>
    
  );
};

export default kalki