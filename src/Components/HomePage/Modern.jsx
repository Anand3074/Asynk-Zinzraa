import React from 'react'
import modern from '../../assets/modern.png'
import Vec5 from '../../assets/vec5.png'
import { Link } from 'react-router-dom'

const Modern = () => {
  return (
    <div className='flex'>
      <div id='main-container' className='bg-[#da9e6a42] flex flex-row  m-[1.5vw]   h-[25vw]'> 
        <div>
          <img src={Vec5} alt=''  className='h-[25vw] w-[4vw]'/>
        </div>
        <div id='center-container' className='flex flex-col justify-center w-[56vw] h-[25vw]'>
          <div className='flex flex-col text-[#515233]' id='text'>
            <div className='font-fashion text-[4.2vw] flex flex-col  '>
              <div className='flex justify-center '>
                Embrace Tradition with 
              </div>
              <div className='flex justify-center'>
                a Modern Twist.
              </div>
            </div>
            <div className='flex font-inria justify-center text-[1.5vw]'>
              Shop the latest collection
            </div>
          </div>
          <div className='flex justify-center mt-[3vw]'>
            <Link to='/Westrend'>
            <button className='bg-[#515233] text-nunito text-[1.5vw] text-white px-[6vw] py-[1vw]'>
              Shop Now
            </button>
            </Link>
          </div>
        </div>
        <div className='w-[36vw] h-[22vw] m-[1.2vw]'>
                <img src={modern} alt='' className='w-[34vw] object-cover object-top h-[22vw] '/>
        </div>  
      </div>
        
    </div>
  )
}

export default Modern