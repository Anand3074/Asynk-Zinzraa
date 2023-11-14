import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import { useState } from 'react'

const Filtersss = ({setMax, setmin, min, max, fetchProduct, sizeList, FabricList }) => {
    const [maxPrice, setMaxPrice] = useState(10000)
    let SizeName=['S','M','L','XL','2XL']
    let FabricName=['Silk','Cotton', 'Linen' , 'Rayon']
    const handleFabricChange = (Fabric) => {
        if (!FabricName.includes(Fabric.value)) {
            setFabricName(() => [...FabricName, Fabric.value])

        }
        else {
            setFabricName((prevState) => prevState.filter((prevItem) => prevItem !== Fabric.value))
        }
        setOpen(false)

        console.log(FabricName)
    }
    const handleSizeChange = (Size, e) => {

        console.log(SizeName.includes(Size.name), Size.name)
        if (!SizeName.includes(Size.name)) {
            setSizeName(() => [...SizeName, Size.name])

        }
        else {
            setSizeName((prevState) => prevState.filter((prevItem) => prevItem !== Size.name))
        }
        setOpen(false)
        console.log(SizeName)
    }

  return (
    <div className='mt-[2vw] ml-[2vw] border-r border-r-[1px] 
                    border-slate-300  px-[2vw] py-[2vw]'>
    <div className=' flex flex-row text-[1.2vw] font-semibold gap-[3vw] '>
        <h4 className='' >Filter</h4>
            <p onClick={() => { 
                setFabricList([])
                setSizeList([])
                setmin(0)
                setMax(100000)
                }}
            className='text-red-600' >Clear Filter</p>
    </div>
     <div className='mt-[4vw] ' >
        <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1vw] mt-[7vw]'>Size</div>
        <div className=" flex flex-col f">

    <div className='font-poppins mb-[0.6vw]'>
  <Checkbox label="Small" onChange={() => 
    handleSizeChange("Small")} className=""
     defaultChecked={SizeName.includes("Small") ? true : false} />
     </div>

    <div className='font-poppins mb-[0.6vw]'>
  <Checkbox label="Medium" onChange={() => 
    handleSizeChange("Medium")} className="" 
    defaultChecked={SizeName.includes("Medium") ? true : false} />
    </div>

    <div className='font-poppins mb-[0.6vw]'>
  <Checkbox label="Large" onChange={() => 
    handleSizeChange("Large")} className="" 
    defaultChecked={SizeName.includes("Large") ? true : false} />
    </div>

    <div className='font-poppins mb-[0.6vw]'>
  <Checkbox label="XL" onChange={() => 
    handleSizeChange("XL")} className="" 
    defaultChecked={SizeName.includes("XL") ? true : false} />
    </div>

    <div className='font-poppins mb-[0.6vw]'>
  <Checkbox label="2XL" onChange={() => 
    handleSizeChange("2XL")} className="" 
    defaultChecked={SizeName.includes("2XL") ? true : false} />
        </div>
    </div> 
</div>

<div className=''>
              <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>
                Price
              </div>
              <div className='flex flex-col'>
                <input type='range' className='sm:w-[18vw] w-[20vw] sm:h-[0.8vw] h-[1.2vw] 
                my-[1vw] accent-color'
                defaultValue={0}
                min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                <div className='flex flex-row gap-[10vw] text-[2vw] sm:text-[1.5vw] mt-[1.5vw] font-semibold sm:mt-[0.2vw]'>
                  <div>
                    $ 0
                  </div>
                  <div>
                    ${maxPrice}
                  </div>
                </div>
              </div>
            </div>
    
{/* Fabric */}

<div className='mt-[4vw]' >
    <div className='font-bold sm:text-[2vw] text-[4vw] sm:my-[1.5vw] mt-[7vw]'>Fabric</div>
        <div className='font-poppins mb-[0.6vw]' >
            <Checkbox label="Silk" onChange={() => handleFabricChange("Silk")} 
            className="" defaultChecked={FabricName.includes("Silk") ? true : false} />

        </div>
        <div className='font-poppins mb-[0.6vw]' >
            <Checkbox label="Cotton" onChange={() => handleFabricChange("Cotton")} 
            className="" defaultChecked={FabricName.includes("Cotton") ? true : false} />

        </div>
        <div className='font-poppins mb-[0.6vw]' >
            <Checkbox label="Linen" onChange={() => handleFabricChange("Linen")}
             className="" defaultChecked={FabricName.includes("Linen") ? true : false} />

        </div>
        <div className='font-poppins mb-[0.6vw]' >
            <Checkbox label="Rayon" onChange={() => handleFabricChange("Rayon")}
             className="" defaultChecked={FabricName.includes("Rayon") ? true : false} />

        </div>
    </div>

    </div>


  )
}

export default Filtersss