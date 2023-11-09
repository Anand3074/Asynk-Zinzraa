import React from 'react'
import WishItem from './WishItem.jsx'
import { Link } from 'react-router-dom'
import EmptyWish from './EmptyWish.jsx'
import WishHead from './WishHead.jsx'
// const CartList = ({WishItem,totalItemPrice,setTotalItemPrice,setTotalRealItemPrice}) => {
   
    const WishProducts= () => {

    let WishArray =[
        {
        name:'Product Name',
        qty:'2',
        size: 'M',
        iniPrice: '$5849',
        oldPrice: '$8956',
        orderDay: 'Dec 5, 2022'
        
        },
        {
        name:'Product Name',
        qty:'2',
        size: 'M',
        iniPrice: '$5849',
        oldPrice: '$8956',
        orderDay: 'Dec 5, 2022'
        
        },
        {
        name:'Product Name',
        qty:'2',
        size: 'M',
        iniPrice: '$5849',
        oldPrice: '$8956',
        orderDay: 'Dec 5, 2022'
        
        },
    ]
 return(
    <div className='' >
        <div>
            <WishHead/>
        </div>
                    {
                        WishArray.length !==0 ? (
                            WishArray.map((item)=>(
                        <div>
                              {/* <CartItem setTotalRealItemPrice={setTotalRealItemPrice}
                              setTotalItemPrice={setTotalItemPrice} 
                              totalItemPrice={totalItemPrice} product={item} />    */}
                              
                              <WishItem/>
                              
                        </div>
                            ))
                        ):
                        (
                          <EmptyWish/>
                        )
                    }
                </div>
  )
}

export default WishProducts
 
    