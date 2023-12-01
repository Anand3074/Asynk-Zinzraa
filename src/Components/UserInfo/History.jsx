import React from 'react'
import HistoryItem from './HistoryItem'
import FilterHistory from './FilterHistory'

const History = () => {
  return (
    <div className='mx-[4vw]'>
      <div className='flex flow-row'>
        <div className='flex flex-col'>
        <p className='font-semibold text-[2vw] sm:[1.3vw]'> All orders </p>
        <p className='font-semibold text-[2vw] sm:[1.3vw]'>from anytime</p>
        <div className='flex flex-row '>
      <div className='flex flex-col'>
      <div className='w-[60vw] md:w-[75vw]'>
        <HistoryItem/>
      </div>
      <div className='w-[60vw] md:w-[75vw]'>
        <HistoryItem/>
      </div>
      </div>   
      </div>
        </div>
        <div>
        <FilterHistory/>
        </div>
        

      </div>
        
      </div> 
  )
}

export default History