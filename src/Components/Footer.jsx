import React from 'react'
import logo from '../assets/logo.png'
import {Link } from 'react-router-dom'
import Instagram from "../assets/instagram.png"
import Linkedin from "../assets/linkedin.png"
import Facebook from "../assets/facebook.png"

const Footer = () => {
    const contact = {
        title: 'Follow us on Social media',
        email: 'Zinzraa@gmail.com',
        phone: '+91 1234-4567-890',
        Address: 'abc, abc road, Ahmdebad-398475, Gujarat, India'
    }
    const ImpLink = {
        title:'Important links',
        field1: 'My Profile',
        field2: 'My Orders',
        field3: 'Refund Policy',
        field4: 'Privacy Policy',
        field5: 'Terms and Conditions',
    }
    const ShopCategory = {
        title:'Shop by Category',
        field1: 'Western',
        field2: 'Ethnic',
        field3: 'Sarees',
        field4: 'Kurta',
        field5: 'Dresses',
    }

    return(
      <div className='bg-teal-dark sm:h-[43vw]'>
        <div className='m-[1.5vw] text-white'>
          <div className='flex justify-center items-center sm:h-[9vw]'>
              <img src={logo} alt='' className='mt-[5vw] sm:mt-[3vw] w-[40vw] md:ml-[3.5vw] h-[20vw] sm:w-[17vw] sm:h-[8vw]'/>
          </div>
          <div id='col-links' className='flex flex-col sm:flex-row gap-[6vw] mt-[7vw]  sm:mx-0 sm:mt-[3vw]'>
            
            <div className='flex flex-col  ml-[22.5vw] mr-[18vw] sm:mx-0 sm:w-[32vw] sm:h-[17vw] 
            sm:text-[1.6vw] md:-w-[35vw]'>
              <ul className=' sm:mx-[0vw]  '>
                <li className='sm:text-[2.2vw] text-[4.5vw] flex justify-start 
                font-semibold pl-[1.5vw] mb-[2vw]'>Follow us on Social media</li>
                <li className='flex justify-start pl-[1.5vw] sm:text-[1.5vw]'>Email: Zinzraa@gmail.com</li>
                <li className='flex justify-start pl-[1.5vw] sm:text-[1.5vw]'>Contact: +91 1234-4567-890</li>
                <li className='flex justify-start pl-[1.5vw] wrap sm:text-[1.5vw]'>Address: abc, abc road, Ahmdebad-398475, Gujarat, India</li>
                <li className='flex justify-start pl-[1.5vw] sm:text-[1.5vw]'>
                <div className='flex items-center my-3 mx-5  sm:justify-start justify-center' >
                  <img className='xl:w-[40px] lg:w-[40px] w-[30px] mr-8 my' src={Instagram} alt="" />
                  <img className='xl:w-[40px] lg:w-[40px] w-[30px] mr-8 my' src={Facebook} alt="" />
                  <img className='xl:w-[40px] lg:w-[40px] w-[30px] mr-8 my' src={Linkedin} alt="" />
                </div>
                </li>
              </ul>
            </div >

            <div className='flex flex-col mx-[35vw] w-[40vw] md:pl-[8vw]  sm:mx-0 sm:w-[32vw] 
            sm:h-[17vw] md:w-[28vw]' >
               <ul className=' sm:mx-[0vw] '>
                <li className='flex 
                 sm:text-[2.2vw] text-[4.5vw] font-semibold mb-[1.5vw]'>Important Links</li>
                <Link to='/User'><li className='flex font-normal
                 justify-start  md:mx[1vw] sm:text-[1.5vw]'>My Profile</li></Link>
                <li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>My Orders</li>
                <li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>Refund Policy</li>
                <li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>Privacy Policy</li>
                <li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>Terms & Conditions</li>
              </ul>
           </div>
           <div className='flex flex-col md:pl-[6.5vw] mx-[35vw] justify-start sm:mx-0 sm:w-[30vw]
            sm:h-[17vw]   md:-w-[20vw] w-[40vw]'>
              <ul className=' sm:mx-[0vw] '>
                <li className='sm:text-[2.2vw] text-[4.5vw] mb-[1.5vw] font-semibold'>Shop By Category</li>
                <Link to='/Dresses'>
                   <li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>
                  Western</li></Link>
                <Link to='/Dresses'><li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>
                  Ethnic</li></Link>
                <Link to='/Sarees'><li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>
                  Saree</li></Link>
                <Link to='/Kurtas'><li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>
                 Dresses </li></Link>
                  <Link to='/Kurtas'><li className='flex sm:text-[1.5vw] text-[3.5vw] font-normal
                 justify-start  md:mx[1vw]'>
                  Kurtas</li></Link>
                {/* <Link to='/Dresses'><li className='flex sm:text-[1.6vww] text-[2.5vw] font-normal
                 justify-start  md:mx[1vw]'>
                  {ShopCategory.field5}</li></Link> */}
              </ul>
           </div>
        </div>
        <div className='sm:text-[1.5vw] text-[3vw] mt-[5vw]'>
        <div className='flex justify-center items-center '>
             We accept all major credit cards / debit cards and Netbanking
        </div>
        <div className="">
          <hr className="border-t border-gray-500 mt-[1vw]"/>   
        </div>
        <div className='flex justify-center items-center sm:mt-[1.2vw] mt-[3vw] sm:text-[1.5vw] text-[3vw] '>
          © 2023 Zinzraa Fashion Pvt. Ltd. All Rights Reserved
        </div>
        </div>
        </div>
      </div>
    )
  
  
  
  }
  export default Footer