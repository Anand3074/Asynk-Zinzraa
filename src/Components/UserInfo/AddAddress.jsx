import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { Checkbox } from "@material-tailwind/react";
import { BuildingLibraryIcon, HomeIcon } from "@heroicons/react/24/outline";
import { BuildingOfficeIcon } from "@heroicons/react/20/solid";

const AddAddress = ({
name,setName,setEmail,email,phone,setPhone,addresses,setAddresses,updateProfileInfo,isOpen,setIsOpen,updateAddressInfo,briefAddress,setBriefAddress,city,setCity,pinCode,setPinCode,alternateNumber,setAlternateNumber,state,setState,addressPersonName,setAddressPersonName,addressAdded,setAddressAdded,isDefault,setIsDefault,addressType,setAddressType
}) => {
  const activeType = "bg-gray-300"
  const notActive ="bg-white"
  const [newAddress, setNewAddress] = useState([])
  
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onAddressAdd = () => {

    setNewAddress((prev)=>[
      ...prev, {briefAddress, alternateNumber, pinCode, city,state,addressPersonName  },
    ])
      
      setAddresses((current) => [
      ...current,
      { briefAddress, alternateNumber, pinCode, city,state,addressPersonName  },
    ]);
        setBriefAddress("")
    setAlternateNumber("")
    setAddressPersonName("")
    setCity("")
    setState("")
    setPinCode("")
       setAddressAdded(true)
    }

    useEffect(() => {
    setNewAddress([])
  }, []);
   
 

  return (
    <>
      <div className=" ">
        <button
          type="button"
          onClick={openModal}
          className=" border-[1px] border-[#DE562C] xl:px-3 xl:py-3 px-1 py-2 rounded-[10px] w-[130px] xl:w-[200px] text-[#DE562C] font-[600] text-[10px] xl:text-[16px] "
        >
        +  Add New Address
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-12 py-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Add New Address
                  </Dialog.Title>
                  <div>
                    <input
                        className="py-3 mt-6 px-3 w-[350px] border-[1px] border-gray-200 outline-none rounded-[10px] "
                        value={addressPersonName}
                        onChange={(e) => setAddressPersonName(e.target.value)}
                        placeholder="Enter Name "
                        type="text"
                      />
                         <input
                        className="py-3 mt-6 px-3 w-[350px] border-[1px] border-gray-200 outline-none rounded-[10px] "
                        value={alternateNumber}
                        onChange={(e) => setAlternateNumber(e.target.value)}
                        placeholder="Enter Phone Number "
                        type="number"
                      />
                     <input
                        className="py-3 mt-6 px-3 w-[350px] border-[1px] border-gray-200 outline-none rounded-[10px] "
                        value={briefAddress}
                        onChange={(e) => setBriefAddress(e.target.value)}
                        placeholder="Enter your Flat no.,Building,Area "
                        type="text"
                      />
                        <input
                        className="py-3 mt-6 px-3 w-[350px] border-[1px] border-gray-200 outline-none rounded-[10px] "
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter your City or District "
                        type="text"
                      />
                         <input
                        className="py-3 mt-6 px-3 w-[350px] border-[1px] border-gray-200 outline-none rounded-[10px] "
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        placeholder="Enter your Pin Code "
                        type="number"
                      />
                     
                        <input
                        className="py-3 mt-6 px-3 w-[350px] border-[1px] border-gray-200 outline-none rounded-[10px] "
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="Enter your State or Union Territory (India) "
                        type="text"
                      />
                       <Checkbox label="Make Default Address" onChange={()=>setIsDefault(true)} className='' />
                       <div className="my-3" >
                       <h4 className="text-gray-400" >Choose Address Type:</h4>
                       <div className="flex my-2 items-center justify-start" >
                      <div onClick={()=>setAddressType("home")} className={`${addressType === "home" ? activeType : notActive } mr-3 border-[1px] border-gray-400 flex items-center justify-center cursor-pointer flex-col px-6 py-2 rounded-[10px]`} >
                        <HomeIcon className="w-[25px] text-[#DE562C]" />
                        <p className="text-gray-600 text-[.8rem]" >Home </p>
                      </div>
                       <div onClick={()=>setAddressType("office")} className={`${addressType === "office" ? activeType : notActive } mr-3 border-[1px] border-gray-400 flex items-center justify-center cursor-pointer  flex-col px-6 py-2 rounded-[10px]`} >
                        <BuildingOfficeIcon className="w-[25px] text-[#DE562C]" />
                        <p className="text-gray-600 text-[.8rem]" >Office </p>
                      </div>
                       <div onClick={()=>setAddressType("other")} className={`${addressType === "other" ? activeType : notActive } mr-3 border-[1px] border-gray-400 flex items-center justify-center cursor-pointer flex-col px-6 py-2 rounded-[10px]`} >
                        <BuildingLibraryIcon className="w-[25px] text-[#DE562C]" />
                        <p className="text-gray-600 text-[.8rem]" >Other </p>
                      </div>
                      </div>
                     
                       </div>
                      <div className="flex items-start justify-start" >

                     
                        <button
                        onClick={updateAddressInfo}
                        className="bg-[#007CFF] px-3 py-3 mt-10 rounded-[10px] w-[100%]  text-white font-[600] text-[16px] "
                      >Add Address</button>
                      </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddAddress;
