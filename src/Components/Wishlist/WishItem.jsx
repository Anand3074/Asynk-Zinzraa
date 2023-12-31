import React from 'react'
// import K3 from '../../assets/k3.png'
import {ImBin2} from 'react-icons/im'
import { Link } from 'react-router-dom'
// import { removeItemFromWishlist } from '../../Redux/Wishlist/wishActions'
// import { useSelector,useDispatch } from 'react-redux'
// import {removeItemFromWishlist} from '../../actions/wishlistActions'


    // const dispatch = useDispatch();
   
const WishItem = ({product, date, addCart, removeItemFromWishlist}) => {
    console.log(product)
return (
<div className='flex flex-col m-[1.5vw]'>
    <div className='flex flex-row'>
        <div className='w-[13.5vw]'>
            <Link to='/Detail'>
            <img src={product.coverImage} alt='' className='w-[11vw] h-[14vw] rounded-[1vw]'/>

            </Link>
        </div>
        <div className='flex flex-col items-start font-poppins w-[25vw] justify-center' id='product-detail'>
            <div className='mb-[0.3vw] text-[1.84vw]'>
            <Link to='/Detail'>
                {product.description}
            </Link>
            </div>
            <div className='mb-[0.3vw] text-[#454545] text-[1.3vw]'>
                Qty:1
            </div>
            <div className='mb-[0.6vw] text-[#454545] text-[1.3vw]'>
                Size: M
            </div>
            <div className='flex pl-[8.5vw] justify-center '>
                {/* <button onClick={removeItemFromWishlist}> */}
                <button onClick={removeItemFromWishlist}>
                        <ImBin2 className='w-[2vw] h-[2vw] text-red-700'/>
                </button>
            </div>
        </div>
        <div className='flex flex-row font-[600] justify-center items-center gap-[2vw] w-[15vw] pl-[2vw]'>
            <div className='text-[2vw] md:text-[1.6vw]'>Rs.{product.price}</div>
            <div className='text-red-500 text-[1.2vw] md:text-[1.2vw] line-through'>Rs.
            {Math.floor(product.price * (1 + 43 / 100))}</div>
        </div>
        <div className='w-[15vw] text-[#04C500] text-[1.3vw] font-semibold font-poppins flex
         justify-center items-center ml-[3vw]'>
            In Stock
        </div>
        <div className='flex flex-col justify-center items-center ml-[6vw]'>
            <div className='text-[1.2vw]'>Added on</div>
            <button onClick={addCart} className='bg-teal-dark font-semibold font-poppins text-white  w-[15vw]  h-[3vw]
                     text-[1.2vw]   rounded-[0.4vw] '>
                        Add to Cart
            </button>
        </div>
    </div>
    <hr className=' border-t border-gray-600 w-[96vw]  h-[0.2vw] mt-[1vw]' />
</div>
  )
}

export default WishItem