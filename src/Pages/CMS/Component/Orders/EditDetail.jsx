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
                <p className='text-[1.3rem] font-[500]' >{product.productName}</p>
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
                 { order?.paymentMethod !== '' &&  <div className='flex  items-center justify-between' >
                  <p>Payment Method</p>
                  <p>{order?.paymentMethod}</p>

                </div>}
                { order?.shipRocketDetails &&  <div className='flex  items-center justify-between' >
                  <p>Shipment Status</p>
                  <p>{order?.shipRocketDetails?.status}</p>
                  
                </div>}
            </div>
            <div className='flex items-start justify-between my-3  ' >
              <div className='mt-2  ' >
               
                {
                  order?.invoiceUrl && <a href={order?.invoiceUrl?.invoice_url} download={true}><button  className='w-full mt-2 px-4 py-2 bg-blue-400 text-white rounded-[10px]'  >Download Invoice</button></a>
                }
              </div>
             
               <div className='mt-2' >
               {order?.shipRocketDetails && <button onClick={generateLabel} className='w-full px-4 py-2 bg-black text-white rounded-[10px]'  >Generate Label</button>}
                 {
                  order?.labelUrl && <a href={order?.invoiceUrl?.invoice_url} download={true}><button  className='w-full mt-2 px-4 py-2 bg-blue-400 text-white rounded-[10px]'  >Download Invoice</button></a>
                }
              </div>
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