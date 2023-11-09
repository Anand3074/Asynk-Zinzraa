import React from 'react'
import CartItem from './CartItem.jsx'
import { Link } from 'react-router-dom'
// const CartList = ({cartItems,totalItemPrice,setTotalItemPrice,setTotalRealItemPrice}) => {
   
    const CartList = () => {

    let CartProduct = [
        {
            oldPrice:'$7382',
            ProductPrice : '$6665',
            Name:"India's Best Banarasi Sarees ",
            Size: 'M',
        
        },
        {
            oldPrice:'$7382',
            ProductPrice : '$6665',
            Name:"world's Best Kanjipuram Sarees ",
            Size: 'M',
        
        },
        {
            oldPrice:'$7382',
            ProductPrice : '$6665',
            Name:"India's Best Kanjipuram Sarees ",
            Size: 'M',
        
        },
    ]
 return(
    <div className='' >
                    {
                        CartProduct.length !==0 ? (
                            CartProduct.map((item)=>(
                        <div>
                              {/* <CartItem setTotalRealItemPrice={setTotalRealItemPrice}
                              setTotalItemPrice={setTotalItemPrice} 
                              totalItemPrice={totalItemPrice} product={item} />    */}
                              <CartItem/>
                              
                        </div>
                            ))
                        ):
                        (
                          <div className='flex items-center justify-center  flex-col ' >
                            <h3 className='text-[5vw]' >No Items in the Cart</h3>
                            <Link to="/Dresses" >
                            <button className='px-[3vw] m-[4vw] rounded-[2vw] py-[1vw] 
                            bg-teal-dark text-white' >Shop Now</button>
                            </Link>
                            </div>
                        )
                    }
                    
                </div>
  )
}

export default CartList
 
    