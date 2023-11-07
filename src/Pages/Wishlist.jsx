import React from 'react'
import WishItem from '../Components/WishItem'

const Wishlist = () => {
let  itemsInWishlist = 0

  return (
    <div className='m-[2vw]'>
        <div className='text-[#875A33]'>
            <div className='flex justify-center text-[3.8vw] font-semibold font-[fashion]'>
                My Wishlist
            </div>
            <div className='text-[1.8vw] flex justify-center mb-[3vw]'>
                Total {itemsInWishlist} items
            </div>
        </div>
        <div>
            <div className='flex flex-row text-[1.8vw] font-semibold my-[1.2vw] mx-[2vw]'>
                <div className='w-[35vw] '>
                    Product Name
                </div>
                <div className='w-[20vw] '>
                    Unit Price
                </div>
                <div className='w-[25vw] '>
                    Stock Status
                </div>
            </div>
            <hr className=' border-t border-gray-600 w-[100vw] h-[0.2vw]' />

            <div>
                <WishItem/>
            </div>
            <div>
                <WishItem/>
            </div>
            <div>
                <WishItem/>
            </div>
            <div>
                <WishItem/>
            </div>
        </div>
    </div>
  )
}

export default Wishlist