import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@material-tailwind/react'

const CartItem = ({product, removeItemFromCart, moveToWishlist}) => {
    // console.log(product)
    const Date= '13th December, 2023'
    const Counter = () => {
        const [count, setCount] = useState(1);
      
        const increment = () => {
          setCount(count + 1);
        };
      
        const decrement = () => {
            (count === 1) ? '' : setCount(count - 1);
        };
      
        return (
          <div className="text-center w-[20vw] md:w-[12.5vw] md:w-[10vw]">
            <div className="flex flex-row md:w-[12.5vw] w-[20vw] gap-[1vw] md:gap-[1vw]
             justify-center item-center">

              <Button
                className="flex item-center  justify-center items-center text-white   w-[3vw]  
                h-[2.5vw] md:w-[5wv] h-[2.25vw] rounded text-[1.3vw] "
                onClick={increment}
              >
                +
              </Button>
              <h2 className="text-[3vw] md:text-[1.25vw] mb-4">{count}</h2>

              <Button
                className={` flex items-center  justify-center w-[3vw]  h-[2.5vw] md:w-[5wv] h-[2.25vw] text-white
                 rounded text-[1.3vw]`}
                onClick={decrement}
                disabled={count === 0}
              >
                -
              </Button>
            </div>
          </div>
        );
      };
   

  return (
    <div className='flex justify-start items-center sm:w-[50vw] m-[2vw] md:mx-[2vw] md:my-[0.75vw]'>
        <div className='flex flex-row gap-[10vw] sm:gap-[1vw] '>
            <div>
                <img src={product.coverImage} alt='' className='object-cover object-top w-[18vw] sm:w-[10vw] sm:h-[12vw] h-[22vw]'/>
            </div>

            <div className='flex flex-col gap-[0.75vw] sm:text-[1.2vw] text-[2.2vw]'>
                <div className=''>{product.description}</div>
                <div className=''>Size: </div>
                <div className='flex flex-row gap-[2.5vw] items-center'>
                   <div>
                    Rs. {(product.price)}
                    </div>
                    <div className='text-red-400 sm:text-[1vw] text-[1.6vw] line-through'>
                    Rs.{Math.floor((product.price) * (1 + 43 / 100))}
                    </div>
                </div>
                <div    className='flex flex-row justify-between'>
                <p className=''>Delivered on:  {Date}</p>
                <Link to='/Wishlist'>
                    <div className='text-blue-700 ml-[3vw]'>+Add From Wishlist</div></Link>
                </div>
                <div className='flex flex-row w-[15vw] md:w-[20vw]  mr-[5vw] md:mr-[2.5vw]'>
                    <div className='md:w-[5vw]  h-[2.5vw] '>Qty: </div>
                    <div>
                    <Counter/>
                    </div>
                     <div>
                        <button className='text-red-600 mr-[12vw] md:mr-[2vw] ml-[3vw] md:ml-[1.5vw] ' onClick={removeItemFromCart}>
                            Delete
                        </button>
                    </div>
                    <div>
                        <button  onClick={moveToWishlist}className='text-blue-600  w-[12vw]'>
                            Move to Wishlist
                        </button>
                    </div>
                </div>
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