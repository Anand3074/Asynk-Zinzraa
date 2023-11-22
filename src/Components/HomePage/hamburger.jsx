import React from 'react'
import {Link} from 'react-router-dom'

const hamburger = () => {
  return (
    <div>
         <div className='sm:hidden block absolute top-20vw text-white 
         font-bold font-[playfair] text-[5vw] z- w-full left-0 right-0 bg-teal-dark transition'>
            <ul className="text-center text-x1 p-[12vw]">
                <Link to="/" >
                    <li className='my-4 pt-4  hover:text- text-[#CC911D]'>Products</li>
                </Link>
                <Link to="/AddProduct">
                    <li className='my-4 py-4  hover:text- text-[#CC911D]'>Saree</li>
                </Link>
                <Link to="/UpdateProduct">
                    <li className='my-4 py-4  hover:text- text-[#CC911D]'>Kurtas</li>
                </Link>
                <Link to="/Dashboard">
                    <li className='my-4 py-4  hover:text- text-[#CC911D]'>Dresses</li>
                </Link>
                <Link to="/UserProfile">
                    <li className='my-4 py-4 border-b border-teal-dark hover:text- text-[#CC911D]'>Contact us</li>
                </Link>

            </ul>


        </div>
    </div>
  )
}

export default hamburger