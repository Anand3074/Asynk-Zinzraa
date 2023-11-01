import React from 'react'
import Vec4 from '../assets/vec4.png'
import elestar from '../assets/ele1.png'
import grpstr from '../assets/grpstr.png'

const Testimonial = () => {
    let review1='"So delighted to find Zinzraa. Beautiful outfits with nice options & customer service."'
    let review2='"So delighted to find Zinzraa. Beautiful outfits with nice options & customer service."'
    let person1='Name of Customer'
    let person2='Name of Customer'
  return (
    <div>
        <div>
            <div>
                <div className='flex justify-center'>
                    <img src={elestar} alt='' className='w-[10px] md:w-auto '/>
                </div>
                <div className='flex font-lora justify-center text-[#875A33] md:text-[38px] md:mb-[24px] mb-[8px]' >
                    <span>Customer Stories</span>
                </div>
            </div>
            <div className='justify-center w-full md:h-auto h-[250px] md:py-[38px] py-[12px]' style={{ backgroundImage: `url(${Vec4})`}}>
                <div className='flex flex-row justify-center gap-[12px] md:gap-[37px]'>
                <div className='border border-solid border-1px border-[#875A33] 
                                        bg-white justify-center items-center
                                        md:h-[470px] md:w-[470px] h-[160px] w-[160px]'>
                       <div className='md:text-[32px] text-[10px]  font-noto md:mt-[54px] 
                                    mt-[18px] md:mx-[38px] mx:[13px] justify-center 
                                    '>
                            {review1}
                        </div>    
                        <div className='flex flex-col justify-center'>
                            <div className='md:mt-[110px] mt-[37px] justify-center'>
                                {person1}
                            </div>
                            <div className='justify-center'>
                                <img src={grpstr} alt=''/>
                            </div>  
                        </div>
                                   
                    </div>
                    <div className='border border-solid border-1px border-[#875A33] 
                                        bg-white justify-center items-center
                                        md:h-[470px] md:w-[470px] h-[160px] w-[160px]'>
                       <div className='md:text-[32px] text-[10px]  font-noto md:mt-[54px] 
                                    mt-[18px] md:mx-[38px] mx:[13px] justify-center 
                                    '>
                            {review1}
                        </div>    
                        <div className='flex flex-col justify-center'>
                            <div className='md:mt-[110px] mt-[37px] justify-center'>
                                {person1}
                            </div>
                            <div className='justify-center'>
                                <img src={grpstr} alt=''/>
                            </div>  
                        </div>
                                   
                    </div>   
            </div>
        </div>
    </div>
    </div>
  )
}

export default Testimonial