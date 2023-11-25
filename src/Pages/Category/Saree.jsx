import React from 'react'
import ProductList from '../../Components/ProductDisplay/ProductList'


const Saree = () => {
  return (
    <div>
        <div>
          <div id='right' className='w-[75vw] flex flex-col'>
            <div className='flex flex-row justify-center gap-[5vw] mb-[2vw]'>
              <div className=''>
                <ProductList categoryToRender='Saree'/>
                 {/* Sarees made from hand-woven artisans and varieties from banaras , Knajipuram, Paithani, Nauvari. */}
              </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Saree