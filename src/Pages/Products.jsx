import React from 'react'
import Hero from '../Components/Hero.jsx'
import Cards from '../Components/Cards.jsx'


const Products = () => {
  return (
    <div>
        <Hero/>
        
        <div className='flex flex-1 mt-[50px]' >
          <div className='flex flex-1 ml-[61px]'><Cards/></div>
          <div className='flex flex-1 ml-[32px]'><Cards/></div>
          <div className='flex flex-1 ml-[]32px'><Cards/></div>
        </div>
    </div>
  )
}

export default Products
    
    