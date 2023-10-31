import React from 'react'
import Hero from '../Components/Hero.jsx'
// import Cards from '../Components/Cards.jsx'
import Categ1 from '../Components/Categ1.jsx'


const Products = () => {
  return (
    <div> 
      <div>
          <Hero/>
      </div>
      <div className='md:mt-[54px]  mt-[18px]'>
          <Categ1/>
      </div>
      
    </div> 
  )
}

export default Products
    
    