import React from 'react'
import Hero from '../Components/Hero.jsx'
import Collections from '../Components/Collections.jsx'
import Categ1 from '../Components/Categ1.jsx'
import Wtrends from '../Components/Wtrend.jsx'
import Kalki from '../Components/kalki.jsx'
import Testimonial from '../Components/Testimonial.jsx'
import Trusty from '../Components/trusty.jsx'
import Footer from '../Components/Footer.jsx'
import ele1 from '../assets/ele1.png'
import ele2 from '../assets/ele2.png'


const Products = () => {

  const Group1 = {
    title:"Best Collections",
    icon : ele1
  }
  const Group2 = {
    title:"Recommended for you",
    icon : ele1
  }
  const Group3 = {
    title:"Watch and Shop",
    icon : ele1
  }

  return (
    <div>
      <div>
          <Hero/>
      </div>
      <div className='md:mt-[54px]  mt-[18px]'>
          <Categ1/>
      </div>
      <div className='md:mt-[56px] mt-[19px]'>
        <Collections group={Group1}/>  
      </div>
      <div className='md:mt-[68px]'>
        <Wtrends/>
      </div>
      <div className='md:mt-[56px] mt-[19px]'>
        <Collections group={Group2}/>  
      </div>
      <div>
        <Kalki/>
      </div>
      <div>
      <Collections group={Group3}/>
      </div>
      <div>
      <Testimonial/> 
      </div>
      <div>
        <Trusty/>
      </div>
      <div>
      <Footer/>
      </div>
    </div> 
  )
}

export default Products
    
    