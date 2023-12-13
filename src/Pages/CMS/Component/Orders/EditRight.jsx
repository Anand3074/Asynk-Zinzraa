import React from 'react'

const EditRight = ({order,orderStatus,setOrderStatus,updateOrder,handleShipping}) => {
  return (
    <div className='col-span-1 bg-gray-100 px-6 py-4 border-l-[1px] border-gray-200 h-[100vh] ' >
         <div className='  w-full bg-white border-[1px] border-gray-200 px-6 py-4 rounded-xl' >
          <h3 className='text-[1.5rem] font-[500] ' >Shipping Details:</h3>
          <div className='my-3' >
          <p className='text-[1.2rem]'>{order.name}</p>
          <p className='text-[1.2rem]'>{order.email}</p>
          <p className='text-[1.2rem]'>{order.alternameNumber}</p>
           <p className='text-[1.2rem]' > {order.addressLineOne}</p>
           <p className='text-[1.2rem]' > {order.city}, {order.state}</p>
           <p className='text-[1.2rem]' > {order.pinCode}</p>
          </div>
            <div className='my-3 flex items-center justify-center' >
        <button onClick={handleShipping} className='px-6 py-3 bg-green-400 border-[1px] text-white rounded-lg w-full '   >Ship Order</button>
      </div>
        </div>
        <div className='mt-6' >
        <p className='mt-6 mb-3 text-[1.5rem] font-[600]' >Order Status:</p>
                 <select value={orderStatus} onChange={(e)=>{setOrderStatus(e.target.value)}} className=' outline-none w-full  lg:w-full py-3 px-3 rounded-lg border-gray-200 border-[1px]'>
        <option value='Purchased' >Purchased</option>
        <option value='Picked Up from Location' >Packaging</option>
        <option value='Shipped' >Shipping</option>
        <option value='Delivering' >Delivering</option>
        <option value='Delivered' >Delivered</option>
        <option value='Return' >Return</option>
      </select>
       <div className='my-3 flex items-center justify-center' >
        <button className='px-6 py-3 bg-blue-400 border-[1px] text-white rounded-lg w-full ' onClick={updateOrder}  >Save</button>
      </div>
      
        </div>
    </div>
  )
}

export default EditRight