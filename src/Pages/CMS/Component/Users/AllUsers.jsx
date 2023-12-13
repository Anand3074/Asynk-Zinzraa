import React from 'react'
import { Card, Typography } from "@material-tailwind/react";
import { Breadcrumbs,Button } from "@material-tailwind/react";
import {Link} from "react-router-dom"
import {TrashIcon} from "@heroicons/react/24/outline"
const TABLE_HEAD = ["Name", "Email", "Phone","Role", "Edit","Delete"];
const AllUsers = ({usersList,deleteUser}) => {
  return (
     <div className='col-span-3 mr-6 my-6' >
    <div className='my-3 flex items-center justify-between ' >
    <div>
    <h4 className='my-2 font-[600] text-[2rem]  ' >Total Shield Orders</h4>
        <Breadcrumbs className='my-2' >
      <a href="#" className="opacity-60">
        Dashboard
      </a>
      <a href="#" className="opacity-60">
        Shield
     </a>
      <a href="#">Total Shield Orders</a>
    </Breadcrumbs>
    </div>
    {/* <div>
    <Link to="/addUser" > <Button>+  Add User</Button></Link> 
    </div> */}
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
          {usersList && usersList.map(({ name, email, role,phone,uid }, index) => {
            const isLast = index === usersList.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {phone}
                  </Typography>
                </td>
                 <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {role}
                  </Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                <Link to={`/users/${uid}`} >
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                    Edit
                  </Typography>
                  </Link>
                </td>
                 <td className={classes}>
                  <Typography onClick={()=>deleteUser(uid)} variant="small" color="blue-gray" className="font-normal cursor-pointer">
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

export default AllUsers