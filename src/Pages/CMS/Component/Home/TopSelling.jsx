import React from 'react'
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Order ID",  "Price", "Order Status"];
 const USERS_TABLE_HEAD = ["User Name", "Email", "Phone Number"];
const TABLE_ROWS = [
 
];
const TopSelling = ({users,orders}) => {
    console.log(users)
  
  return (
    <div className='my-12 ' >
        <div className='' >
          <div className='mr-12 my-6' >
             <Card className="max-h-[600px] h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none h-[130px] ">
        <div className="mb-4 mt-4 flex items-center justify-between ">
          <div>
            <Typography variant="h5" color="blue-gray">
               Orders
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See all the New Orders
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
           <Link to="/repairOrders" > <Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button></Link>
            
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-0 w-full table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={3} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders && orders?.slice(0,6).map(({ id,orderStatus,totalPrice }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {id && id}
                        </Typography>
                       
                      </div>
                    </div>
                  </td>
                 
                   <td className={classes}>
                    <div className="flex items-center gap-3">
                      
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          Rs.{totalPrice && totalPrice}
                        </Typography>
                       
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                     {orderStatus && orderStatus}
                      </Typography>
                     
                    </div>
                  </td>
                 
                 
                  {/* <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={online ? "online" : "offline"}
                        color={online ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Edit User">
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
     
    </Card>
          </div>  
            <div className='mr-12 my-6' >
             <Card className="max-h-[600px] h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none h-[130px] ">
        <div className="mb-4 mt-4 flex items-center justify-between ">
          <div>
            <Typography variant="h5" color="blue-gray">
           Users List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See all the New Users
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
             <Link to="/shieldOrders" ><Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button></Link>
            
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-0  w-full table-auto text-left">
          <thead>
            <tr>
              {USERS_TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={3} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users && users?.slice(0,6)?.map(({ uid, name,email,phone }, index) => {
              const isLast = index === users - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={uid}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name && name}
                        </Typography>
                       
                      </div>
                    </div>
                  </td>
                 
                   <td className={classes}>
                    <div className="flex items-center gap-3">
                      
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {email && email}
                        </Typography>
                    
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                    { phone && phone}
                      </Typography>
                     
                    </div>
                  </td>
                   
                  
              
                   
                    
               
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
     
    </Card>
          </div>  
        </div>
    </div>
  )
}

export default TopSelling