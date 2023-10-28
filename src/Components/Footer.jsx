import React from 'react'
import logof from '../assets/logof.png'

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
    <div className='flex w-full h-[436px] bg-teal-dark '>
            <div className='w-[1170px] h-[404px] ml-[55px] mr-[55px]'>
                <div className='flex items-center justify-center'>
                    <img src={logof} className='mt-[16px] w-[204px] h-[88px]'/>    
                </div>
                <div className='flex mt-[29px] space-between gap-[123px] text-white justify-end '>
                    <div className='flex flex-1' >
                        <ul className='justify-end'>
                            <li>{contact.title}</li>
                            <li>Email: {contact.email}</li>
                            <li>Contact:{contact.phone}</li>
                            <li>Address: {contact.Address}</li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='flex flex-1 w-[217px]' >
                        <ul className='justify-center items-center'>
                            <li>{ImpLink.field}</li>
                            <li>{ImpLink.field1}</li>
                            <li>{ImpLink.field2}</li>
                            <li>{ImpLink.field3}</li>
                            <li>{ImpLink.field4}</li>
                            <li>{ImpLink.field5}</li>
                        
                        </ul>
                    </div>
                    <div className='flex flex-1' >
                        <ul className='justify-center'>
                            <li>{ShopCategory.field}</li>
                            <li>{ShopCategory.field1}</li>
                            <li>{ShopCategory.field2}</li>
                            <li>{ShopCategory.field3}</li>
                            <li>{ShopCategory.field4}</li>
                            <li>{ShopCategory.field5}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center text-white mt-[21px]'>
                    We accept all major credit cards / debit cards and Netbanking
                </div>
                <div className="w-[1170px] mx-auto">
                    <hr className="my-6 border-t border-gray-300 mt-[16px]" />   
                </div>
                <div className='flex justify-center text-white mt-[17px]'>
                © 2023 Zinzraa Fashion Pvt. Ltd. All Rights Reserved
                </div>

            </div>
    </div>
  )
}

export default Footer