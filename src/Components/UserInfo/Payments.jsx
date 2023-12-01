import React from 'react'
import visa2 from '../../assets/visa2.png'
import PaymentCard from './PaymentCard'
import {IoIosAddCircleOutline} from 'react-icons/io'
import Address from './Address'

const Payments = () => {
  let Payment=[{
    // CardNo:"27984789273487238",
    CardNo:"***************",
    pin:4321,
    ValidThru:'12/28',
    Address:'A, G-30, English apartment, Mumbai, India',
    new1: 'Add New Card',
    new2: 'Addd New Address'
  }]

  
  const EmptyCard = () => {
    return (
        <div>
        <div className='w-[35vw] flex justify-center items-center h-[20vw] border-[#8DD3BB] border-[2px] border-dotted rounded-[2vw] '>
              <div className='flex justify-center items-center  flex-col '>
              <div><IoIosAddCircleOutline className='w-[4vw] h-[4vw] text-[#8DD3BB]'/></div>
                <div className='flex  text-[1.3vw]  flex wrap leading-[3.5vw] '>
                  <p>{Payment[0].new1}</p>
                  </div>
            </div>
          </div>
    </div>
    )
  }
  const EmptyAddress = () => {
    return (
        <div>
        <div className=' flex justify-center items-center w-[35vw] h-[20vw] border-[#8DD3BB] border-[2px] border-dotted rounded-[2vw] '>
              <div className='flex justify-center items-center flex-col '>
              <div><IoIosAddCircleOutline className='w-[4vw] h-[4vw] text-[#8DD3BB]'/></div>
                <div className='flex  text-[1.3vw]  flex wrap leading-[3.5vw] '>
                  <p>{Payment[0].new2}</p>
                  </div>
            </div>
          </div>
    </div>
    )
  }
  
  return (
    <div className='mx-[2vw] md:mx-[1vw]'>
      <div className='flex flex-col'>
      <div className=' mt-[0.5vw]  ml-[1.5vw] text-[2vw] font-semibold'>Payment Methods</div>

        <div className='flex flex-row gap-[5vw] mt-[3vw] ml-[3vw]' id='PAyment-detail'>
          <div>
              <PaymentCard Payment={Payment}/>
            </div>
            <div>
              <EmptyCard/>
            </div>
        </div>
        <div className='w-[10vw] mt-[1.5vw]  ml-[3vw] text-[2vw] font-semibold'>Address</div>
        <div className='flex flex-row gap-[5vw] mt-[3vw] ml-[3vw]' id='PAyment-detail'>
          <div>
              <Address Payment={Payment}/>
            </div>
            <div>
              <EmptyAddress/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Payments