import React, { useEffect, useState } from 'react'

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  PhotoIcon,
  TruckIcon
} from "@heroicons/react/24/solid";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  BellAlertIcon
} from "@heroicons/react/24/outline";
import Logo from "../../../../assets/logo.png"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../../../Redux/User/userAction'
import { useNavigate } from "react-router-dom"
import { loadUser } from '../../../../Redux/User/userAction';

const SidebarNav = () => {
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
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div className='sm:flex hidden col-span-1 mt-[5vw] ml-[vw]'  >
      {/* <Card className="fixed overflow-scroll top-4 left-4 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"> */}
      <Card className="flex h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-0 flex items-center justify-center flex-col gap-4 p-4">
          {/* <img src={Logo} alt="brand" className=" w-36" /> */}
          {userProfile?.name && <p className='my-4 flex justify-center items-center text-[1rem] font-[600] text-[#489DCC]'> <UserCircleIcon className='w-[25px] mr-4' /> <span className='mr-3  ' > Hii, {userProfile?.name ? userProfile?.name : "User"}</span></p>}
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
            }
          >
            {/* <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <PhotoIcon className="h-6 w-6 my-2" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                Banners
                </Typography>
              </AccordionHeader>
            </ListItem> */}
            {/* <AccordionBody className="py-1"> */}
              {/* <List className="p-0">
                <Link to="/addBanners" >
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Add  Banner
                  </ListItem>
                </Link>
                <Link to="/banners" >
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Total Banners
                  </ListItem>
                </Link>

              </List> */}
            {/* </AccordionBody> */}
          </Accordion>
          <Link to="/orders" >
            <ListItem>
              <ListItemPrefix>
                <ShoppingBagIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Orders

            </ListItem>
          </Link>

          {/* <hr className="my-2 border-blue-gray-50" />
          <Link to="/productRequest" >
            <ListItem>
              <ListItemPrefix>
                <BellAlertIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Product Request

            </ListItem>

          </Link>
          <Link to="/enquiry" >
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Enquiry

            </ListItem>

          </Link>
          <Link to="/shippingToken" >
            <ListItem>
              <ListItemPrefix>
                <TruckIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Shipping Token

            </ListItem>
          </Link> */}
          <Link to="/users">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-6 w-6 my-2" />
              </ListItemPrefix>
              Users
            </ListItem>
          </Link>
          {/* <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-6 w-6 my-2" />
          </ListItemPrefix>
          Home Settings
        </ListItem> */}
          {/* <Link to="/asset">
           <ListItem>
          <ListItemPrefix>
            <PhotoIcon className="h-6 w-6 my-2" />
          </ListItemPrefix>
         Asset
        </ListItem>
        </Link> */}
          <ListItem onClick={userLogout} >
            <ListItemPrefix>
              <PowerIcon className="h-6 w-6 my-2" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

    </div>
  )
}

export default SidebarNav