import React from 'react'
import W1 from '../assets/W1.png'
import elestar from '../assets/ele1.png'

const westernPost = () => {
  return (
    <div className='mx-[10vw] my-[3vw]'>
        <div className='flex flex-row font-[fashion] text-[6vw] text-[#875A33]'>
            <div className='flex flex-col justify-center items-center w-[65vw]'>
            <img src={elestar} alt='' className='w-[2vw] h-[2vw] mb-[3vw]'/>
<           div>
                Elegant attire that
            </div>
            <div>celebrates tradition </div>
            <div>and style
            </div>
            <img src={elestar} alt='' className='w-[2vw] h-[2vw] mt-[3vw]'/>
            </div>
            <div className='ml-[3vw]'>
                <div className='bg-[#9DC3C480] overflow-visible w-[30vw] h-[34vw] flex 
                justify-center items-start relative '>
                    <img src={W1} alt='' className=' absolute top-[3vw] right-[3vw]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default westernPost