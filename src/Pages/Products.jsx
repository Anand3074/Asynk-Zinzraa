import React from 'react'
// import { useState, useEffect } from 'react'
// import Hero from '../Components/Hero.jsx'
// import Hero1 from '../Components/Hero1.jsx'
// import Hero2 from '../Components/Hero2.jsx'
import Collections from '../Components/ProductDisplay/Collections.jsx'
import Recommended from '../Components/ProductDisplay/Recommended.jsx'
import Categ1 from '../Components/HomePage/Categ1.jsx'
import Wtrends from '../Components/HomePage/Wtrend.jsx'
import Kalki from '../Components/HomePage/kalki.jsx'
import Testimonial from '../Components/HomePage/Testimonial.jsx'
import Trusty from '../Components/HomePage/Trusty.jsx'
import Footer from '../Components/Footer.jsx'
import Carousel from '../Components/HomePage/Carousel.jsx'
import ele1 from '../assets/ele1.png'
import SliderCa from '../Components/HomePage/Slider.jsx'


const Products = () => {

  const Group1 = {
    title:"Best Collections",
    icon : ele1,
    // Products : [
    //   {
    //       image : Card1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : Card2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$8066'}, 
    //   {
    //       image : Card3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  const Group2 = {
    title:"Recommended for you",
    icon : ele1,
    // Products : [
    //   {
    //       image : c1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : c2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$7894',
    //       oldprice : '$8066'}, 
    //   {
    //       image : c3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  const Group3 = {
    title:"Watch and Shop",
    icon : ele1,
    // Products : [
    //   {
    //       image : Card1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : Card2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$8066'}, 
    //   {
    //       image : Card3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  const Group4 = {
    title:"Colors of India",
    icon : ele1,
    // Products : [
    //   {
    //       image : colr1,
    //       specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
    //       price : '$6500',
    //       oldprice : '$8999'},
    //   {
    //       image : colr2,
    //       specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$8066'}, 
    //   {
    //       image : colr3,
    //       specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
    //       price : '$6500',
    //       oldprice : '$7566'
  
    //   }]

  }
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div className=''>
        <Categ1/>
      </div>
      <div className='mt-[3vw] md:mt-[3vw]'>
      <SliderCa/>
      {/* <Recommended group={Group1}/> */}
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
        <Wtrends/>
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
        {/* <Recommended group={Group2}/> */}<SliderCa/>
      </div>
      <div className='mt-[3vw] md:mt-[1.5vw]'>
        <Kalki/>
      </div>
      <div>
      {/* <Recommended group={Group3}/>*/}
      <SliderCa/> 
      </div>
      <div>
      {/* <Recommended group={Group4}/> */}<SliderCa/>
      </div>
      <div className='mt-[1.5vw]'>
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
    
    