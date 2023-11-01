import React from 'react'
import EWish from '../assets/emptywish.png'

const emptywish = () => {
    <div>
        <div className='flex flex-col items-center justify'>
            <div>
                <img src={EWish} alt='wishlist-none' />
            </div>
            <div className='flex flex-col justify-center'>
                <div>
                Your wishlist is empty!
                </div> 
                <div>
                    Save your favourite items so you don’t lose sight of them.
                </div>
            </div>
        </div>
    </div>
  return (
        <div className='flex flex-col md:mt-[164px] mt-[56px] align-center'>
            <div className='flex justify-center align-center'>
                    <img src={EWish} alt="wishlist-none" className=''/>
            </div>
            <div>
            <div className="text-center md:mb-[54px] mb-[18px] md:mt-[40px] mt-[13px] ">
                <div>
                    Your wishlist is empty!
                </div>                   
                <div>
                    Save your favorite items so you don't lose sight of them.
                </div>
            </div>
            <div>
            <div className='flex align-center md:px-[45vw] font-nunito px-[140px]  '>
                <button className='flex md:text-[18px] bg-teal-dark text-white  rounded-[5px] '>
                    Start shopping now
                </button>
            </div>
            </div>
            
            </div>
        </div> 

  
    
  )
}

export default emptywish