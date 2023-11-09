import React from 'react'
import Sz1 from '../../assets/sz1.png'
import ProductChart from './ProductChart'

const Productsize = ({}) => {
    const Products = {
        DisplayItems : Sz1
    }
    
  return (
    <div>
        <div className=''>
            <div className='flex sm:flex-row flex-col '>
                <div className='flex flex-row justify-center'>
                    <div>
                        <div className='flex flex-col mr-[1.2vw]'>
                            <div>
                                <img src={Products.DisplayItems} className='sm:h-[17vw] sm:w-[16vw] h-[25.7vw] w-[21] mb-[2vw] '/>
                            </div>
                            <div>
                                <img src={Products.DisplayItems} className='sm:h-[17vw] sm:w-[16vw] h-[25.7vw] w-[21] mb-[2vw]'/>
                            </div>
                            <div>
                                <img src={Products.DisplayItems} className='sm:h-[17vw] sm:w-[16vw] h-[25.7vw] w-[21] '/>
                            </div>
                        </div>
                    </div> 
                    <div className='h-[83vw] sm:h-[55vw] sm:w-[50vw] w-[70vw]'>
                        <img src={Products.DisplayItems} className='h-[81vw] sm:h-[55vw] sm:w-[50vw] w-[70vw]'/>
                    </div>
                </div>
{/* Image above  */}
            <div><ProductChart/></div>
            </div>
        </div>
    </div>
  )
}

export default Productsize