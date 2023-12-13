import React from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Button } from '@material-tailwind/react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { Fragment, useState, useEffect } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { IoMdAddCircleOutline } from "react-icons/io";
import { set } from 'firebase/database';
import { database, fireDB , storage} from "../../../../firebase/firebase";
import {ref as uploadRef ,getDownloadURL, uploadBytesResumable,
listAll,deleteObject} from "firebase/storage"
const SelectImages = ({setOpenModel,closeModal,openModel,image,setImage,
  totalImageList,setTotalImagelist,handleRemove,handleAddImage,type, handleSubmit}) => {
  return (
  <>
      <div className="flex items-center justify-center ">
        <div className='my-4 flex items-center justify-center flex-col' >
              <Button onClick={()=>setOpenModel(true)} className='flex 
              items-center justify-center gap-3' size="lg"> <ArrowUpTrayIcon
               className='w-[30px]' /> Upload Image</Button> 
               
            </div>
      </div>

      <div>
        <Transition appear show={openModel} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  transform overflow-scroll rounded-2xl 
                bg-white px-12 py-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Choose a Image
                  </Dialog.Title>
                  <div onClick={()=>setOpenModel(false)} className='absolute cursor-pointer 
                  top-5 flex items-center justify-center text-white text-[15px] bg-blue-500 w-[30px] 
                  rounded-[50px] h-[30px] px-2 py-2 right-10 text-lg ' >
                    X
                  </div> 
         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 6 }}>
          <Masonry>
            {totalImageList &&
              totalImageList.map((asset) => (
                <div
                  key={asset} // Make sure to add a unique key for each child
                  onClick={() => handleSelect(asset)}
                  className='border-gray-200 border-[1px] mx-3 my-3 px-6 py-4 rounded-[15px]'>
                  <img className='w-[150px]' src={asset} alt='' />
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
         <div className='my-12 ' >
           <h4 className='font-[600] text-[1.5rem] ' >Selected Images:</h4>
           <div>
                  <IoMdAddCircleOutline fill='blue-600' onClick={handleAddImage}
            className='flex justify-center items-center w-[5vw] h-[5vw]'/>
                  </div>
         <div className='flex  flex-wrap items-start justify-start gap-6 my-3 ' >
          
             {totalImageList && totalImageList?.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
              {  <p onClick={()=>handleRemove(ima)} className='absolute 
              cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X</p>}
                <img className='w-[150px]' key={index} src={ima} alt="Product Preview" />
               </div>
              ))}
             
         </div>
          <div className='flex items-center justify-center my-6 ' >
                <button className='bg-blue-400 px-6 py-3 text-white rounded-lg '
                 onClick={handleSubmit} >
                  Add Images
                </button>
              </div>
         </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </div>

  </>
    
     
  )
}

export default SelectImages
 
   