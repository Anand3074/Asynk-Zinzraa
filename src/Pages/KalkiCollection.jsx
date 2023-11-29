import React from 'react'
import WesternPost from '../Components/westernPost'
import Filtersss from '../Components/ProductDisplay/Filtersss'
import ProductList from '../Components/ProductDisplay/ProductList'

const KalkiCollection = () => {
  return (
    <div>
      <div className=''>
      <WesternPost/>
      </div>
        <div className='mt-[5vw] md:mt-[1vw]'>
        <div className='flex justify-center '>
          {/* <img src={elestar} alt='' className='w-[2vw] h-[2vw]'/> */}
        </div>
        <div className='flex justify-center text-[#875A33] font-lora text-[3vw]' >
            <span>Western</span>
        </div>
    </div>
    <div id='products-container-parent' className='flex flex-row'>
          <div className='w-[25vw] '>
            <Filtersss/>
          </div>
          <div id='right' className='w-[65vw] flex flex-col'>
            <div className='flex flex-row justify-center gap-[5vw] mb-[2vw]'>
              <div className='mx-[3vw]'>
              <ProductList categoryToRender='Western'/> 
              </div>
           </div>
          </div>
        </div>
    </div>
    
  )
}

export default KalkiCollection