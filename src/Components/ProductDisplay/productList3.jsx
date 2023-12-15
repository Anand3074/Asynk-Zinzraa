import React from 'react'
import Cards from './Cards.jsx'
import { Link } from 'react-router-dom'
// import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

const ProductRight = ({ products}) => {

  return (
    
    <div>
    <div className='flex justify-start items-start flex-grow-1'>
    <Link to="/Cart">
      {/* <div className=''><ToastContainer/></div> */}
    </Link>
    <div className='grid md:grid-cols-3 grid-cols-2 ml-[3vw] mb-[0.5vw] gap-[2.5vw] justify-center items-center'>
    {
          products && products.map((product , index) => (
            // <Link to={`/product/${product.id}`} >
              <div key={index}>
                <Cards products={product} />
              </div>
          ))
        }
      </div>

    </div>
  </div>

  )
}

export default ProductRight