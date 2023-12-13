import React from 'react'
import ProductList from '../../Components/ProductDisplay/ProductList'

const Western = ({size1, fabric1 , maxPrice1}) => {
  return (
    <div>
    <div id='right' className='w-[75vw] flex flex-col'>
      <div className='flex flex-row justify-center gap-[5vw] mb-[2vw]'>
        <div className=''>
        <ProductList categoryToRender='Western' sizef={size1} fabric={fabric1} maxPrice={maxPrice1}/>
           {/* Drown in the  traditional ethnic wears of Gujarat.  */}
        </div>
     </div>
    </div>
  </div>
  )
}

export default Western