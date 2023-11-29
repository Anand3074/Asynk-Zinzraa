import React from 'react'
import { useEffect, useState   } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSize, toggleFabric, setPriceRange } from '../../Redux/Product/filter';


const Filtersss = () => {
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
    <div className='flex flex-col mb-[3vw] h-[75vw] text-[2vw] md:text-[1.6vw] md:h-[50vw] border-r-[2px] solid border-slate-600'>
       <div className='flex flex-col md:w-[5vw] w-[25vw] mx-[4vw]' >
        <p className='font-semibold text-[1.6vw]  md:text-[2.2vw] my-[1vw] '>Size</p>
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



    <div className='my-[4vw] px-[2vw]'>
       <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>
         Price
     </div>
     <div className='flex flex-col'>
         <input type='range' className='sm:w-[18vw] w-[20vw] sm:h-[0.8vw] h-[1.2vw] 
       my-[1vw] accent-color'
                defaultValue={0}
                min={0}
                 max={10000} 
                onChange={(e) => handlePriceChange(0, e.target.value)}
                />
                <div className='flex flex-row gap-[10vw] text-[2vw] sm:text-[1.5vw] mt-[1.5vw] font-semibold sm:mt-[0.2vw]'>
                  <div>
                    $0
                  </div>
                  <div>
                  {priceRange ? (
            <div>${priceRange.max}</div>
          ) : (
            <div>${initialMaxPrice}</div>
          )}                  </div>
                </div>
              </div>
            </div>

 {/* Fabric */}
      <div className='flex flex-col md:w-[8vw] text-[2vw] md:text-[1.6vw] w-[25vw] mx-[4vw] my-[4vw]'>
      <p className='font-semibold text-[2vw]  md:text-[2.2vw] my-[1vw] '>Fabric</p>
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

export default Filtersss
























































// // import React, { useState } from 'react';
// // import { Checkbox } from '@material-tailwind/react';

// // const Filtersss = ({ setMax, setMin, min, max, fetchProduct, sizeList, fabricList }) => {
// //   const [maxPrice, setMaxPrice] = useState(10000);
// //   const [selectedSizes, setSelectedSizes] = useState([]);
// //   const [selectedFabrics, setSelectedFabrics] = useState([]);

// //   const handleSizeChange = (size) => {
// //     if (!selectedSizes.includes(size)) {
// //       setSelectedSizes([...selectedSizes, size]);
// //     } else {
// //       setSelectedSizes((prevSizes) => prevSizes.filter((prevSize) => prevSize !== size));
// //     }
// //   };

// //   const handleFabricChange = (fabric) => {
// //     if (!selectedFabrics.includes(fabric)) {
// //       setSelectedFabrics([...selectedFabrics, fabric]);
// //     } else {
// //       setSelectedFabrics((prevFabrics) => prevFabrics.filter((prevFabric) => prevFabric !== fabric));
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Size Filters */}
// //       <div>
// //         <div>Size</div>
// //         <div>
// //           {['Small', 'Medium', 'Large', 'XL', '2XL'].map((size) => (
// //             <div key={size}>
// //               <Checkbox
// //                 label={size}
// //                 onChange={() => handleSizeChange(size)}
// //                 defaultChecked={selectedSizes.includes(size)}
// //                 // color="indigo"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Price Filter */}
// //       <div>
// //         <div>Price</div>
// //         {/* ... (your price filter logic) ... */}
// //       </div>

// //       {/* Fabric Filters */}
// //       <div>
// //         <div>Fabric</div>
// //         <div>
// //           {['Silk', 'Cotton', 'Linen', 'Rayon'].map((fabric) => (
// //             <div key={fabric}>
// //               <Checkbox
// //                 label={fabric}
// //                 onChange={() => handleFabricChange(fabric)}
// //                 defaultChecked={selectedFabrics.includes(fabric)}
// //                 // color="bg-teal-dark"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Filtersss;

// // import React from 'react'
// // import { Checkbox } from '@material-tailwind/react'
// // import { useState } from 'react'

// // const Filtersss = ({setMax, setmin, min, max, fetchProduct, sizeList, FabricList }) => {
// //     const [maxPrice, setMaxPrice] = useState(10000)
// //     let SizeName=['S','M','L','XL','2XL']
// //     let FabricName=['Silk','Cotton', 'Linen' , 'Rayon']
// //     const handleFabricChange = (Fabric) => {
// //         if (!FabricName.includes(Fabric.value)) {
// //             setFabricName(() => [...FabricName, Fabric.value])

