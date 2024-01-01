// Import necessary components and icons
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  BellAlertIcon
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { Slider } from "@material-tailwind/react";

import {Accordion, AccordionBody, AccordionHeader, Checkbox, Input, List, ListItem, ListItemPrefix, Typography} from "@material-tailwind/react";
{/* <script async src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script> */}
const Filter = ({ size, setSize, 
    selectedSize, selectedFabric,
     initialSizes , initialFabric,
     clearFilter , maxPrice, setMaxPrice, min, setmin,
    fabric, setFabric}) => {   
      const max = Number(maxPrice).toFixed(2);

    const handleSizeChange = (data) => {
            if (!size.includes(data)) {
                setSize(() => [...size, data]);
            } else {
                setSize((prevState) => prevState.filter((prevSize) => prevSize !== data));
            }
            // console.log(size)

        };
        // const handleSizeChange = (selectedSize, item) => {
        //     // console.log(selectedSize)
    
        //         if (size.includes(selectedSize)) {
        //             console.log(size)
        //             // Size is already in the array, remove it
        //             setSize((prevState) => prevState.filter((prevSize) => prevSize !== selectedSize));
    
        //         } else {
        //             // Size is not in the array, add it
        //             console.log(size)
        //             setSize((prevState) => [...prevState, selectedSize]);
        //             console.log(selectedSize)
    
        //         }
        //         // setOpen(false);
        //     };
        // const handleRamChange = (data) => {
        //     if (!ram.includes(data)) {
        //         setram(() => [...ram, data])
    
        //     }
        //     else {
        //         setram((prevState) => prevState.filter((prevItem) => prevItem !== data))
        //     }
        //     setOpen(false)
        // }
        const [open, setOpen] = React.useState(0);
        const handleOpen = (value) => {
          setOpen(open === value ? 0 : value);}
          const [open0, setOpen0] = React.useState(0);
          const handleOpen0 = (value) => {
            setOpen0(open0 === value ? 0 : value);
        }; const [open1, setOpen1] = React.useState(0);
        const handleOpen1 = (value) => {
          setOpen1(open1 === value ? 0 : value);
        }; const [open2, setOpen2] = React.useState(0);
        const handleOpen2 = (value) => {
          setOpen2(open2 === value ? 0 : value);
        };

         const handleFabricChange = (data) => {
           if (!fabric.includes(data)) {
            setFabric(() => [...fabric, data]);
           } else {
            setFabric((prevState) => prevState.filter((prevFabric) => prevFabric !== data));
           }
         };
         useEffect(() => {
          setOpen(1);
          setOpen0(1);
          setOpen1(1);
          setOpen2(1);
      
         }, []);         

    return (
        <>
            <div className=' md:h-[75vw] w-[25vw] md:w-[20vw] px-[2.5vw] border-[0.05vw] mt-[1vw] rounded-[1.5vw] border-[#875A33] md:px-[1vw] py-[2vw]'>
            {/* <div>
                        <h2 className='mx-[1vw] md:text-[1.5vw] text-[2vw] 
                        font-metro text-teal-dark font-[600]'>
                      Filter
                      </h2>
                    </div> */}
                {/* <div className='flex items-center justify-between'>
                    
                    <div className='md:rounded-lg hover:bg-gray-100 px-2 py-2 cursor-pointer'>
                    <p onClick={clearFilter}
                    className='md:text-[1.5vw] text-[2vw] 
                    font-[600] text-[#E36529]'>Clear</p>                 
                    </div>
                </div> */}
                <Accordion
            open={open0 === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open0 === 1 ? "rotate-180" : ""}`}
              />
            }
          >
                <ListItem>
                <AccordionHeader onClick={() => handleOpen0(1)} className="border-b-0
                 h-[2vw] items-center justify-center ">
                <Typography color="black" className="mr-auto font-[500]   text-xl font-metro">
                Category
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="pt-0.1 pb-[1vw] px-[0.5vw]">
              <List className="p-0">
              <ListItem className='h-[3vw]'>
                  <div className='font-500 md:rounded-lg flex 
                    items-center justify-start cursor-pointer'>
              <Checkbox
                  onChange={() => handleSizeChange("S")}
                  className="
                  checked:bg-[#875A33]
                  h-[4vw] w-[4vw] md:h-[1.75vw] md:w-[1.75vw]"
                  defaultChecked={size.includes("S") ? true : false }
                  checked={size.includes("S") ? true : false }
                  value="S"
              />
              <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500]
              items-center rounded-full cursor-pointer"
              htmlFor="checkbox">Western</label>
          </div>
            </ListItem> 
            <ListItem className='h-[3vw]'>
            <div className='font-500 md:rounded-lg 
     flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("M")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={size.includes("M") ? true : false }
            checked={size.includes("M") ? true : false }
            value="M"
        />
        <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full
         cursor-pointer" htmlFor="checkbox">Saree</label>
    </div>
            </ListItem>
            
    <ListItem className='h-[3vw]'>
      <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
          <Checkbox
              onChange={() => handleSizeChange("L")}
              className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
              md:h-[1.75vw] md:w-[1.75vw]"
              defaultChecked={size.includes("L") ? true : false}
              checked={size.includes("L") ? true : false }
              value="L"
          />
      <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center
      rounded-full cursor-pointer" 
      htmlFor="checkbox">Dresses</label>

      </div>
    </ListItem> 

    <ListItem className='h-[3vw]'>
                <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XL")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={size.includes("XL") ? true : false}
            checked={size.includes("XL") ? true : false }
            value="XL"
        />
    <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
    htmlFor="checkbox">Kurtas</label>

    </div>
    </ListItem> 
            
            <ListItem className='h-[3vw]'>
            <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XXL")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={size.includes("XXL") ? true : false}
            checked={size.includes("XXL") ? true : false }
            value="XXL"
        />
        <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
        htmlFor="checkbox">Ethnic</label>
    </div>
            </ListItem>

              </List>
            </AccordionBody>
            <hr color='grey' className='w-full h-[0.15vw] w-[94%] ml-[0.5vw]'/>

          </Accordion>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
                <ListItem>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0
                 h-[2vw] items-center justify-center">
                <Typography color="black" className="mr-auto font-[500]   text-xl font-metro">
                Size
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="pt-0.1 pb-[1vw] px-[0.5vw]">
              <List className="p-0">
              <ListItem className='h-[3vw]'>
                  <div className='font-500 md:rounded-lg flex 
                    items-center justify-start cursor-pointer'>
              <Checkbox
                  onChange={() => handleSizeChange("S")}
                  className="
                  checked:bg-[#875A33]
                  h-[4vw] w-[4vw] md:h-[1.75vw] md:w-[1.75vw]"
                  defaultChecked={size.includes("S") ? true : false }
                  checked={size.includes("S") ? true : false }
                  value="S"
              />
              <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500]
              items-center rounded-full cursor-pointer"
              htmlFor="checkbox">S</label>
          </div>
            </ListItem> 
            <ListItem className='h-[3vw]'>
            <div className='font-500 md:rounded-lg 
     flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("M")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={size.includes("M") ? true : false }
            checked={size.includes("M") ? true : false }
            value="M"
        />
        <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full
         cursor-pointer" htmlFor="checkbox">M</label>
    </div>
            </ListItem>
            
    <ListItem className='h-[3vw]'>
      <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
          <Checkbox
              onChange={() => handleSizeChange("L")}
              className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
              md:h-[1.75vw] md:w-[1.75vw]"
              defaultChecked={size.includes("L") ? true : false}
              checked={size.includes("L") ? true : false }
              value="L"
          />
      <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center
      rounded-full cursor-pointer" 
      htmlFor="checkbox">L</label>

      </div>
    </ListItem> 

    <ListItem className='h-[3vw]'>
                <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XL")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={size.includes("XL") ? true : false}
            checked={size.includes("XL") ? true : false }
            value="XL"
        />
    <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
    htmlFor="checkbox">XL</label>

    </div>
    </ListItem> 
            
            <ListItem className='h-[3vw]'>
            <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XXL")}
            className="checked:bg-[#875A33] h-[4vw] w-[4vw] 
            md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={size.includes("XXL") ? true : false}
            checked={size.includes("XXL") ? true : false }
            value="XXL"
        />
        <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
        htmlFor="checkbox">XXL</label>
    </div>
            </ListItem>

              </List>
            </AccordionBody>
            <hr color='grey' className='w-full h-[0.15vw] w-[94%] ml-[0.5vw]'/>

          </Accordion>
          <Accordion
            open={open1 === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto  h-4 w-4 transition-transform ${open1 === 1 ? "rotate-180" : ""}`}
              />
            }
          >
                <ListItem>
                {/* <AccordionHeader onClick={() => handleOpen1(1)} className="border-b-[0.2vw]
                 border-b-grey-800 solid h-[2.5vw] items-top pt-[0vw] justify-start pb-[1.25vw] "> */}
                   <AccordionHeader onClick={() => handleOpen1(1)} className="border-b-0
                 h-[2vw] items-center justify-center">
                <Typography color="black" className="mr-auto  font-[500] text-lg font-metro">
                Price
                </Typography>
                {/* <hr className='w-full'/> */}
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="pt-0.1 pb-[1vw] px-[0vw] my-[0.65vw]">
              <div className='w-[18.5vw] overflow-hidden px-[0.76vw] py-[0.5vw]'>
      <Slider
        defaultValue={0} 
        min={0} max={10000}
        onChange={(e)=>setMaxPrice(e.target.value)} 
        value={maxPrice}
        className="text-[#875A33] w-[17vw] h-[0.35vw]"
        barClassName="rounded-[0.3vw] bg-[#875A33]"
        thumbClassName="[&::-moz-range-thumb]:rounded-full
        [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:-mt-[4px] 
        [&::-webkit-slider-thumb]:-mt-[4px]"
        trackClassName="[&::-webkit-slider-runnable-track]:bg-[#875A33] 
        [&::-moz-range-track]:bg-[#875A33] rounded-full !bg-[#875A33]/10 border border-[#875A33]/20"
      />
<div className='flex flex-row justify-between w-full mt-[0.5vw]'>
      <div class="text-[1.5vw] md:text-[1vw] text-gray-500 dark:text-gray-800">
        Min (₹.0)
      </div>
      <div class="text-[1.5vw] md:text-[1vw] text-gray-500 dark:text-gray-800">
        Max (₹.{max})
      </div>
</div>
</div>
            </AccordionBody>
                            <hr color='grey' className='w-full h-[0.15vw] w-[94%] ml-[0.5vw]'/>


          </Accordion>
 
<div className='flex flex-col'>
{/* Fabric Change Filter */}
{/* <div className='flex items-center justify-between mt-[5vw]'>
                    <div>
                        <h4 className=' text-[3vw] md:text-[2vw] my-[1vw] text-teal-dark font-[600]'>Fabric</h4>
                    </div>
</div> */}
    <div className=''>
    <Accordion
            open={open2 === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open2 === 1 ? "rotate-180" : ""}`}
              />
            }
          >
                <ListItem>
                <AccordionHeader onClick={() => handleOpen2(1)} className="border-b-0
                 h-[2vw] items-center justify-center ">
                <Typography color="black" className="mr-auto font-[500]   text-lg font-metro">
                Fabric
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="pt-0.1 pb-[1vw] px-[0vw]">
              <List className="p-0">
                  <ListItem className='md:h-[3vw]'>
                  <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
        
        <Checkbox
            onChange={() => handleFabricChange("Silk")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={fabric.includes("Silk") ? true : false }
            checked={fabric.includes("Silk") ? true : false }
            value="Silk"
        />
        <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full cursor-pointer"
         htmlFor="checkbox">Silk</label>

    </div>
                  </ListItem>
                  <ListItem className='md:h-[3vw]'>
                  <div className='font-500 md:rounded-lg 
     flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Cotton")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={fabric.includes("Cotton") ? true : false }
            checked={fabric.includes("Cotton") ? true : false }
            value="Cotton"
        />
        <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full
         cursor-pointer" htmlFor="checkbox">Cotton</label>
    </div>
                  </ListItem>
                  <ListItem className='md:h-[3vw]'>
                    
                  <div className='font-500 md:rounded-lg flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Linen")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={fabric.includes("Linen") ? true : false}
            checked={fabric.includes("Linen") ? true : false }
            value="Linen"
        />
    <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center
     rounded-full cursor-pointer" 
    htmlFor="checkbox">Linen</label>

    </div>
                    </ListItem>
                    <ListItem className='md:h-[3vw]'>
                    <div className='font-500 md:rounded-lg flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Rayon")}
            className="checked:bg-[#875A33]  h-[4vw] w-[4vw] md:h-[1.75vw] md:w-[1.75vw]"
            defaultChecked={fabric.includes("Rayon") ? true : false}
            checked={fabric.includes("Rayon") ? true : false }
            value="Rayon"
        />
    <label class=" text-[2.4vw] md:text-[1vw] relative flex font-[500] items-center rounded-full cursor-pointer" 
    htmlFor="checkbox">Rayon</label>
    </div>
                    </ListItem>

              </List>
            </AccordionBody>
            <hr color='grey' className='w-full h-[0.15vw] w-[94%] ml-[0.5vw]'/>

          </Accordion>
     
    
    
    
    

      </div>
    </div>
</div>
        </>
    );
};

export default Filter;
