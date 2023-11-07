import React from 'react'
import K3 from '../assets/k3.png'
import {ImBin2} from 'react-icons/im'
const WishItem = () => {
const Products = {
    name:'Product Name',
    qty:'2',
    size: 'M',
    iniPrice: '$5849',
    oldPrice: '$8956',
    orderDay: 'Dec 5, 2022'
}

  return (
<div className='flex flex-col m-[1.5vw]'>
    <div className='flex flex-row'>
        <div className='w-[13.5vw]'>
            <img src={K3} alt='' className='w-[11vw] h-[14vw] rounded-[1vw]'/>
        </div>
        <div className='flex flex-col items-start font-poppins w-[20vw] justify-center' id='product-detail'>
            <div className='mb-[0.3vw] text-[1.84vw]'>
                {Products.name}
            </div>
            <div className='mb-[0.3vw] text-[#454545] text-[1.3vw]'>
                Qty: {Products.qty}
            </div>
            <div className='mb-[0.6vw] text-[#454545] text-[1.3vw]'>
                Size: {Products.size}
            </div>
            <div className='flex pl-[8.5vw] justify-center '>
                <ImBin2 className='w-[2vw] h-[2vw] text-red-700'/>
            </div>
        </div>
        <div className='flex flex-row font-semibold justify-center items-center gap-[2vw] w-[15vw]'>
            <div className='text-[2vw]'>{Products.iniPrice}</div>
            <div className='text-red-500 text-[1.2vw] line-through'>{Products.oldPrice}</div>
        </div>
        <div className='w-[15vw] text-[#04C500] text-[1.3vw] font-semibold font-poppins flex
         justify-center items-center ml-[5vw]'>
            In Stock
        </div>
        <div className='flex flex-col justify-center items-center ml-[6vw]'>
            <div className='text-[1.2vw]'>Added on {Products.orderDay}</div>
            <button className=' bg-teal-dark font-semibold font-poppins text-white  w-[15vw]  h-[3vw]
                     text-[1.2vw]   rounded-[0.4vw] '>
                        Add to Cart
            </button>
        </div>
    </div>
    <hr className=' border-t border-gray-600 w-[100vw] h-[0.2vw] mt-[1vw]' />
</div>
  )
}

export default WishItem