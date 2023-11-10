import React from 'react'
import {GrClose} from 'react-icons/gr'
import wlcm from '../../assets/wlcm.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
     <div className='flex  border border-solid border-1px 
                    border-[#875A33] sm:w-[75vw] my-[4vw] mx-[5vw] sm:mx-[12.5vw]
                    h-[65vw] sm:h-[35vw]'>
        <div className='m-[2vw]'>
                <GrClose/>
        </div>
        <div className='flex flex-row mx-[2vw] my-[4vw] gap-[15vw] justify-center items-center'>
          <div className='flex flex-col'>
            <div className=''> 
              <div className='mb-[1.5vw] font-semibold text-[2vw]'>
                  Verify The OTP
              </div>
              <div className='mb-[1.5vw] font-semibold text-[1.6vw]'>
                  Kindly enter the Four Digit OTP sent to <br/>your number 
              </div>
              <div className=''>

          <div className='bg-[#F2B47D61] w-[25vw] h-[5vw] my-[3vw] '>
            <div className='text-[3vw] md:text-[1vw] m-[1vw]'>
              Mobile number
            </div>
            <div className='mt-[1vw]'>
                <input
                placeholder='+91 xxxxxxxxxx'
                maxLength={10}
                className="bg-transparent border-none h-[12x] md:h-[21px] text-[2vw] sm:text-[1.5vw] mx-[1vw]
                  focus:outline-none"/>
                </div>
            </div>
            <Link to='/MobileLogin/OtpVerify'><button className='text-[2.2vw] sm:text-[1.6vw] bg-teal-dark
                 text-white px-[4vw] py-[1vw] rounded-[2vw]'>
                  Proceed
                </button></Link>
            </div>
            </div>
              
          </div>
            <div className=' flex justify-center items-center'>
                <img src= {wlcm} className='w-[30vw] h-[40vw] sm:w-[15vw] sm:h-[25vw]'/>
            </div>
        </div>
      </div>
  
  
    
  )
}

export default Login