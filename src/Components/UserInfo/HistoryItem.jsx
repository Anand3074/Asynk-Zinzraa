import React from 'react'

const CartItem = ({products,title, price, imageUrl, category, description, date, removeItemFromCart}) => {

  return (
    <div className='flex justify-start items-center sm:w-[50vw] m-[2vw]'>
        <div className='flex flex-row gap-[5vw] sm:gap-[1vw] '>
            <div>
                <img src={imageUrl} alt='' className='w-[18vw] sm:w-[8vw] sm:h-[10vw] h-[22vw]'/>
            </div>

            <div className='flex flex-col sm:text-[1.2vw] text-[2.2vw]'>
                <div className=''>{description}</div>
                <div className=''>Size: </div>
                <div className='flex flex-col'>
                   <div>
                    Rs. {price}
                    </div>
                    <div className='text-red-400 sm:text-[1vw] text-[1.6vw] line-through'>
                    Rs.{Math.floor(price * (1 + 43 / 100))}
                    </div>
                </div>
                <p className=''>Delivered on </p>
                <div className='w-[2vw] h-[5vw] mr-[10vw]'>Qty: <input type='number'/></div>
                <div className='flex flex-row'>
         <button className='bg-transparent text-blue-600 text-[1.8vw] md:text-[1.4vw]'>Add Review</button>
        </div>
    </div></div>
    </div>
  )
}

export default CartItem