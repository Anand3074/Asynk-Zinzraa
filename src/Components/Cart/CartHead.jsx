import React from 'react'
import bagicon from '../../assets/bagicon.png'

const CartHead = () => {
   let CartProducts = 0

  return (
    <div className='m-[2vw]'>
        <div className='flex justify-center items-center'>
            <img src={bagicon} alt='' className=' w-[50vw] sm:w-auto sm:h-auto  h-[6vw]' />
        </div>
        <div className='m-[2vw]'>
            <div className='sm:text-[3.5vw] text-[5vw]  sm:mt-[0vw] mt-[vw]
               font-playfair text-[#875A33]
               flex flex-col items-center sm:items-start justify-center sm:justify-start'>My Bag</div>
            <div className='text-[#875A33] text-[3vw] sm:text-[1.5vw]'>Total {CartProducts} item</div>
        </div>
    </div>
  )
}

export default CartHead