import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
 
  } from "@material-tailwind/react";
  import {
    ShoppingBagIcon,
    UserCircleIcon,
    ShieldCheckIcon,
    DevicePhoneMobileIcon,
    UserIcon,
    PowerIcon
  } from "@heroicons/react/24/solid";
  
  import {
    ChevronRightIcon,
    ChevronDownIcon,
  } from "@heroicons/react/24/outline";
  import { Link } from 'react-router-dom';
  import { useSelector, useDispatch } from "react-redux"
  import { logout } from '../../../../Redux/User/userAction'
const TotalList = ({orders,products,users}) => {
    const [click, setClick] = useState(false);
  const handleClick = () => {setClick(!click);
console.log('click', click)}
  const closeMenu = () => setClick(false);
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  // const [userInfo, setUserInfo] = useState({})
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.users
  )
  // console.log(isAuthenticated)
  const navigate = useNavigate()
  const { userProfile } = useSelector(
    (state) => state.userProfile
  );
  // console.log(userProfile?.name)
  const dispatch = useDispatch()
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const userLogout = () => {
    if(isAuthenticated){
    dispatch(logout())
    navigate("/login")}
  }

  const content =
  <>
            <div className='flex block w-[65vw] h-[760px] left-[30vw]
     absolute top-[-10vw] bg-gray-200
         font-bold text-[5vw]  right-0  transition sm:hidden col-span-1 mt-[5vw] ml-[vw]'  
                      style={{ zIndex: 1}}
         >
      {/* <Card className="fixed overflow-scroll top-4 left-4 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"> */}
      <Card className="">
        <div className='p-[5vw]'>
            <button onClick={handleClick}>
            <FaTimes/>
            </button>
        </div>
        <div className="p-0 flex items-center justify-center flex-col gap-4 ">
          {/* <img src={Logo} alt="brand" className=" w-36" /> */}
          {userProfile?.name && 
          <p className='my-4 flex justify-center items-center text-[1rem] font-[600] text-[#489DCC]'> <UserCircleIcon className='w-[25px] mr-4' /> <span className='mr-3  ' > Hii, {userProfile?.name ? userProfile?.name : "User"}</span></p>}
        </div>

        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <DevicePhoneMobileIcon className="h-6 w-6 my-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Products
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link to="/addProduct" >
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Add  Product
                  </ListItem>
                </Link>
                <Link to="/products" >
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Total Products
                  </ListItem>
                </Link>

              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }>
          </Accordion>
          <Link to="/orders" >
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Orders

            </ListItem>
          </Link>
          <Link to="/users">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Users
            </ListItem>
          </Link>
          
          <ListItem onClick={userLogout} >
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6 my-2" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

    </div>


  </>

  return (
   <div className='my-6 relative' >
    
        <div>
        <div className='font-[600]  ' >
            <div className='md:hidden flex flex-row gap-[10vw]  justify-start items-end mx-[2vw]'>
                

            {/* <button className='transition'   onClick={handleClick}>
                {click ? <FaTimes className='w-[4vw] h-[9vw]' fill='black'/> :
                 <CiMenuFries className='w-[6vw] h-[9vw]' fill='black' />}
            </button> */}
            <Button onClick={handleClick} className='bg-gray-300 text-gray-700 rounded-[1vw] shadow-xl'>
                MENU
            </Button>
            <div className='w-[60vw]  justify-center
         items-center text-[1.8rem] text-yellow-600'>
            <h5  > Dashboard</h5>

            </div>
            </div>
      

            
            </div>
            <div className='flex md:flex-row  flex-col my-6 items-center justify-start' >
            <div className='ml-[22.5vw] md:ml-[0vw] mt-[2vw] w-[80vw] md:w-[35vw] rounded-[10px]  px-[2vw] mr-[1vw] py-[3vw] bg-gradient-to-r from-[#59A4FF] to-[#2967B0] ' >
                    <div className='grid grid-cols-5  items-center justify-start ' >
                    <div className='col-span-4' >
                        <h5 className='text-[1.3rem] font-[500] text-[#f5f5f5] ' >Total Orders:</h5>
                        <p className=' pl-[7vw] md:pl-[0vw] text-white font-[600] text-[2rem] tracking-wider ' >{orders.length}</p>
                    </div>
                        <div className='col-span-1' ><DevicePhoneMobileIcon className='w-[50px] text-[#2967B0] bg-white rounded-full px-3 py-3 ' /></div>
                    </div>
                </div>
                 <div className='ml-[22.5vw] md:ml-[0vw] mt-[2vw] w-[80vw] md:w-[40vw] rounded-[10px]  px-[2vw] mr-[1vw] py-[3vw]
                   bg-gradient-to-r from-[#D99D09] to-[#DE562C] ' >
                    <div className='grid grid-cols-5  items-center justify-start ' >
                    <div className='col-span-4' >
                        <h5 className='text-[1.3rem] font-[500] text-[#f5f5f5] ' >
                            Total Products:</h5>
                        <p className=' pl-[7vw] md:pl-[0vw] text-white font-[600] text-[2rem] tracking-wider ' >
                            {products?.length}</p>
                    </div>
                        <div className='col-span-1' ><ShieldCheckIcon className='w-[50px] text-[#DE562C] bg-white rounded-full px-3 py-3 ' /></div>
                    </div>
                </div>
                 <div className='ml-[22.5vw] md:ml-[0vw] mt-[2vw] w-[80vw] md:w-[35vw] rounded-[10px]  px-[2vw] mr-[1vw] py-[3vw]
                  bg-[#9e9d9d] ' >
                    <div className='grid grid-cols-5  items-center justify-start ' >
                    <div className='col-span-4' >
                        <h5 className='text-[1.3rem] font-[500] text-[#f5f5f5] ' >Total Users:</h5>
                        <p className=' pl-[7vw] md:pl-[0vw] text-white font-[600] text-[2rem] tracking-wider ' >{users?.length && users?.length}</p>
                    </div>
                        <div className='col-span-1' ><UserIcon className='w-[50px] text-[#9e9d9d] bg-white rounded-full px-3 py-3 ' /></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[760px]'>
     {click && content}
  
  </div>
        
    </div>
  )
}

export default TotalList