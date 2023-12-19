import React from 'react'
import EditRight from './EditRight'

const EditDetails = ({order,orderStatus,setOrderStatus,updateOrder,handleShipping,id,generateInvoice,generateLabel}) => {



  return (
    <div className=' grid grid-cols-3 grid-flo-col col-span-3  ' >
      <div className='col-span-2 pt-16 mr-6 ' >
       
    <div className='my-6 mr-4  col-span-1 w-full border-[1px] border-gray-200 px-6 py-4 rounded-xl' >
          <h3 className='text-[1.5rem] font-[500] ' >Order Details:</h3>
          {
            order?.products && order.products.map((product)=>(
                <div className='my-6 flex items-center justify-start ' >
              <div >
                <img className='w-[120px] rounded-lg ' src={product.coverImage} alt="" />
              </div>
              <div className='ml-4' >
                <p className='text-[1.3rem] font-[500]' >{product.title}</p>
                <p className='text-[1.3rem] font-[600] text-green-400 '>Rs.{product.price}</p>
              </div>
          </div>
            ))
          }
        
        </div>
        <div className='mt-4' >
          <h3 className='text-[1.3rem]' >Order Information</h3>
          <div className='' >
            <div className=' mt-3 ' >
                <div className='flex  items-center justify-between' >
                  <p>Total Order Price</p>
                  <p>Rs.{order?.totalPrice && order?.totalPrice}</p>
                </div>
                   <div className='flex  items-center justify-between' >
                  <p>Order Id</p>
                  <p>{id && id}</p>
                </div>
                 { order?.shipRocketDetails &&  <div className='flex  items-center justify-between' >
                  <p>Shipment Id</p>
                  <p>{order?.shipRocketDetails?.shipment_id}</p>

                </div>}
                 { order?.paymentStatus !== '' &&  
                 <div className='flex  items-center justify-between' >
                  <p>Payment Method</p>
                  <p>{order?.paymentStatus}</p>
                   </div>}
              </div>
          </div>
        </div>
      </div>
      <div>
        <EditRight handleShipping={handleShipping} order={order} orderStatus={orderStatus} updateOrder={updateOrder} setOrderStatus={setOrderStatus} />
      </div>
    </div>
  )
}

export default EditDetails