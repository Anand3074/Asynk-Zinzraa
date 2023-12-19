import React from 'react';
import { FaFilter } from "react-icons/fa";

const BottomFilter = ({toggleFilter , isFilterVisible,
  setFilterVisible}) => {
 return (
    <div className="fixed h-[10vw] bottom-[0vw] sm:hidden w-full bg-white"       style={{ zIndex: 1000 }}
    >
      <div className="grid grid-cols-3 h-full p-[2vw] bg-gray-300">
        <button className=" text-center text-[3vw] font-semibold font-metro text-gray-800  border-r-[0.2vw] border-r-gray-400">
          Category
        </button>
        <button className=" text-center  text-[3vw] font-semibold font-metro text-gray-800  border-r-[0.2vw] border-r-gray-400">
          Price
        </button>
        <button onClick={() => toggleFilter()} className=" flex flex-row  justify-center items-center gap-[0.5vw] text-[3vw] font-semibold font-metro text-center text-gray-800 ">
          <FaFilter/> Filter
        </button>
      </div>
    </div>
 );
};

export default BottomFilter;