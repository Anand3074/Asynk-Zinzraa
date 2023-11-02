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
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import colr1 from '../assets/colr1.png'
import colr2 from '../assets/colr2.png'
import colr3 from '../assets/colr3.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'


const Products = () => {

  const Group1 = {
    title:"Best Collections",
    icon : ele1,
    Products : [
      {
          image : Card1,
          specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
          price : '$6500',
          oldprice : '$8999'},
      {
          image : Card2,
          specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$8066'}, 
      {
          image : Card3,
          specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$7566'
  
      }]

  }
  const Group2 = {
    title:"Recommended for you",
    icon : ele1,
    Products : [
      {
          image : c1,
          specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
          price : '$6500',
          oldprice : '$8999'},
      {
          image : c2,
          specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$8066'}, 
      {
          image : c3,
          specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$7566'
  
      }]

  }
  const Group3 = {
    title:"Watch and Shop",
    icon : ele1,
    Products : [
      {
          image : Card1,
          specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
          price : '$6500',
          oldprice : '$8999'},
      {
          image : Card2,
          specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$8066'}, 
      {
          image : Card3,
          specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$7566'
  
      }]

  }
  const Group4 = {
    title:"Colors of India",
    icon : ele1,
    Products : [
      {
          image : colr1,
          specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
          price : '$6500',
          oldprice : '$8999'},
      {
          image : colr2,
          specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$8066'}, 
      {
          image : colr3,
          specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
          price : '$6500',
          oldprice : '$7566'
  
      }]

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
      <Collections group={Group4}/>
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
    
    