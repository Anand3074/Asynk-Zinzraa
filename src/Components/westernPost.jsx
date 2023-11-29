import React from 'react'
import W1 from '../assets/W1.png'
import elestar from '../assets/ele1.png'

const westernPost = () => {
  return (
    <div className='mx-[3vw] my-[0.5vw] mb-[3vw] border border-2px solid border-[#875A33] h-[45vw] px-[3vw] py-[1vw] md:h-[36vw] '>
        <div className='flex flex-row font-[fashion] text-[4.5vw] md:text-[4vw] text-[#875A33]'>
            <div className='flex flex-col justify-center items-center w-[65vw] '>
            <img src={elestar} alt='' className='w-[2vw]  pt-[2vw] mb-[1.5vw]'/>
<           div>
                Elegant attire that
            </div>
            <div>celebrates tradition </div>
            <div>and style
            </div>
            <img src={elestar} alt='' className='w-[2vw]  pt-[2vw] mt-[1.5vw]'/>
            </div>
            <div className='ml-[3vw]'>
                <div className='bg-[#9DC3C480] overflow-visible w-[30vw] h-[34vw] md:w-[25vw] md:h-[27vw] flex 
                justify-center items-start relative '>
                    <img src={W1} alt='' className=' absolute top-[2vw] right-[2vw]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default westernPost