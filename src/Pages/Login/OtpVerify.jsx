import React from 'react'
import {GrClose} from 'react-icons/gr'
import wlcm from '../../assets/wlcm.png'
import OTPInput from './OTPInput'
import { Link } from 'react-router-dom'
const Login = () => {
    let PhoneNumber ='+91xxxxxxx47'
  return (
    <div className='flex  border border-solid border-1px 
                    border-[#875A33] sm:w-[75vw] my-[4vw] mx-[12.5vw]
                    h-[65vw] sm:h-[35vw]'>
        <div className='m-[2vw]'>
                <GrClose/>
        </div>
        <div className='flex flex-row  sm:[6vw] my-[2vw] gap-[15vw] justify-center items-center'>
          <div className='flex flex-col'>
            <div className=''> 
              <div className='mb-[1.5vw] font-semibold text-[2vw]'>
                  Verify The OTP
              </div>
              <div className='mb-[1.5vw] font-semibold text-[1.6vw]'>
                  Kindly enter the Four Digit OTP sent to <br/>your number {PhoneNumber}
              </div>
              <div className=''>
        
            <div className="otp-input my-[2.5vw]">
                <OTPInput/>
            </div>
            <Link to='/'><button className='text-[2.2vw] sm:text-[1.6vw] bg-teal-dark
                 text-white px-[4vw] py-[1vw] rounded-[2vw]'>
                  Confirm
                </button></Link>
            </div>
            </div>
          </div>
            <div className=' flex justify-center items-center md:mt-[60px] mt-[20px]'>
                <img src= {wlcm} className='w-[30vw] h-[40vw] sm:w-[15vw] sm:h-[25vw]'/>
            </div>
        </div>
      </div>
  
    
  )
}

export default Login