// //         }
// //         else {
// //             setFabricName((prevState) => prevState.filter((prevItem) => prevItem !== Fabric.value))
// //         }
// //         setOpen(false)

// //         console.log(FabricName)
// //     }
// //     const handleSizeChange = (Size, e) => {

// //         console.log(SizeName.includes(Size.name), Size.name)
// //         if (!SizeName.includes(Size.name)) {
// //             setSizeName(() => [...SizeName, Size.name])

// //         }
// //         else {
// //             setSizeName((prevState) => prevState.filter((prevItem) => prevItem !== Size.name))
// //         }
// //         setOpen(false)
// //         console.log(SizeName)
// //     }

// //   return (
// //     <div className='mt-[2vw] ml-[2vw] border-r border-r-[1px] 
// //                     border-slate-300  px-[2vw] py-[2vw]'>
// //     <div className=' flex flex-row text-[1.2vw] font-semibold gap-[3vw] '>
// //         <h4 className='' >Filter</h4>
// //             <p onClick={() => { 
// //                 setFabricList([])
// //                 setSizeList([])
// //                 setmin(0)
// //                 setMax(100000)
// //                 }}
// //             className='text-red-600' >Clear Filter</p>
// //     </div>
// //      <div className='mt-[4vw] ' >
// //         <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1vw] mt-[7vw]'>Size</div>
// //         <div className=" flex flex-col f">

// //     <div className='font-poppins mb-[0.6vw]'>
// //   <Checkbox label="Small" onChange={() => 
// //     handleSizeChange("Small")} className=""
// //      defaultChecked={SizeName.includes("Small") ? true : false} />
// //      </div>

// //     <div className='font-poppins mb-[0.6vw]'>
// //   <Checkbox label="Medium" onChange={() => 
// //     handleSizeChange("Medium")} className="" 
// //     defaultChecked={SizeName.includes("Medium") ? true : false} />
// //     </div>

// //     <div className='font-poppins mb-[0.6vw]'>
// //   <Checkbox label="Large" onChange={() => 
// //     handleSizeChange("Large")} className="" 
// //     defaultChecked={SizeName.includes("Large") ? true : false} />
// //     </div>

// //     <div className='font-poppins mb-[0.6vw]'>
// //   <Checkbox label="XL" onChange={() => 
// //     handleSizeChange("XL")} className="" 
// //     defaultChecked={SizeName.includes("XL") ? true : false} />
// //     </div>

// //     <div className='font-poppins mb-[0.6vw]'>
// //   <Checkbox label="2XL" onChange={() => 
// //     handleSizeChange("2XL")} className="" 
// //     defaultChecked={SizeName.includes("2XL") ? true : false} />
// //         </div>
// //     </div> 
// // </div>

// // <div className=''>
// //               <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>
// //                 Price
// //               </div>
// //               <div className='flex flex-col'>
// //                 <input type='range' className='sm:w-[18vw] w-[20vw] sm:h-[0.8vw] h-[1.2vw] 
// //                 my-[1vw] accent-color'
// //                 defaultValue={0}
// //                 min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
// //                 <div className='flex flex-row gap-[10vw] text-[2vw] sm:text-[1.5vw] mt-[1.5vw] font-semibold sm:mt-[0.2vw]'>
// //                   <div>
// //                     $ 0
// //                   </div>
// //                   <div>
// //                     ${maxPrice}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
    
// // {/* Fabric */}

// // <div className='mt-[4vw]' >
// //     <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>Fabric</div>
// //         <div className='font-poppins mb-[0.6vw]' >
// //             <Checkbox label="Silk" onChange={() => handleFabricChange("Silk")} 
// //             className="" defaultChecked={FabricName.includes("Silk") ? true : false} />

// //         </div>
// //         <div className='font-poppins mb-[0.6vw]' >
// //             <Checkbox label="Cotton" onChange={() => handleFabricChange("Cotton")} 
// //             className="" defaultChecked={FabricName.includes("Cotton") ? true : false} />

// //         </div>
// //         <div className='font-poppins mb-[0.6vw]' >
// //             <Checkbox label="Linen" onChange={() => handleFabricChange("Linen")}
// //              className="" defaultChecked={FabricName.includes("Linen") ? true : false} />

// //         </div>
// //         <div className='font-poppins mb-[0.6vw]' >
// //             <Checkbox label="Rayon" onChange={() => handleFabricChange("Rayon")}
// //              className="" defaultChecked={FabricName.includes("Rayon") ? true : false} />

// //         </div>
// //     </div>

// //     </div>


// //   )
// // }

// // export default Filtersss