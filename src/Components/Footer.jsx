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
        field5: 'Terms and COnditions',
    }
    const ShopCategory = {
        title:'Shop by Category',
        field1: 'western',
        field2: 'Ethnic',
        field3: 'Sarees',
        field4: 'Kurta',
        field5: 'Dresses',
    }
  return (
    <div className='flex w-full md:h-[436px] h- bg-teal-dark justify-center'>
            <div className='md:w-[1170px] flex flex-col md:h-[404px] md:ml-[55px] md:mr-[55px] justify-center'>
                <div className='md:flex  justify-center'>
                    <img src={logof} className=''/>    
                </div>
                <div className='flex flex-col md:flex-row mt-[29px]  md:gap-[123px]  text-white  justify-center md:justify-end '>
                    <div className='flex justify-center' >
                        <ul className='md:justify-end justify-center mb-[25px]' >
                            <li>{contact.title}</li>
                            <li>Email: {contact.email}</li>
                            <li>Contact:{contact.phone}</li>
                            <li>Address: {contact.Address}</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='flex md:w-[217px] justify-center mb-[25px]' >
                        <ul className='justify-center items-center '>
                            <li className='justify-center'>{ImpLink.title}</li>
                            <li className='justify-center'>{ImpLink.field1}</li>
                            <li className='justify-center'>{ImpLink.field2}</li>
                            <li className='justify-center'>{ImpLink.field3}</li>
                            <li className='justify-center'>{ImpLink.field4}</li>
                            <li className='justify-center'>{ImpLink.field5}</li>
                        
                        </ul>
                    </div>
                    <div className='flex  justify-center mb-[25px]' >
                        <ul className='flex flex-col'>
                            <li className='justify-center'>{ShopCategory.title}</li>
                            <Link to='/Dresses'> <li className='justify-center'>{ShopCategory.field1}</li></Link>
                            <li className='justify-center'>{ShopCategory.field2}</li>
                            <li className='justify-center'>{ShopCategory.field3}</li>
                            <li className='justify-center'>{ShopCategory.field4}</li>
                            <li className='justify-center'>{ShopCategory.field5}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center text-white md:mt-[21px] mb-[25px]'>
                    We accept all major credit cards / debit cards and Netbanking
                </div>
                <div className="md:w-[1170px] mx-auto mb-[25px]">
                    <hr className="my-6 border-t border-gray-300 md:mt-[16px]" />   
                </div>
                <div className='flex justify-center text-white md:mt-[17px]'>
                © 2023 Zinzraa Fashion Pvt. Ltd. All Rights Reserved
                </div>

            </div>
    </div>
  )
}

export default Footer