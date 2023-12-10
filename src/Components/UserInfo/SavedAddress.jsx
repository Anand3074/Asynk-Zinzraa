import React from 'react'
import AddAddress from './AddAddress'
import { database } from "../../firebase/firebase";
import { HomeIcon, BuildingOfficeIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';
const SavedAddress = ({name,setName,setEmail,email,phone,setPhone,addresses,setAddresses,
  updateProfileInfo,isOpen,setIsOpen,updateAddressInfo,briefAddress,setBriefAddress,city,
  setCity,pinCode,setPinCode,alternateNumber,setAlternateNumber,state,setState,addressPersonName,
  setAddressPersonName,addressAdded,setAddressAdded,isDefault,setIsDefault,addressType,setAddressType,
  removeAddresss}) => {

  return (
    <div className='my-6 px-3 lg:px-24' >
        <div className='flex items-center justify-between' >
            <p className='xl:text-[1.3rem] text-[1rem] font-[600] ' >Saved Addresses:</p>
            <AddAddress addressAdded={addressAdded} setAddressAdded={setAddressAdded} 
            briefAddress={briefAddress} addressPersonName={addressPersonName} 
            setAddressPersonName={setAddressPersonName} setBriefAddress={setBriefAddress} 
            city={city} setCity={setCity} pinCode={pinCode} setPinCode={setPinCode}
             isDefault={isDefault} addressType={addressType} setAddressType={setAddressType} 
             setIsDefault={setIsDefault} alternateNumber={alternateNumber}
              setAlternateNumber={setAlternateNumber} state={state} setState={setState} 
              updateAddressInfo={updateAddressInfo} updateProfileInfo={updateProfileInfo}
               isOpen={isOpen} setIsOpen={setIsOpen}  name={name} setName={setName}
                email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}
                 addresses={addresses} setAddresses={setAddresses}/>
        </div>
        <div className='flex items-start my-6 flex-wrap justift-start' >
        {addresses && addresses?.map((address)=>(
           <div className={`${address.default ? "bg-white border-[1px] border-gray-400" : "bg-gray-200" } lg:w-[280px] w-full px-8 my-4 mx-3 py-4 rounded-[10px]`} >
           {
            address.addressType === "home" &&   <HomeIcon className="w-[25px] text-[#DE562C]" />
           }
            {
            address.addressType === "office" &&   <BuildingOfficeIcon className="w-[25px] text-[#DE562C]" />
           }
           {
            address.addressType === "other" &&    <BuildingLibraryIcon className="w-[25px] text-[#DE562C]" />
           }
           {address.default && <h4 className='font-[500] ' >Default Address</h4>  }
           
           <h4 className='text-[12px]  xl:text-[15px] mb-1 ' >{address.addressPersonName}</h4>
           <h4 className='text-[12px]  xl:text-[15px] mb-1 ' >{address.alternateNumber}</h4>
           <h4 className='text-[12px]  xl:text-[15px] mb-1 ' >{address.briefAddress}</h4>
            <p className='text-[12px]  xl:text-[15px] mb-1' >{address.city}, {address.state}</p>
            <p className='text-[12px]  xl:text-[15px]' >{address.pinCode}</p>
            <div className='flex items-center justify-start mt-2' >
   
              <button onClick={()=>removeAddresss(address.id)} className=' text-red-500 cursor-pointer ' >Remove</button>
            </div>
        </div>
        ))}
       
        </div>
    </div>
  )
}

export default SavedAddress