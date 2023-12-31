import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({product, removeItemFromCart, moveToWishlist}) => {
    console.log(product)

  return (
    <div className='flex justify-center items-center sm:w-[50vw] m-[2vw]'>
        <div className='flex flex-row gap-[10vw] sm:gap-[1vw] '>
            <div>
                <img src={product.coverImage} alt='' className='w-[18vw] sm:w-[8vw] sm:h-[10vw] h-[22vw]'/>
            </div>

            <div className='flex flex-col sm:text-[1.2vw] text-[2.2vw]'>
                <div className=''>{product.description}</div>
                <div className=''>Size: </div>
                <div className='flex flex-col'>
                   <div>
                    Rs. {(product.price)}
                    </div>
                    <div className='text-red-400 sm:text-[1vw] text-[1.6vw] line-through'>
                    Rs.{Math.floor((product.price) * (1 + 43 / 100))}
                    </div>
                </div>
                <p className=''>Delivered on </p>
                <div className='flex flex-row'>
                    <div className='w-[2vw] h-[5vw] mr-[15vw]'>Qty: <input type='number'
                      /></div>
                     <div>
                        <button className='text-red-600 mr-[2vw]' onClick={removeItemFromCart}>
                            Delete
                        </button>
                    </div>
                    <div>
                        <button  onClick={moveToWishlist}className='text-blue-600  '>
                            Move to Wishlist
                        </button>
                    </div>
                </div>
                <Link to='/Wishlist'><div className='flex text-blue-700 justify-end items-end'>+Add From Wishlist</div></Link>
            </div>
        </div>
        {/* <div className='mt-[12vw] sm:mt-[0vw]'>
         <button className='bg-transparent text-blue-600 text-[1.8vw]'>Add Review</button>
        </div> */}
    </div>
  )
}

export default CartItem
// import React from "react"
// import { useDispatch } from 'react-redux';
// import { deleteFromCart } from '../../Redux/CartSlice';

// const CartItem = ({title, price, imageUrl, category, description,products}) => {
//     const dispatch = useDispatch();

//     const handleDelete = () => {
//       // Dispatch the deleteFromCart action with the item's id
//       dispatch(deleteFromCart(products.id));
//     };