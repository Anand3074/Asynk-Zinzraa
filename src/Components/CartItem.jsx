import React from 'react'
import C1 from '../assets/c1.png'

const CartItem = () => {

let oldPrice='$7382'
let newPrice = '$6665'
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-row gap-[10vw] sm:gap-[1vw] '>
            <div>
                <img src={C1} alt='' className='w-[18vw] sm:w-[8vw] sm:h-[10vw] h-[22vw]'/>
            </div>

            <div className='flex flex-col sm:text-[1.2vw] text-[2.2vw]'>
                <div className=''>Daisy Green Silk Fabricated Saree With Mirror</div>
                <div className=''>Size: M</div>
                <div className=''>`RS.{newPrice}{oldPrice}`</div>
                <div className=''>Delivered on 15 September</div>
                <div>Qty: <input value={1} /></div>
            </div>
        </div>
        <div className='mt-[12vw] sm:mt-[0vw]'>
            <button className='bg-transparent text-blue-600 text-[1.8vw]'>Add Review</button>
        </div>
    </div>
  )
}

export default CartItem