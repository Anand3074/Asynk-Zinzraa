import React from 'react'
import { useEffect, useState   } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSize, toggleFabric, setPriceRange } from '../../Redux/Product/filter';


const FilterHistory = () => {
    const dispatch = useDispatch();
    const sizes = useSelector((state) => state.filters.sizes);
    const fabrics = useSelector((state) => state.filters.fabrics);
    const selectedSizes = useSelector((state) => state.filters.selectedSizes);
    const selectedFabrics = useSelector((state) => state.filters.selectedFabrics);
       
    const priceRange = useSelector((state) => state.filters.priceRange);
    const initialMaxPrice = 10000;


    const handlePriceChange = (min, max) => {
       dispatch(setPriceRange({ min, max }));
    };
    // console.log(size)
    useEffect(() => {
      // Dispatch action to set all fabrics initially
      fabrics.forEach((fabric) => dispatch(toggleFabric(fabric)));
    }, [dispatch, fabrics]);

    const handleSizeToggle = (size) => {
      dispatch(toggleSize(size));
      // console.log('clicked')
      // console.log(size)
      // console.log(selectedSizes)
    };
    
      const handleFabricToggle = (fabric) => {
        dispatch(toggleFabric(fabric));
        // console.log(fabric)
        // console.log(selectedFabrics)
      };
  return (
    <div className='flex flex-col mb-[3vw] h-[75vw] text-[2vw] md:text-[1.6vw] md:h-[50vw]'>
    {/* //   border-r-[2px] solid border-slate-600 */}
     
       <div className='flex flex-col md:w-[5vw] w-[25vw] mx-[4vw]' >
        <p className='font-semibold text-[1.6vw]  md:text-[2.2vw] my-[1vw] '>Filter</p>
      {sizes.map((size, index) => (
        <label key={size}>
          <input
            type="checkbox"
            checked={selectedSizes.includes(size)}
            onChange={() => handleSizeToggle(size)}
            className='mr-[0.9vw] my-[0.4vw]' 
          />
          {size}
        </label>
      ))}
    </div>

    {/* Price */}

      <div className='flex flex-col md:w-[8vw] text-[2vw] md:text-[1.6vw] w-[25vw] mx-[4vw] my-[4vw]'>
      <p className='font-semibold text-[2vw]  md:text-[2.2vw] my-[1vw] '>Time</p>
      {fabrics.map((fabric, index) => (
        <label key={fabric}>
          <input
            type="checkbox"
            checked={selectedFabrics.includes(fabric)}
            onChange={() => handleFabricToggle(fabric)}
            className='mr-[0.9vw]  my-[0.4vw]' 

          />
          {fabric}
        </label>
      ))}
      
    </div>

    </div>
  )
}

export default FilterHistory



























// import React from 'react'

// const FilterHistory = () => {
//   return (
//     <div>
//         <div>
//         <div className='mt-[4vw]' >
//     <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>Filter</div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="All" onChange={() => handleFabricChange("All")} 
//             className="" defaultChecked={FabricName.includes("All") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="Delivered" onChange={() => handleFabricChange("Delivered")} 
//             className="" defaultChecked={FabricName.includes("Delivered") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="ON the way" onChange={() => handleFabricChange("ON the way")}
//              className="" defaultChecked={FabricName.includes("ON the way") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="Cancelled" onChange={() => handleFabricChange("Cancelled")}
//              className="" defaultChecked={FabricName.includes("Cancelled") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="Returned" onChange={() => handleFabricChange("Returned")}
//              className="" defaultChecked={FabricName.includes("Returned") ? true : false} />
//         </div>
        
//     </div>
//     <div className='mt-[4vw]' id='Time' >
//     <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>Time</div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="All Time" onChange={() => handleFabricChange("All Time")} 
//             className="" defaultChecked={FabricName.includes("All Time") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="LAst 30 Days" onChange={() => handleFabricChange("LAst 30 Days")} 
//             className="" defaultChecked={FabricName.includes("LAst 30 Days") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="Last 6 month" onChange={() => handleFabricChange("Last 6 month")}
//              className="" defaultChecked={FabricName.includes("Last 6 month") ? true : false} />

//         </div>
//         <div className='font-poppins mb-[0.6vw]' >
//             <Checkbox label="Last 1 year" onChange={() => handleFabricChange("Last 1 year")}
//              className="" defaultChecked={FabricName.includes("Last 1 year") ? true : false} />
//         </div>
        
//     </div>
//     </div>
//     </div>
//   )
// }

// export default FilterHistory