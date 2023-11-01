import React from 'react'
import {GrClose} from 'react-icons/gr'
import wlcm from '../assets/wlcm.png'
const Login = () => {
  return (
    <div>
        <div className='flex w-[741px] h-[558px] '>
            <div>
                <GrClose/>
            </div>
            <div>
                <img src= {wlcm} />
            </div>
            <div></div>
            <button className='bg-teal-dark w-[402px] h-[55px]'>Submit</button>
        </div>
    </div>
  )
}

export default Login