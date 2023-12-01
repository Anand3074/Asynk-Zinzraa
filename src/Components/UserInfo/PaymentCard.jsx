import React from 'react'
import {ImBin2} from 'react-icons/im'
import visa2 from '../../assets/visa2.png'

const PaymentCard = ({Payment}) => {
  return (
    <div>
        <div className='w-[35vw] h-[20vw] bg-[#8DD3BB] rounded-[2vw] '>
            <div className='flex flex-col'>
              <div className='flex  flex-row mt-[1.5vw] ml-[3vw]'>
                <div className='w-[10vw] text-[2vw] font-semibold'>
                  {Payment[0].CardNo}
                </div>
                <div className='flex '>
                  <button>
                          <ImBin2 className='w-[2vw] ml-[17vw] h-[2vw] text-slate-900'/>
                  </button>
                </div>
              </div> 
              <div className='ml-[3vw] text-[2vw] font-semibold'>
                {Payment[0].pin}
              </div>
              <div className='flex flex-row  text-[1.6vw] font-semibold ml-[3vw] mt-[6vw]'>
                <div className='w-[10vw]'>
                  <p>Valid Thru</p>
                  <p className='justify-center ml-[1vw]'>{Payment[0].ValidThru}</p>
                </div>
                <div className=' flex items-center'>
                  <img src={visa2} 
                  alt='card_type' className='w-[4vw] justify-center  ml-[16vw] h-[2vw]'/>
                </div>
              </div> 
            </div>
          </div>
    </div>
  )
}

export default PaymentCard