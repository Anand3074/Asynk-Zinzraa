import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import {TrashIcon} from "@heroicons/react/24/outline"
import {Link} from "react-router-dom"
const TABLE_HEAD = ["Order ID", "Order Price", "Order Status", "Customer Name","Customer Contact","Edit","delete"];

const TABLE_ROWS = [
 
];
const OrderList = ({orderList,deleteProduct}) => {
   

  const orderDate = (order)=>{
    
  }

  return (
      <div className='col-span-3 mr-6 my-6' >
    <div className='my-3' >
    <h4 className='my-2 font-[600] text-[2rem] ' >Total Orders</h4>
        <Breadcrumbs className='my-2' >
        <Link to="/Dashboard" className="opacity-60">
        Dashboard
      </Link>
     
      <Link to="orders">Orders</Link>
   
    </Breadcrumbs>
    </div>
         <Card className="overflow h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orderList && orderList.map(({ id, totalPrice,orderStatus,name,alternameNumber,date}, index) => {
            const isLast = index === orderList.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
       
           
            return (
              <tr key={id}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {id && id}
                  </Typography>
                </td>
            
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Rs.{totalPrice && totalPrice}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {orderStatus && orderStatus}
                  </Typography>
                </td>
                 <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name && name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {alternameNumber && alternameNumber}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                 <Link to={`/Adminorder/${id}`} >
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                    Edit
                  </Typography>
                   </Link>
                </td>
                <td className={classes}>
                  <Typography onClick={()=>deleteProduct(id)} variant="small" 
                  color="blue-gray" className="font-normal cursor-pointer">
                  <TrashIcon className="w-[20px] h-[20px] text-red-600 " />

                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
  )
}

export default OrderList