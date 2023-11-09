import React from 'react'
import { Link } from 'react-router-dom'

const Greetings = ({wish}) => {
  return (
        <div className='flex flex-col justify-center items-center my-[25vw] mx-[5vw]
         sm:my-[5vw] mx-[5vw]'>
            <div className=''>
                    <img src={wish.img} alt="wishlist-none" className='w-[25vw] h-[25vw] sm:w-[10vw] sm:h-[10vw]'/>
            </div>
            <div className="  sm:[5vw] mt-[3vw]">
                <div className='flex font-bold text-[4vw] sm:text-[2vw] justify-center items-center'>
                    {wish.msg1}
                </div>                   
                <div className='flex justify-center text-[3.5vw] sm:text-[1.5vw] items-center'>
                {wish.msg2}
                </div>
            </div>
            <div className=''>
                <Link to='/Dresses'><button className='bg-teal-dark m-[8vw] text-[4vw] sm:m-[4vw] sm:text-[2vw]
                 font-bold py-[0.5vw] px-[3vw] w-[70vw] h-[12vw] sm:py-[1vw] sm:px-[3vw] sm:w-[40vw] 
                 sm:h-[6vw] rounded-[2vw] text-white'>
                    {wish.button}
                </button></Link>
            </div>            
            </div>    
  )
}

export default Greetings