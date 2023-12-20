import React from 'react'
import fashion from '../assets/f1.png'
import Vec5 from '../assets/vec5.png'
import { Link } from 'react-router-dom'

const Modern = () => {
  return (
    <div className='flex  m-[2vw]'>
      <div id='main-container' className='bg-[#C973634D] w-full flex flex-row  
       rounded-tr-[94px]  h-[25vw] '> 
        <div>
          <img src={Vec5} alt=''  className='h-[25vw] w-[4vw]'/>
        </div>
        <div id='center-container' className='flex flex-col justify-center w-[56vw] h-[25vw]'>
          <div className='flex flex-col text-[#1A1614]' id='text'>
            <div className='font-[fashion] sm:text-[4.6vw] flex flex-col  '>
              <div className='flex justify-center '>
              Shop the latest  
              </div>
              <div className='flex justify-center'>
              Kalki Fashison
              </div>
            </div>
            <div className='flex font-inria justify-center text-[1.2vw] text-[#583323]'>
            Give yourself a fresh look with Zinzraa Collections
            </div>
          </div>
          <div className='flex justify-center mt-[2vw]'>
            <Link to='/Product3'><button className='bg-[#1A1614] text-nunito text-[1.5vw] 
            text-white px-[6vw] py-[1vw]
            font-playfair md:text-[1.8vw] font-[400] mx-[4.5vw] 
           py-[1vw] rounded-[0.5vw]  w-[23vw]  relative'>
              Shop Now
            </button>
            </Link>
          </div>
            
        </div>
        <div className='w-[40vw] h-[22vw] mt-[3vw] flex justify-end items-end rounded-tr-[94px]
         rounded-bl-[94px]'>
                <img src={fashion} alt='' className='w-[40vw] object-cover object-top h-[25vw] '/>
        </div>  
      </div>
        
    </div>
  )
}

export default Modern