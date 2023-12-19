import React from 'react'
// import { categoryData } from '../../data/categoryData';
import SelectCover from './SelectCover.jsx';
import SelectImages from './SelectImage2.jsx';
const EditProductForm = ({price,setPrice,category,description,setDescription,
    title,setTitle,
    size, setSize,
    fabric, setFabric,
  setCategory,
  coverImage,setCoverImage,
  handleCoverRemove, handleRemove,totalImageList,setTotalImageList,closeCoverModal,closeSelectModal,
  openCoverModel,openSelectModel,setOpenCoverModel,setOpenSelectModel,image,setImage,
  handleAddImage,handleAddCover,handleUpdateForm,realPrice,setRealPrice,stock,setStock,
showPrice,setShowPrice,}) => {

  return (
      <div className='col-span-3 flex items-center justify-center     ' >
         <div className='mt-12 text-center w-full xl:w-[800px] px-12 py-8 rounded-[15px] ' >
          <h3 className='font-bold text-[3rem]' >  Edit  Products</h3>
          <div className='my-6 ' >
           <div className="flex my-6 flex-col w-full items-end gap-6">   
     
       
           <select  onChange={(e)=>setCategory(e.target.value)} value={category}    
    className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400
     px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value="" selected disabled hidden>Choose a Category</option>
        <option  value='Western'>Western</option>
        <option  value='Dresses'>Dresses</option>
        <option  value='Saree'>Saree</option>
        <option  value='Kurtas'>Kurtas</option>
        <option  value='Ethnic'>Ethnic</option>
      </select>
      <input value={title} onChange={(e)=>setTitle(e.target.value)}
      placeholder='Enter Product Name' className=' bg-white border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />
      <input value={description} maxLength={120} onChange={(e)=>setDescription(e.target.value)}
      placeholder='Enter Product Description' className=' bg-white border-[1px] 
      border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] 
      w-full outline-none' type="text" />

    <input value={showPrice} onChange={(e)=>setShowPrice(e.target.value)} placeholder='Enter Show Price' className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' type="text" />
   <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Price' className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' />
    <input value={realPrice} onChange={(e)=>setRealPrice(e.target.value)} placeholder='Enter Real Product Price' className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none' type="text" />
    

   <select  onChange={(e)=>setSize(e.target.value)} value={size}   
    className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value='' disabled hidden>Choose a Size</option>
        <option  value="S">S</option>
        <option  value="M">M</option>
        <option  value="L">L</option>
        <option  value="XL">XL</option>
        <option  value="XXL">XXL</option>
        </select>
        <select  onChange={(e)=>setFabric(e.target.value)} value={fabric}   
    className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option value="" disabled hidden>Choose a Fabric</option>
        <option  value="Silk">Silk</option>
        <option  value="Cotton">Cotton</option>
        <option  value="Rayon">Rayon</option>
        <option  value="Linen">Linen</option>
        </select><select onChange={(e)=>setStock(e.target.value)}  value={stock}    className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400 px-3 py-3 rounded-[10px] w-full outline-none'>
             <option  value="none" selected disabled hidden>Choose a Stock</option>
            <option  value="in stock">In Stock</option>
        <option  value="out of stock">Out of Stock</option>
      </select>
    </div>

    
     <div className="flex my-6 flex-col w-full items-center gap-6">
      {/* <UploadImageModal  name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
        price={price}
        setPrice={setPrice}
        openModel={openModel}
        setOpenModel={setOpenModel}
        addProduct={addProduct}
        type={type}
        setType={setType}
        database={database}
        closeModal={closeModal}
        assetContent={assetContent}
         /> */}
    </div>
            
            
            {/* <div>
                 <input
                type="file"
                name="avatar"
                accept="image/*"
              value={image}
               onChange={(e)=>setImage(e.target.value)}
               
              />
            </div> */}
           <div>
           
          
        {/* <UploadImage totalImageList={totalImageList} setTotalImageList={setTotalImageList} handleRemove={handleRemove} handleSubmit={handleSubmit} image={image} setImage={setImage} openModel={openModel} setOpenModel={setOpenModel} closeModal={closeModal} /> */}
          <div className='flex items-center justify-center flex-wrap gap-3 mb-12' id="createProductFormImage">
              {/* {totalImageList && totalImageList.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
                <p  className='absolute cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X</p>
               <img  className='w-[120px] cursor-pointer ' key={index} src={ima} alt="Product Preview" />
               </div>
                
              ))} */}
            </div>
        </div>
            {/* <div> 
            <h4 className='text-[1.4rem] font-[600] my-4' >Choose  Images: </h4>  
            <div className='flex items-center justify-center flex-wrap gap-3' id="createProductFormImage">

              {modelInfo?.pictures && modelInfo?.pictures?.map((image, index) => (
            
                <img onClick={(e)=>setTotalImageList((prev)=>[...prev,image])} className='w-[80px] cursor-pointer ' key={index} src={image} alt="Product Preview" />
               
              ))}
            </div>
            </div> */}
            
             <div className='my-16 border-[1px] rounded-xl border-gray-300 px-12 py-3' > 
             <div className='flex items-center justify-between' >
            <h4 className='text-[1.4rem] font-[600] my-4' >Select Product Images: </h4>  
            <SelectImages handleAddImage={handleAddImage} type="update" closeModal={closeSelectModal} openModel={openSelectModel} setOpenModel={setOpenSelectModel} image={image} setImage={setImage} totalImageList={totalImageList} setTotalImagelist={setTotalImageList} handleRemove={handleRemove} />
            </div>
            <div className='flex items-center justify-center flex-wrap gap-6 my-12' id="createProductFormImage">

              {totalImageList && totalImageList?.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
                <p onClick={()=>handleRemove(index)} className='absolute cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X </p>
                <img className='w-[150px]' key={index} src={ima} alt="Product Preview" />
               </div>
              ))}
            </div>
            </div>
              <div className='my-16 border-[1px] rounded-xl border-gray-300 px-12 py-3 ' > 
             <div className='flex items-center justify-between' >
            <h4 className='text-[1.4rem] font-[600] my-4' >Select Cover Images: </h4>  
             <SelectCover handleAddCover={handleAddCover} type="update" closeModal={closeCoverModal}
              openModel={openCoverModel} setOpenModel={setOpenCoverModel} image={image} setImage={setImage}  totalImageList={coverImage} setTotalImagelist={setCoverImage} handleRemove={handleCoverRemove} />
            </div> 
            <div className='flex items-center justify-center flex-wrap gap-6 my-12' id="createProductFormImage">
              {coverImage!==[] ? coverImage?.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
                <p onClick={()=>handleCoverRemove(index)} className='absolute cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X</p>
                <img className='w-[150px]' key={index} src={ima} alt="Product Preview" />
               </div>
              )) : (
                <div className='flex items-center justify-center' >
                  <h4 className='text-gray-400' >Select a Image</h4>
                </div>
              )}
            </div>
            </div>
            <div className='my-6' >
                <button onClick={handleUpdateForm}   className='px-6 py-3 bg-blue-400 text-white  rounded-lg ' >Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default EditProductForm