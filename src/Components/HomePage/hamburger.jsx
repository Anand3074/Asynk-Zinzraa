import React from 'react'
import {Link} from 'react-router-dom'

const hamburger = () => {
  return (
    <div>
         <div className='sm:hidden block absolute top-20vw text-white font-bold font-[playfair] text-[5vw] z- w-full left-0 right-0 bg-teal-dark transition'>
            <ul className="text-center text-x1 p-20">
                <Link to="/" >
                    <li className='my-4 pt-4  hover:rounded'>Products</li>
                </Link>
                <Link to="/Auth">
                    <li className='my-4 py-4  hover:rounded'>Saree</li>
                </Link>
                <Link to="/Kurtas">
                    <li className='my-4 py-4  hover:rounded'>Kurtas</li>
                </Link>
                <Link to="/Dresses">
                    <li className='my-4 py-4  hover:rounded'>Dresses</li>
                </Link>
                <Link to="/UserProfile">
                    <li className='my-4 py-4 border-b border-teal-dark hover:rounded'>Contact us</li>
                </Link>

            </ul>


        </div>
    </div>
  )
}

export default hamburger