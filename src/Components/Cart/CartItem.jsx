import React from 'react'
import C1 from '../../assets/c1.png'
import { useSelector,useDispatch } from 'react-redux'
import {removeItemsFromCart} from '../../actions/cartActions'


const CartItem = ({product,totalItemPrice,setTotalItemPrice,setTotalRealItemPrice}) => {
    // const dispatch = useDispatch();
   const removeItemFromCart = () =>{
       dispatch(removeItemsFromCart(product.product))
       setTotalItemPrice((prev)=>(prev-Number(product.price)))
       setTotalRealItemPrice((prev=>(prev-Number(product.realPrice))))
   }
  return (
    <div className='flex justify-center items-center sm:w-[50vw] m-[2vw]'>
        <div className='flex flex-row gap-[10vw] sm:gap-[1vw] '>
            <div>
                <img src={product} alt='' className='w-[18vw] sm:w-[8vw] sm:h-[10vw] h-[22vw]'/>
            </div>

            <div className='flex flex-col sm:text-[1.2vw] text-[2.2vw]'>
                <div className=''>{product}</div>
                <div className=''>Size: {product}</div>
                <div className='flex flex-row'>
                   <div>
                    Rs. {product}
                    </div>
                    <div>
                        {product}
                    </div>
                </div>
                <p className=''>Delivered on {Date}</p>
                <div className='flex flex-row'>
                    <div className='w-[2vw] h-[5vw] mr-[15vw]'>Qty: <input type='number'
                      /></div>
                     <div>
                        <button className='text-red-600 mr-[2vw]' onClick={removeItemFromCart}>
                            Delete
                        </button>
                    </div>
                    <div>
                        <button className='text-blue-600  ' onClick={removeItemFromCart}>
                            Move to Wishlist
                        </button>
                    </div>
                </div>
                <div className='flex text-blue-700 justify-end items-end'>+Add From Wishlist</div>
            </div>
        </div>
        {/* <div className='mt-[12vw] sm:mt-[0vw]'>
         <button className='bg-transparent text-blue-600 text-[1.8vw]'>Add Review</button>
        </div> */}
    </div>
  )
}

export default CartItem