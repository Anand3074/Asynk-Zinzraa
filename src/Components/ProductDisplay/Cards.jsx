import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {IoEllipse} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useState, useContext  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import myContext from '../../context/myContext';
// import { ADD_TO_CART } from '../../Redux/CartSlice'


// const Cards = ({title, price, imageUrl, category, description, date, addCart, addWish, isWishlisted, Detail}) => {
    const Cards = ({products, addCart, addWish, isWishlisted, Detail, title, price, imageUrl, category, description}) => {

        const diagonalStrikethrough = {
            position: 'relative',
          };
          
          const diagonalLine = {
            content: "''",
            position: 'absolute',
            top: '50%',
            left: '0',
            width: '100%',
            height: '1.5px',
            backgroundColor: 'red', // Change the color as needed
            transform: 'rotate(-15deg)',
          };
// const context = useContext(myContext);
    // const { product } = context;
    const [isHovered, setIsHovered] = useState(false);


// const context = useContext(myContext);
    // const { product } = context;
  return (
    
        <div data-aos='zoom-out'
        className='w-[30vw] h-[48vw] md:w-[20vw] rounded-[1.5vw] bg-[#fafafa]
        my-[2vw] md:my-[0vw] md:h-[31.5vw] shadow-xl dark:shadow-xl
        transition transform duration-3000 ease-in-out
        md:scale-y-95 md:scale-x-95 md:opacity-100  scale-y-0 opacity-0 hover:scale-100'
        onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)} >
        <div className='' id='container'>
            <div className='flex relative'>
                <div className='mb-[0.25vww]'>
                {/* <Link to='/Detail'><img src="" alt='' */}
                <Link to='/Detail'>
  <img
    src={products.coverImage}
    onClick={Detail}
    alt='Product image'  className='
      object-cover
      md:w-[20vw] w-[30vw]
      object-top
      h-[37vw] md:h-[25vw]
      rounded-[1vw]
      overflow-hidden
      transition transform duration-3000 ease-in-out
      md:scale-y-100 md:scale-x-100 md:opacity-100  scale-y-0 opacity-0 hover:scale-100 
    '
    onLoad={(e) => e.target.classList.add("scale-y-100", "opacity-100")}
  />
</Link>
            {isHovered && (
                    <div className='absolute transition bottom-[0vw] sm:top-[8vw] md:right-[0vw] md:top-[22vw] 
                    items-start'>
                    <button
                        onClick={addCart}
                        className='transition  duration-400 hover:md:text-[1.55vw] bg-teal-dark hover:bg-opacity-[90%] 
                         font-semibold font-playfair text-white w-[46vw] md:w-[20vw] h-[4.5vw] md:h-[3vw]
                         text-[2.5vw] md:text-[1.5vw] rounded-[0.4vw] md:rounded-[1.5vw]'>
                        <div>
                        Add to Cart
                        </div>
                    </button>
                    </div>
                )}
                </div>
                {/* <div className='' onClick={handleAddToWishlist}> */}
                <div className='' onClick={addWish}>
                    <div className='absolute z-50 right-[2vw] md:right-[1vw] top-[1vw]'>
                    {/* <div  className='absolute z-50 right-[2vw] top-[1vw]'> */}
                        < IoEllipse className='w-[3.5vw] h-[3.5vw] '
                    fill={isWishlisted ? '#fce4ec' : 'white'}/> 
                    </div>
                    <div className='absolute z-100 right-[2.5vw] md:right-[2.05vw] top-[2.05vw]'>
                        <FiHeart  className='w-[1.7vw] h-[1.7vw] md:w-[1.45vw] md:h-[1.45vw] text-[#e91e63]'
                        // fill='none'/>
                         fill={isWishlisted ? '#e91e63' : 'none'}/> 
                        </div>
                </div>
            </div>
            {/* <div className='relative  rounded-[0.3vw]'>
                <div className='px-[0.5vw] leading-[1.8vw] font-metro sm:leading-[1.5vw] 
                sm:leading-[1.35vw]'>
            <div className='flex text-black  wrap overflow-hidden h-[4.5vw]  md:h-[2vw]
            justify-start
            text-[1.6vw] sm:text-[1.4vw] sm:h-[1.8vw] mt-[0.5vw]'>
                {products.description} 
            </div>
            <div className='flex  flex-row md:justify-start items-center pb-[0.5vw] '>
                <div className='font-bold mr-[2vw] font-lora text-[2vw]
                md:text-[1.55vw]'>
                        ₹{products.price }     
                </div>
                <div className='flex text-red-400 font-bold font-lora justify-center items-center
                    line-through text-[1.6vw]  md:text-[1.55vw]'>
                        ₹{Math.floor(products.price* (1 + 43 / 100))}
                </div>
            </div>
            </div>
                <div className='absolute   md:top-[5.3vw] 
                top-[7vw] items-start'>
                    <button onClick={addCart} className=' bg-teal-dark font-semibold 
                    font-metro text-white  w-[30vw] md:w-[20vw]  h-[4vw] md:h-[3vw]
                     text-[2vw] md:text-[1.2vw]  rounded-[0.4vw] pt-[0.5vw] '>
                        Add to Cart
                    </button>
                </div>
            </div> */}
              <div className='  rounded-[0.3vw]'>
                <div className='px-[1vw] h-[3vw] leading-[3vw] md:leading-[1.35vw]'>
            <div className='text-black 
            justify-start font-[400] tracking-[0.5px]  truncate py-[0.25vw]
            text-[2.25vw] md:text-[14px] md:h-[1.8vw] mt-[0.5vw] font-metro '>
                {products.description} 
            </div>
            <div className='flex flex-row md:justify-start items-center pt-[1.25vw] pb-[0.5vw] px-[1vw]'>
            <span className="" style={diagonalStrikethrough}>
          <span style={diagonalLine}></span>
            <span className='text-[#455a64] font-[600] text-xl'>
            ₹{Math.floor(products.price* (1 + 43 / 100))}
            </span>
        </span>
                <div className='font-bold ml-[2vw] font-metro text-[3vw]
                md:text-[1.65vw] text-red-900'>
                        ₹{products.price }     
                </div>    
            </div>
            </div>
            
                
            </div>
        </div>
    </div>
  )
}

export default Cards
                        //  fill={wishClick ? 'red' : 'none'}/>
                        
