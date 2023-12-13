import React from 'react'

const WishHead = ({Wishes}) => {
    // const itemsInWishlist = 3
  return (
    <div>
        <div className='text-[#875A33]'>
            <div className='flex justify-center text-[3.8vw] font-semibold font-[fashion]'>
                My Wishlist
            </div>
            <div className='text-[1.8vw] flex justify-center mb-[3vw]'>
                Total {Wishes} items
            </div>
        </div>

        <div>
            <div className='flex flex-row text-[1.8vw]  font-semibold my-[1.2vw] mx-[2vw]'>
                <div className='w-[40vw] '>
                    Product Name
                </div>
                <div className=' flex pl-[2.5vw] w-[20vw]  '>
                    Unit Price
                </div>
                <div className='w-[17.5vw] '>
                    Stock Status
                </div>
            </div>
                <hr className=' border-t border-gray-600 w-[96vw] mx-[1vw] h-[0.2vw]' />
            </div>
    </div>
  )
}

export default WishHead