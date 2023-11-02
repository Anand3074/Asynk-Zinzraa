import React from 'react'
import elestar from '../assets/ele1.png'
import Cards from './Cards'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'

const Collections = ({group}) => {
  const  Product1 = {
        image : Card1,
        specific : "Daisy Grey Silk Fabricated Saree With Mirror Work ",
        price : '$6500',
        oldprice : '$8999'

    }
    const Product2 = {
        image : Card2,
        specific : "Daisy Purple Silk Fabricated Saree With Mirror Work",
        price : '$6500',
        oldprice : '$8066'

    } 
    const Product3 = {
        image : Card3,
        specific : "Daisy Green Silk Fabricated Saree With Mirror Work",
        price : '$6500',
        oldprice : '$7566'

    }


  return (
    <div>
        <div>
            <div className='flex justify-center'>
                <img src={group.icon} alt='' className='w-[10px] md:w-auto '/>
            </div>
            <div className='flex justify-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                <span>{group.title}</span>
            </div>
            <div className='flex flex-row space-between md:gap-[32px] gap-[11px] justify-center'>
                <div>
                    <Cards Products={Product1}/>
                </div>
                <div>
                    <Cards Products={Product2}/>
                </div>
                <div>
                    <Cards Products={Product3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections