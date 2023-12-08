import React from 'react'
import Vec4 from '../../assets/vec4.png'
import elestar from '../../assets/ele1.png'
import grpstr from '../../assets/grpstr.png'

const Testimonial = () => {
    let review1='"So delighted to find Zinzraa. Beautiful outfits with nice options & customer service."'
    let review2='"So delighted to find Zinzraa. Beautiful outfits with nice options & customer service."'
    let person1='Name of Customer'
    let person2='Name of Customer'
  return (
    <div>
        <div>
            <div>
                <div className='flex justify-center  h-[2vw]'>
                    <img src={elestar} alt='' className='w-[2vw] h-[2vw]'/>
                </div>
                <div className='flex font-lora justify-center text-[#875A33] text-[5vw]' >
                    <span>Customer Stories</span>
                </div>
            </div>
        <div className='h-[40vw] flex px-[10vw] py-[3vw] font-playfair' 
 style={{
    backgroundImage: `url(${Vec4})`,
    backgroundSize: 'cover',  // You can use 'contain', 'auto', '100%', etc.
    backgroundRepeat: 'no-repeat',  // 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
    backgroundPosition: 'center center',  // 'left top', 'right bottom', '50% 50%', etc.
    width: '100%',  // Set width as needed
  }}>
                <div className='flex flex-row gap-[5vw]  px-[6.5vw] justify-center items-center' >
                    <div className=' flex border border-solid border-2px border-[#875A33]
                     w-[32vw] bg-white text-[2.4vw] h-[31vw] p-[3vw]
                    flex flex-col flex justify-center items-center'>
                       <div className=' flex justify-center items-center p-[0.4]'>
                            {review1}
                        </div>    
                        <div className=' mt-[2vw] mt-[2vw] flex flex-col justify-center items-center'>
                            <div className=''>
                                {person1}
                            </div>
                            <div className=''>
                                <img src={grpstr} alt='' className='w-[8vw] h-[1.5vw]'/>
                            </div>  
                        </div>
                    </div>
                    <div className=' flex border border-solid border-2px border-[#875A33]
                     w-[32vw] bg-white text-[2.4vw] h-[31vw] p-[3vw]
                    flex flex-col flex justify-center items-center'>
                       <div className=' flex justify-center items-center p-[0.4]'>
                            {review1}
                        </div>    
                        <div className=' mt-[2vw] flex flex-col justify-center items-center'>
                            <div className=''>
                                {person1}
                            </div>
                            <div className=''>
                                <img src={grpstr} alt='' className='w-[8vw] h-[1.5vw]'/>
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