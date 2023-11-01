import React from 'react'
import userbg from '../assets/userbg.png'
import userpng from '../assets/userpng.png'
import {Link} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'
import {BsFillCloudUploadFill} from 'react-icons/bs'

const User = () => {
  return (
    <div className='md:mt-[72px] mt-[24px] md:mx-[55px] mx-[18px] z-50'>
        <div className='flex flex-col relative'>
            <div className='flex justify-center '>
                <img src={userbg} alt=''/>
            </div>
            <div className='flex justify-center  z-10 absolute right-[38vw] top-[20vw] '>
            <img src={userpng} alt='user' className='rounded-full w-[15vw]'/>
            </div>
            <div className='absolute right-[2.85vw] top-[21vw] text-[1.5vw]'>
                <button className='flex flex-row items-center rounded-[4px]
                                    py-[0.7vw] px-[0.5vw] bg-[#C99359] text-white'>
                    <div>
                        <BsFillCloudUploadFill/>                      
                    </div>
                    <div className='font-montserrat '>
                        Upload new cover
                    </div>
                </button>
            </div>
            <div className='absolute right-[41vw] top-[29vw] z-100'>
                <button className='flex rounded-full items-center justify-center w-[2.5vw] h-[2.5vw] bg-[#C99359]'>
                    <FaPen className='text-white  justify-center w-[1.2w] h-[1.2w]'/>
                </button>
            </div>
        </div>
    <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-[5vw]  mt-[10vw] justify-center'>
            <div className='w-[28vw] flex justify-center '>
                <button className=' flex justify-center'>
                    Accounts
                </button>
            </div>
            <div className='w-[28vw] flex justify-center  '>
                <button className=''>
                    History
                </button>
            </div>
            <div className='w-[28vw] flex justify-center '>
                <button className=''>
                    Payment Method/Address
                </button>
            </div>
        </div>
    </div>            
</div>
  )
}

export default User