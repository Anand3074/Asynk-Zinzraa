import React from 'react'
import WishProduct from '../Components/Wishlist/WishProducts'
import WishHead from '../Components/Wishlist/WishHead'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Components/Footer'
import EmptyWish from '../Components/Wishlist/EmptyWish'

const Wishlist = () => {
  const Wishlist = useSelector((state) => state.wishlist.wishlistItems);

  return (

    <div>
      { Wishlist.length!==0 ? (
        <div style={{fontStyle:"DM Sans"}} className=''>

        <div className='mt-[1vw] ' >
            <WishHead Wishes={Wishlist.length}/>
             <div className='flex flex-col sm:flex-row mb-[20vw] '>
                <div className='flex justify-center items-center'>
                    <WishProduct className=''/>
                </div>
             </div>
             <div className='mt-[20vw]'>
             <Footer />

             </div>
        </div> 
        </div>):
      (<div>
                <EmptyWish/>
      </div>
      )}
    </div>
  )
}

export default Wishlist