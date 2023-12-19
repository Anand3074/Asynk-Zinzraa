import React from 'react';
import { FaFilter } from "react-icons/fa";

const BottomFilter = ({toggleFilter , isFilterVisible,
  setFilterVisible}) => {
 return (
    <div className="fixed h-[10vw] bottom-[0vw] sm:hidden w-full bg-white"       style={{ zIndex: 1000 }}
    >
      <div className="grid grid-cols-1 h-full p-[2vw] bg-gray-300">
        {/* <button className=" text-center text-[3vw] font-semibold font-metro text-gray-800  border-r-[0.2vw] border-r-gray-400">
          
        </button> */}
        {/* <button className=" text-center  text-[3vw] font-semibold font-metro text-gray-800  border-r-[0.2vw] border-r-gray-400">
          Price
        </button> */}
        <button onClick={() => toggleFilter()} className=" flex flex-row text-red-700
          justify-center items-center gap-[2vw] text-[4vw] 
          font-semibold font-metro text-center ">
          <FaFilter className='text-gray-800'/> APPLY
        </button>
      </div>
    </div>
 );
};

export default BottomFilter;