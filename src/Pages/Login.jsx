import React from 'react'
import {GrClose} from 'react-icons/gr'
import wlcm from '../assets/wlcm.png'
const Login = () => {
  return (
    <div className='border border-solid border-1px border-[#875A33] md:mx-[250px]
                     mx-[30px] md:my-[60px] my-[15px] md:w-[60vw] w-[85vw] md:h-[35vw] h-[75vw]'>
        <div className='md:pl-[5px] pl-[8px] md:pt-[5px] pt-[8px] '>
                <GrClose/>
        </div>
        <div className='flex flex-row justify-center '>
          <div className='flex flex-col font-inter md:mt-[86px] mt-[15px] md:mr-[145px] ml-[15px] 
                          md:text-[18px] text:[6px]'>
            <div className='flex flex-col align-start '> 
              <div className='mb-[8px] font-semibold  '>
                  Login using mobile number
              </div>
              <div className='mb-[8px]'>
                  Kindly enter the ten digit Phone number
              </div>
              <div className='mb-[8px]'>
                  Verify the OTP
            </div>
            </div>
              <div className='bg-[#F2B47D61] md:pt-[16px] pt-[5px] md:pl-[16px] pl-[5px]
                             md:mt-[56px] mt-[18px] md:mb-[72px] mb-[24px]
                              md:w-[415px] w-[155px] md:h-[66px] h-[42px]'>
                <div className='text-[6px] md:text-[18px]'>
                Mobile number
                </div>
                <div>
                <input
                placeholder='+91 xxxxxxxxxx'
                className="bg-transparent border-none h-[12x] md:h-[21px] text-[10px] md:text-[21px] text-[#ff7a00a8]  focus:outline-none"/>
                </div>
              </div>
          </div>
            <div className='items-center md:mt-[60px] mt-[20px]'>
                <img src= {wlcm} className='md:w-[199px] md:h-[267px] h-[176px] w-[106px]   ' />
            </div>
        </div>
          <div className='md:pl-[54px] ml-[15px]'>
              <button className='bg-teal-dark text-white font-inter md:text-[18px] text-[12px] 
              md:w-[402px] w-[230px] md:h-[55px] md:rounded-[15px] rounded-[5px] '>Submit</button>
          </div>
      </div>
  
    
  )
}

export default Login