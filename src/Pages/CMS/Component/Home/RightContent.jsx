import React from 'react'
import TotalList from './TotalList'
import TopSelling from './TopSelling'


const RightContent = ({ordersList,products,users}) => {
  return (
    <div style={{fontStyle:"DM Sans"}} className='col-span-3' >
        <TotalList orders={ordersList} users={users} products={products} />
        <TopSelling orders={ordersList} users={users} />
       
    </div>
  )
}

export default RightContent