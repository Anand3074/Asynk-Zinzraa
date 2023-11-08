import React from 'react'
import logof from '../assets/logof.png'
import {Link } from 'react-router-dom'

const Footer = () => {
    const contact = {
        title: 'Follow us on Social media',
        email: 'Zinzraa@gmail.com',
        phone: '+91 1234-4567-890',
        Address: 'abc, abc road, Ahmdebad India, 1546'
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
        field1: 'western',
        field2: 'Ethnic',
        field3: 'Sarees',
        field4: 'Kurta',
        field5: 'Dresses',
    }

    return(
      <div className='bg-teal-dark sm:h-[42vw]'>
        <div className='m-[2vw] text-white font-poppins'>
          <div className='flex justify-center  items-center sm:h-[9vw]'>
              <img src={logof} alt='' className='mt-[2vw]'/>
          </div>
          <div id='col-links' className='flex flex-col sm:flex-row gap-[4vw] mt-[7vw] sm:mt-[3vw]'>
            <div className='flex flex-col items-center sm:w-[32vw] sm:h-[17vw] sm:text-[1.6vw]'>
              <ul className='mx-[15vw] sm:mx-[0vw] text-[3.5vw] sm:text-[1.5vw]'>
                <li className='sm:text-[2.2vw] text-[4vw] flex justify-center font-semibold'>{contact.title}</li>
                <li className='flex justify-center'>Email: {contact.email}</li>
                <li className='flex justify-center'>Contact:{contact.phone}</li>
                <li className='flex justify-center items-center'>Address: {contact.Address}</li>
                <li className='flex justify-center'></li>
              </ul>
            </div >
            <div className='flex flex-col justify-center items-center sm:w-[32vw] sm:h-[17vw] sm:text-[2vw]' >
               <ul className='mx-[15vw] sm:mx-[0vw] '>
                <li className='flex justify-center flex-center
                 sm:text-[2.2vw] text-[4vw] font-semibold'>{ImpLink.title}</li>
                <li className='flex justify-center flex-center'>{ImpLink.field1}</li>
                <li className='flex justify-center flex-center'>{ImpLink.field2}</li>
                <li className='flex justify-center flex-center'>{ImpLink.field3}</li>
                <li className='flex justify-center flex-center'>{ImpLink.field4}</li>
                <li className='flex justify-center flex-center'>{ImpLink.field5}</li>
              </ul>
           </div>
           <div className='flex flex-col justify-center items-center sm:w-[30vw] sm:h-[17vw] sm:text-[2vw]'>
              <ul className='mx-[15vw] sm:mx-[0vw] '>
                <li className='sm:text-[2.2vw] text-[4vw] font-semibold'>{ShopCategory.title}</li>
                <Link to='/Dresses'> <li className='flex justify-center'>{ShopCategory.field1}</li></Link>
                <li className='flex justify-center'>{ShopCategory.field2}</li>
                <li className='flex justify-center'>{ShopCategory.field3}</li>
                <li className='flex justify-center'>{ShopCategory.field4}</li>
                <li className='flex justify-center'>{ShopCategory.field5}</li>
              </ul>
           </div>
        </div>
        <div className='sm:h-[10vw] sm:text-[1.6vw] text-[3vw] mt-[3vw]'>
        <div className='flex justify-center items-center '>
             We accept all major credit cards / debit cards and Netbanking
        </div>
        <div className="">
          <hr className="border-t border-gray-500"/>   
        </div>
        <div className='flex justify-center items-center mt-[3vw] sm:text-[1.6vw] text-[3vw] '>
          © 2023 Zinzraa Fashion Pvt. Ltd. All Rights Reserved
        </div>
        </div>
        </div>
      </div>
    )
  
  
  
  }
  export default Footer