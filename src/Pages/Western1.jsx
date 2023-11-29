import React from 'react'
import Fashion from '../Components/Fashion'
import Filtersss from '../Components/ProductDisplay/Filtersss'
// import elestar from '../../assets/ele1.png'
import ProductList from '../Components/ProductDisplay/ProductList'

const Western = () => {
  return (
    <div>
      <div>
      <Fashion/>
      </div>
    <div className='my-[2vw]'>
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

export default Western