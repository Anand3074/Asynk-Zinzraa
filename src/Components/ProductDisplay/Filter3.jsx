// Import necessary components and icons
import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Checkbox} from "@material-tailwind/react";
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
  import { BiSort } from "react-icons/bi";
  <script async src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>
const Filter = ({ size, setSize, 
    selectedSize, selectedFabric,
     initialSizes , initialFabric,
     clearFilter , maxPrice, setMaxPrice, min, setmin,
    fabric, setFabric}) => {    
    const handleSizeChange = (data) => {
            if (!size.includes(data)) {
                setSize(() => [...size, data]);
            } else {
                setSize((prevState) => prevState.filter((prevSize) => prevSize !== data));
            }
            // console.log(size)

        };
         const handleFabricChange = (data) => {
           if (!fabric.includes(data)) {
            setFabric(() => [...fabric, data]);
           } else {
            setFabric((prevState) => prevState.filter((prevFabric) => prevFabric !== data));
           }
         };
         

    return (
        <>
        <div className='flex bg-gray-400 h-full'> 
        <div className='flex flex-row w-full gap-[1vw]'>
            <div>
        <Card className="flex h-full w-[27.5vw] bg-gray-300">
        <List className=' w-[8vw] font-bold text-[4vw]'>
            <div className='flex justify-center items-center bg-gray-100 rounded-[2vw] gap-[1vw] flex-row w-[23vw]'>
                <BiSort className="h-[7vw] flex items-start justify-center w-[4vw] my-2 text-gray-700" />
              Filters
            </div>
        </List>
        </Card>
            </div>
            <div className=' sm:hidden bg-white w-[75vw]  h-[160vw]
                            font-bold text-[5vw]  transition 
                            px-[2.5vw] md:px-[2vw] py-[1.5vw] border-[2px] border-gray-[600]'>
                <div className='flex flex-row gap-[15vw] items-center '>
                    <div>
                        <h4 className='md:text-[1.5vw] text-[3.5vw] w-[30vw]  text-teal-dark font-[600]'>
                            Choose a Size</h4>
                    </div>
                    <div className='md:rounded-lg hover:bg-gray-100 px-2 py-2 cursor-pointer'>
                    <p onClick={clearFilter}
                    className='md:text-[1.5vw] text-[3.5vw] 
                    font-[600] text-[#E36529]'>Clear</p>                 
                    </div>
                </div>
                <div className=''>
    <div className='font-500 md:rounded-lg flex 
    items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("S")}
            className="
            checked:bg-[#875A33]
            h-[4vw] w-[4vw] md:h-[2vw] md:w-[2vw]"
            defaultChecked={size.includes("S") ? true : false }
            checked={size.includes("S") ? true : false }
            value="S"
        />
        <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500]
         items-center rounded-full cursor-pointer"
         htmlFor="checkbox">S</label>

    </div>
    <div className='font-500 md:rounded-lg 
     flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("M")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[2vw] md:w-[2vw]"
            defaultChecked={size.includes("M") ? true : false }
            checked={size.includes("M") ? true : false }
            value="M"
        />
        <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center rounded-full
         cursor-pointer" htmlFor="checkbox">M</label>
    </div>
    <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("L")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[2vw] md:w-[2vw]"
            defaultChecked={size.includes("L") ? true : false}
            checked={size.includes("L") ? true : false }
            value="L"
        />
    <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center
     rounded-full cursor-pointer" 
    htmlFor="checkbox">L</label>

    </div>
    <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XL")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[2vw] md:w-[2vw]"
            defaultChecked={size.includes("XL") ? true : false}
            checked={size.includes("XL") ? true : false }
            value="XL"
        />
    <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
    htmlFor="checkbox">XL</label>

    </div>
    <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XXL")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[2vw] md:w-[2vw]"
            defaultChecked={size.includes("XXL") ? true : false}
            checked={size.includes("XXL") ? true : false }
            value="XXL"
        />
        <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
        htmlFor="checkbox">XXL</label>
    </div>
</div>
<div>
<div className='flex flex-col mt-[5vw]'>
<h4 className='xl:text-[1.5rem] lg:text-[1.1rem] text-[3.55vw] text-teal-dark font-[600]'>Price Range</h4>
<div class="relative mb-4">
{/* <label htmlForfor="default-range" class="block mb-2 text-sm font-medium text-gray-900
[&::-webkit-slider-thumb]:bg-purple-500 dark:text-white">
    Default range</label> */}
<input type="range" 
// defaultValue={0} 
min={0} max={10000}
onChange={(e)=>setMaxPrice(e.target.value)} 
value={maxPrice}
 class="w-[50vw]
 h-[1vw] md:h-[0.5vw] md:rounded-lg appearance-none cursor-pointer bg-[#875A33]
 thumb:bg-yellow-600 [&::-webkit-slider-thumb]:bg-purple-500 dark:text-white"/>
    <span class="text-[3.55vw] md:text-[1.5vw] text-gray-500 dark:text-gray-800 absolute start-0 -bottom-6">Min (₹.0)</span>
    <span class="text-[3.55vw] md:text-[1.5vw] text-gray-500 dark:text-gray-800 absolute right-[18vw] -bottom-6">Max (₹.{maxPrice})</span>
</div>



{/* Fabric Change Filter */}

<div className='flex items-center justify-between mt-[5vw]'>
                    <div>
                        <h4 className=' 
                        text-[3vw] md:text-[2vw] my-[1vw] text-teal-dark font-[600]'>Fabric</h4>
                    </div>
</div>
                <div className=''>
    <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Silk")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[2vw] md:w-[2vw]"
            defaultChecked={fabric.includes("Silk") ? true : false }
            checked={fabric.includes("Silk") ? true : false }
            value="Silk"
        />
        <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center rounded-full cursor-pointer"
         htmlFor="checkbox">Silk</label>

    </div>
    <div className='font-500 md:rounded-lg 
     flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Cotton")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[2vw] md:w-[2vw]"
            defaultChecked={fabric.includes("Cotton") ? true : false }
            checked={fabric.includes("Cotton") ? true : false }
            value="Cotton"
        />
        <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center rounded-full
         cursor-pointer" htmlFor="checkbox">Cotton</label>
    </div>
    <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Linen")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[2vw] md:w-[2vw]"
            defaultChecked={fabric.includes("Linen") ? true : false}
            checked={fabric.includes("Linen") ? true : false }
            value="Linen"
        />
    <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center
     rounded-full cursor-pointer" 
    htmlFor="checkbox">Linen</label>

    </div>
    <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Rayon")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[2vw] md:w-[2vw]"
            defaultChecked={fabric.includes("Rayon") ? true : false}
            checked={fabric.includes("Rayon") ? true : false }
            value="Rayon"
        />
    <label class=" text-[3.55vw] md:text-[1.4vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
    htmlFor="checkbox">Rayon</label>
    </div>
      </div>
    </div>
</div>

            </div>
            </div>
            </div>
        </>
    );
};

export default Filter;
