import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import {Link} from "react-router-dom"
import {TrashIcon} from "@heroicons/react/24/outline"
const TABLE_HEAD = ["Category", "Price", "Image","Description", "Edit","Delete"];
 
const TABLE_ROWS = [
  
];
const ProductList = ({deleteProduct,productsList}) => {
  return (
    <div className='col-span-3 mr-6 my-6' >
    <div className='my-3' >
    <h4 className='my-2 font-[600] text-[2rem] ' >Total  Products</h4>
        <Breadcrumbs className='my-2' >
      <Link to="/Dashboard" className="opacity-60">
        Dashboard
      </Link>
     
      <Link to="products">Total Products</Link>
    </Breadcrumbs>
    </div>
         <Card className="overflow-scroll h-[100vh] w-full">
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
          {productsList &&  productsList?.map(({ productName, price, brand,category,description, id,type, coverImage }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-3 border-b border-blue-gray-50";
 
            return (
              <tr key={id}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal pl-[2vw]">
                    {category}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Rs. {price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    <img src={coverImage} alt='' className='w-[8vw] h-[8vw] object-cover object-top overflow-hidden'/>
                  </Typography>
                </td>
                  <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal w-[10vw]">
                    {description}
                  </Typography>
                </td>
                 {/* <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {type}
                  </Typography>
                </td> */}
                <td className={`${classes} bg-blue-gray-50/50`}>
                <Link to={`/product/${id}`} >
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                    Edit
                  </Typography>
                  </Link>
                </td>
                <td className={classes}>
                  <Typography onClick={()=>deleteProduct(id)} variant="small" color="blue-gray" className="font-normal cursor-pointer">
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

export default ProductList