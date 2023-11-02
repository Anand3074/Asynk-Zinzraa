import React from 'react'
import modern from '../assets/modern.png'
import Vec5 from '../assets/vec5.png'
const Modern = () => {
  return (
    <div className='flex'>
      <div id='main-container' className='bg-[#da9e6a42] flex flex-row  m-[3vw]   h-[30vw]'> 
        <div>
          <img src={Vec5} alt=''  className='h-[30vw] w-[4vw]'/>
        </div>
        <div id='center-container' className='flex flex-col justify-center w-[56vw] h-[30vw]'>
          <div className='flex flex-col text-[#515233]' id='text'>
            <div className='font-fashion text-[5vw] flex flex-col  '>
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
            <button className='bg-[#515233] text-nunito text-[1.5vw] text-white px-[6vw] py-[1vw]'>
              Shop Now
            </button>
          </div>
            
        </div>
        <div className='w-[36vw] h-[27vw] m-[1.5vw]'>
                <img src={modern} alt='' className='w-[34vw] h-[27vw] '/>
        </div>  
      </div>
        
    </div>
  )
}

export default Modern