import React from 'react'
import {PiHandbagSimpleFill} from 'react-icons/pi'
import {FaLocationDot} from 'react-icons/fa6'
import {FaRupeeSign} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartStatus = ({icon}) => {    
  return (
    <div>
        <div className='flex justify-center items-center ' id='head-icon'>
            <div className='flex flex-row sm:gap-[0.7vw] justify-center items-center'>
            <Link to='/Cart'><div className='flex flex-col justify-center items-center'>
             <PiHandbagSimpleFill className='sm:w-[1.8vw] w-[5vw] h-[4vw] sm:h-[2.2vw]'/>
                  <p className='text-[2.5vw] sm:text-[1.4vw] text-teal-dark'>Bag</p>
              </div></Link>
              <div >
                <img src={icon.img1} alt='' className='sm:w-[8vw] w-[15vw] sm:h-[0.6vw] h-[1vw] flex justify-center items-center'/>
              </div>
              <Link to='/AddDetail'><div className='flex flex-col justify-center items-center'>
              <FaLocationDot className='sm:w-[1.8vw] sm:h-[2.2vw]
                   w-[5vw] h-[4vw]'
                  fill={icon.clr1}/>
                    <p className='text-[2.5vw] sm:text-[1.4vw] text-teal-dark'>
                      Delivery Location</p>
              </div></Link>
              <div>
                <img src={icon.img2} alt='' className='sm:w-[8vw] w-[15vw] sm:h-[0.6vw] h-[1vw] flex justify-center items-center'/>
              </div>
              <Link to='/Payment'><div className='flex flex-col justify-center items-center'>
                  <FaRupeeSign className='sm:w-[1.8vw] sm:h-[2.2vw] w-[5vw] h-[4vw]'
                  fill={icon.clr2}/>
                  <p className='text-[2.5vw] sm:text-[1.4vw] text-teal-dark'>Payments</p>
              </div>
              </Link>
              
            </div>
        </div>
    </div>
  )
}

export default CartStatus