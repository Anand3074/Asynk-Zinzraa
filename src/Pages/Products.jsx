import React from 'react'
import Hero from '../Components/Hero.jsx'
import Collections from '../Components/Collections.jsx'
import Categ1 from '../Components/Categ1.jsx'
import Wtrends from '../Components/Wtrend.jsx'
import Kalki from '../Components/kalki.jsx'



const Products = () => {
  return (
    <div> 
      <div>
          <Hero/>
      </div>
      <div className='md:mt-[54px]  mt-[18px]'>
          <Categ1/>
      </div>
      <div className='md:mt-[56px] mt-[19px]'>
        <Collections/>  
      </div>
      <div className='md:mt-[68px]'>
        <Wtrends/>
      </div>
      <div className='md:mt-[56px] mt-[19px]'>
        <Collections/>  
      </div>
      <div>
        <Kalki/>
      </div>
      <div>
      <Collections/>
      </div>
      
    </div> 
  )
}

export default Products
    
    