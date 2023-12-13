import React,{useState,useEffect} from 'react'
import {Button} from "@material-tailwind/react"
import TrackingSteps from './Tracking'
const OrderDetails = ({orderDetails,id}) => {
    console.log(orderDetails)
  
  
  return (
    <div  style={{ fontFamily: "DM Sans" }} className='lg:px-6 px-2 py-16  '>
    <div className='bg-white  lg:grid  lg:grid-cols-7 grid-flow-col rounded-[10px] ' >
        <div className='col-span-4 border-r-[1px] border-gray-300 px-4 lg:px-8 py-8' >
            <h3 className='font-[500] text-[1.1rem]  ' >Delivery Address:</h3>
            <div>
                {/* <p className='mt-3' >{orderDetails.name && orderDetails.name }</p> */}
                <p className='' >{orderDetails.alternateNumber && orderDetails.alternameNumber }</p>
                <p className='' >{orderDetails.addressLineOne && orderDetails.addressLineOne }, {orderDetails.city && orderDetails.city }, {orderDetails.pinCode && orderDetails.pinCode}, {orderDetails.state && orderDetails.state } </p>
            </div>
            <div className='my-8' >
                <TrackingSteps orderStatus={orderDetails?.orderStatus && orderDetails?.orderStatus} />
            </div>
             <div className='mt-12' >
           <h3 className='text-[1.3rem] font-[500]' >Order Information:</h3>
           <div className='my-4' >
           <div className='flex my-2  items-center justify-between' >
            <p>Total Price</p>
            <p>Rs.{orderDetails?.totalPrice && orderDetails?.totalPrice}</p>
           </div>
           <div className='flex my-2  items-center justify-between' >
            <p>Order ID</p>
            <p>{id && id}</p>
           </div>
            <div className='flex my-2  items-center justify-between' >
            <p>Order Status</p>
            <p>{orderDetails?.orderStatus && orderDetails?.orderStatus}</p>
           </div>
          {orderDetails?.shipRocketDetails && <div className='flex my-2  items-center justify-between' >
            <p>Shipment Id</p>
            <p>{orderDetails?.shipRocketDetails?.shipment_id && orderDetails?.shipRocketDetails?.shipment_id}</p>
           </div>}
           <div>
           { orderDetails?.shipRocketDetails && 
           
           <Button className='w-full mt-3 ' >Track Your Order</Button>}
           { orderDetails?.invoiceUrl && 
           <a href={orderDetails?.invoiceUrl?.invoice_url && orderDetails?.invoiceUrl?.invoice_url} download={true} >
           <Button className='w-full mt-3 bg-black ' >Download Invoice</Button> </a>}
           </div>
           </div>
           </div>
        </div>
       
       
         <div className='col-span-3 border-r-[1px] flex items-center justify-center flex-col border-gray-300 lg:px-3 px-4  lg:py-8' >
            <h3 className='font-[500] text-[1.1rem] text-center  ' >Order Details:</h3>
           <div className='my-8' >
            {
                orderDetails?.products && orderDetails?.products.map((product)=>(
                   <div className='bg-white rounded-[10px] xl:rounded-[30px] py-3  w-[full] xl:mx-4 xl:px-3 px-3 xl:mb-8 mb-3 border-[1px] border-gray-200 xl:py-4 ' >
        <div className='grid grid-cols-4 items-center justify-center grid-flow-col'  >
            <div className='col-span-1 mr-6' >
                <img className='xl:rounded-[15px] rounded-[5px]' src={product.imageUrl} alt="" />
            </div>
            <div className='col-span-3  ' >
            <div className='flex items-center justify-start' >
                <h3 className='font-[600] w-[450px] text-[0.8rem] xl:text-[1.4rem] text-[#121212] ' >{product.title}  </h3>
                {/* <div className='mx-4 px-4 hidden xl:block text-[0.5rem] py-2 bg-green-500 text-white rounded-[15px] ' >
                    <p>Assured</p>
                </div> */}
                </div>
                <div className='flex items-center justify-start my-2' >
                    <p className='font-[600] text-[0.7rem] xl:text-[1.3rem] mr-2  text-[#1287E3]' >
                        Rs. {product.price}</p>
                    <p className='text-gray-400 text-[0.5rem] xl:text-[0.8rem] line-through mr-2 ' >
                        Rs. {(product.price * 0.12) } </p>
                    <p className='text-green-500 text-[0.5rem] xl:text-[0.8rem] font-[500]' >
                        Save Rs.{(product.price) * 1.12 -product.price}</p>
                </div>
                <div>
                    <p className='text-gray-400  xl:text-[1rem] text-[0.5rem]' >Free Delivery . Cod Avaliable</p>
                </div>
            </div>
        </div>
    </div>
                ))
            }
           </div>
        </div>
    </div>
    </div>
  )
}

export default OrderDetails