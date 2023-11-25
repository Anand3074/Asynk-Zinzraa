import React from 'react'
import ProductList from '../../Components/ProductDisplay/ProductList'


const Ethnic = () => {
  return (
    <div>
          <div id='right' className='w-[75vw] flex flex-col'>
            <div className='flex flex-row justify-center gap-[5vw] mb-[2vw]'>
              <div className=''>
              <ProductList categoryToRender='Ethnic'/>
                 {/* Drown in the  traditional ethnic wears of Gujarat.  */}
              </div>
           </div>
          </div>
        </div>
  )
}

export default Ethnic