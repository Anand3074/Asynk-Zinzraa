import React from 'react'
import CartItem from './CartItem.jsx'
import { Link } from 'react-router-dom'
// const CartList = ({cartItems,totalItemPrice,setTotalItemPrice,setTotalRealItemPrice}) => {
   
    const CartList = () => {

    const CartProduct =[
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
    <div className='col-span-3 bg-white  xl:px-6 xl:py-8 rounded-[20px] ' >
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
                          <div className='flex items-center justify-center h-full flex-col ' >
                            <h3 className='text-[1.2rem]' >No Items in the Cart</h3>
                            <Link to="/shopAll" >
                            <button className='px-6 mt-3 rounded-[10px] py-3 bg-[#DE562C] text-white' >Shop Now</button>
                            </Link>
                            </div>
                        )
                    }
                    
                </div>
  )
}

export default CartList
 
    