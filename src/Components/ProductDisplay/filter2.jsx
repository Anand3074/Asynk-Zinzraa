// Import necessary components and icons
import React from 'react';
import { useState, useContext } from 'react';
import {Checkbox} from "@material-tailwind/react";
<script async src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"></script>
const Filter = ({ size, setSize, 
    selectedSize, selectedFabric,
     initialSizes , initialFabric,
     clearFilter , maxPrice, setMaxPrice,
    fabric, setFabric}) => {    
        // console.log(size)
    const handleSizeChange = (selectedSize, item) => {
        // console.log(selectedSize)

            if (size.includes(selectedSize)) {
                console.log(size)
                // Size is already in the array, remove it
                setSize((prevState) => prevState.filter((prevSize) => prevSize !== selectedSize));

            } else {
                // Size is not in the array, add it
                console.log(size)
                setSize((prevState) => [...prevState, selectedSize]);
                console.log(selectedSize)

            }
            // setOpen(false);
        };

         const handleFabricChange = (selectedFabric) => {
           if (fabric.includes(selectedFabric)) {
             // Fabric option is already selected, remove it
             setFabric((prevState) => prevState.filter((prevFabric) => prevFabric !== selectedFabric));
           } else {
             // Fabric option is not selected, add it
             setFabric((prevState) => [...prevState, selectedFabric]);
           }
         };
         

    return (
        <>
            <div className=' border-[1px] h-[75vw] w-[27.5vw] md:w-[24vw] solid 
            border-slate-100 px-[1.5vw] md:px-[1.5vw] py-[3vw]'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h4 className='xl:text-[1.5rem] lg:text-[1.1rem] text-teal-dark font-[600]'>
                            Choose a Size</h4>
                    </div>
                    <div className='rounded-lg hover:bg-gray-100 px-2 py-2 cursor-pointer'>
                    <p onClick={clearFilter}
                    className='xl:text-[1.35rem] lg:text-[1.1rem] 
                    font-[600] text-[#E36529]'>Clear</p>                 
                    </div>
                </div>
                <div className='mt-3'>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex 
    items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("S")}
            className="
            checked:bg-[#875A33]
             h-[2vw] w-[2vw]"
            defaultChecked={size.includes("S") ? true : false }
            checked={size.includes("S") ? true : false }
            value="S"
        />
        <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full cursor-pointer"
         htmlFor="checkbox">S</label>

    </div>
    <div className='font-500 rounded-lg 
     xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("M")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={size.includes("M") ? true : false }
            checked={size.includes("M") ? true : false }
            value="M"
        />
        <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full
         cursor-pointer" htmlFor="checkbox">M</label>
    </div>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("L")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={size.includes("L") ? true : false}
            checked={size.includes("L") ? true : false }
            value="L"
        />
    <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center
     p-3 rounded-full cursor-pointer" 
    htmlFor="checkbox">L</label>

    </div>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XL")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={size.includes("XL") ? true : false}
            checked={size.includes("XL") ? true : false }
            value="XL"
        />
    <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full cursor-pointer" 
    htmlFor="checkbox">XL</label>

    </div>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleSizeChange("XXL")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={size.includes("XXL") ? true : false}
            checked={size.includes("XXL") ? true : false }
            value="XXL"
        />
        <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full cursor-pointer" 
        htmlFor="checkbox">XXL</label>
    </div>
</div>
<div>
<div className='flex flex-col mt-[5vw]'>
<h4 className='xl:text-[1.5rem] lg:text-[1.1rem] text-teal-dark font-[600]'>Price Range</h4>
<div class="relative mb-4">
<label for="default-range" class="block mb-2 text-sm font-medium text-gray-900
[&::-webkit-slider-thumb]:bg-purple-500 dark:text-white">Default range</label>
<input type="range" defaultValue={0} min={0} max={10000}
onChange={(e)=>setMaxPrice(e.target.value)} value={maxPrice}
 class="w-full
 h-[1vw] md:h-[0.5vw] rounded-lg appearance-none cursor-pointer bg-[#875A33]
 thumb:bg-yellow-600"/>
    <span class="text-md text-gray-500 dark:text-gray-800 absolute start-0 -bottom-6">Min (₹.0)</span>
    <span class="text-md text-gray-500 dark:text-gray-800 absolute end-0 -bottom-6">Max (₹.{maxPrice})</span>
</div>



{/* Fabric Change Filter */}

<div className='flex items-center justify-between mt-[5vw]'>
                    <div>
                        <h4 className='xl:text-[1.5rem] lg:text-[1.1rem] text-teal-dark font-[600]'>Fabric</h4>
                    </div>
</div>
                <div className='mt-3'>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Silk")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={fabric.includes("Silk") ? true : false }
            checked={fabric.includes("Silk") ? true : false }
            value="Silk"
        />
        <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full cursor-pointer"
         htmlFor="checkbox">Silk</label>

    </div>
    <div className='font-500 rounded-lg 
     xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center 
     justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Cotton")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={fabric.includes("Cotton") ? true : false }
            checked={fabric.includes("Cotton") ? true : false }
            value="Cotton"
        />
        <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full
         cursor-pointer" htmlFor="checkbox">Cotton</label>
    </div>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Linen")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={fabric.includes("Linen") ? true : false}
            checked={fabric.includes("Linen") ? true : false }
            value="Linen"
        />
    <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center
     p-3 rounded-full cursor-pointer" 
    htmlFor="checkbox">Linen</label>

    </div>
    <div className='font-500 rounded-lg xl:px-2 xl:py-[0vw] lg:px-0 lg:py-0 flex items-center 
    justify-start cursor-pointer'>
        <Checkbox
            onChange={() => handleFabricChange("Rayon")}
            className="checked:bg-[#875A33] h-[2vw] w-[2vw]"
            defaultChecked={fabric.includes("Rayon") ? true : false}
            checked={fabric.includes("Rayon") ? true : false }
            value="Rayon"
        />
    <label class=" text-[1.4vw] md:text-[1.4vw] relative flex font-[500] items-center p-3 rounded-full cursor-pointer" 
    htmlFor="checkbox">Rayon</label>
    </div>
      </div>
    </div>
</div>

            </div>
        </>
    );
};

export default Filter;
