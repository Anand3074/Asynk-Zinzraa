import React from 'react'
import ProductList from '../../Components/ProductDisplay/ProductList'
const Dresses = () => {
  return (
    <div>
          <div id='right' className='w-[75vw] flex flex-col'>
            <div className='flex flex-row justify-center gap-[5vw] mb-[2vw]'>
              <div className=''>
                <ProductList categoryToRender='Dresses'/> 
              </div>
           </div>
          </div>
        </div>

  )
}

export default Dresses