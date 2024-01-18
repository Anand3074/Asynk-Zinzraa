import React,{useState} from 'react'
import { Input,Textarea, Button, } from "@material-tailwind/react"
import { ArrowUpTrayIcon,TrashIcon } from '@heroicons/react/24/solid';
import {  ref, set, push } from "firebase/database";
import { useDispatch,useSelector } from 'react-redux';
// import { fetchModal, fetchModalData } from '../../actions/mobileActions';
import { storage } from '../../../../firebase/firebase';
import {ref as uploadRef ,getDownloadURL, uploadBytesResumable, listAll,deleteObject} from "firebase/storage"
import UploadImage from './UploadImage.jsx';
import SelectImages from './SelectImage2.jsx';
import SelectCover from './SelectCover.jsx';
// import { categoryData } from '../../data/categoryData';
import Select, { components } from "react-select";
const AddProduct = ({ coverImage,setCoverImage,
    addProduct,
    description,setDescription,
    title,setTitle,
    size, setSize,
    fabric, setFabric,
    price,setPrice,image,
    setImage,
    totalImageList,setTotalImageList,
    category,setCategory,
    stock,setStock,
    realPrice,setRealPrice,
    showPrice,setShowPrice,
   
  }) => {
  const dispatch = useDispatch();

  
  // const {error,loading,isModals,modals} = useSelector(
  //   (state) => state.modals
  // );
  // const {modelInfo,modelLoading,isModelsDescription} = useSelector(
  //   (state) => state.modalDescription
  // );
  const [progressPercent, setProgressPercent] = useState(0)
  const [openModel, setOpenModel] = useState(false);
  const [openSelectModel, setOpenSelectModel] = useState(false);
  const [openCoverModel, setOpenCoverModel] = useState(false);
  const [optionList, setOptionList] = useState([])
  const closeModal = () => {
    setOpenModel(false);
  };
  const closeSelectModal = () =>{
    setOpenSelectModel(false)
  }
  const closeCoverModal =() =>{
    setOpenCoverModel(false)
  }
  const handlePreview = (e) =>{
    
     
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const files = e.target[0]?.files;
  
    if (!files || files.length === 0) return;
  
    const uploadPromises = [];
  
    const filesToUpload = Array.from(files).slice(0, 4);
  
    filesToUpload.forEach((file) => {
      const storageRef = uploadRef(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      const promise = new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgressPercent(progress);
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                resolve(downloadURL);
              })
              .catch((error) => {
                reject(error);
              });
          }
        );
      });
  
      uploadPromises.push(promise);
    });
  
    Promise.all(uploadPromises)
      .then((downloadURLs) => {
        setImage((prev) => [...prev, ...downloadURLs]);
        setOpenModel(false); // Close the modal after successful upload
      })
      .catch((error) => {
        alert(error);
      });
  };
  

  const deleteStorageImage = (myImage) =>{
  const newImageList = image.filter((im) =>  im!== myImage)
    // console.log(image)
    setImage(newImageList)
  }
  const handleRemove = (ima) =>{
    const newImageList = totalImageList.filter((im) =>  im!== ima)
    // console.log(totalImageList)
    setTotalImageList(newImageList)
    setOpenSelectModel(false)
  }
   const handleCoverRemove = (ima) =>{
    const newImageList = coverImage.filter((im) =>  im!== ima)
    // console.log(totalImageList)
    setCoverImage(newImageList)
  }
  const changeCategory =(e) =>{
    setCategory(e.target.value)
  }
  const InputSelect = (props) => {
  const { autoComplete = props.autoComplete } = props.selectProps;
  return <components.Input className='w-full' {...props} autoComplete={autoComplete} />;
};

//   console.log(image)
//   console.log(totalImageList)
//   console.log(coverImage)
  return (
    <div className='col-span-3 flex items-center justify-center     ' >
    <div className='mt-12 text-center w-full xl:w-[800px] px-12 py-8 rounded-[15px] ' >
     <h3 className='font-bold text-[3rem]' >  Add  Products</h3>
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
        </select>
    <select  onChange={(e)=>setStock(e.target.value)} value={stock} 
       className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400
        px-3 py-3 rounded-[10px] w-full outline-none'>
        <option  value=""  disabled hidden>Choose a Stock</option>
        <option  value="in stock">In Stock</option>
        <option  value="out of stock">Out of Stock</option>
  </select>
</div>
<div>  
            {/* <div>
                 <input
                type="file"
                name="avatar"
                accept="image/*"
              value={image}
               onChange={(e)=>setImage(e.target.value)}
               
              />
            </div> */}
           {/* <div> */}          
        <UploadImage totalImageList={totalImageList} 
        setTotalImageList={setTotalImageList} handleRemove={handleRemove
        } handleSubmit={handleSubmit} image={image} setImage={setImage}
         openModel={openModel} setOpenModel={setOpenModel} closeModal={closeModal} />
          {/* <div className='flex items-center justify-center flex-wrap gap-3 mb-12' id="createProductFormImage">
              {image && image.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
                <p onClick={()=>deleteStorageImage(ima)} className='absolute cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X</p>
               <img  className='w-[120px] cursor-pointer ' key={index} src={ima} alt="Product Preview" />
               </div>
                
              ))}
            </div> */}
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
             <div className='flex md:flex-row flex-col items-center justify-between' >
            <h4 className='text-[1.4rem] font-[600] my-4' >Select Product Images: </h4>  
            <SelectImages closeModal={closeSelectModal} openModel={openSelectModel}
             setOpenModel={setOpenSelectModel} image={image} setImage={setImage} 
             totalImageList={totalImageList} setTotalImagelist={setTotalImageList}
              handleRemove={handleRemove} />
            </div>
            <div className='flex items-center justify-center flex-wrap gap-6 my-12' id="createProductFormImage">

              {totalImageList && totalImageList?.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
                <p onClick={()=>handleRemove(ima)} className='absolute cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X</p>
                <img className='w-[150px]' key={index} src={ima} alt="Product Preview" />
               </div>
              ))}
            </div>
            </div>
              <div className='my-16 border-[1px] rounded-xl border-gray-300 px-12 py-3 ' > 
             <div className='flex md:flex-row flex-col  items-center justify-between' >
            <h4 className='text-[1.4rem] font-[600] my-4' >Select Cover Images: </h4>  
            <SelectCover closeModal={closeCoverModal} openModel={openCoverModel}
             setOpenModel={setOpenCoverModel} image={image} setImage={setImage}
              totalImageList={coverImage} setTotalImagelist={setCoverImage}
               handleRemove={handleCoverRemove} />
            </div>
            <div className='flex items-center justify-center flex-wrap gap-6 my-12' id="createProductFormImage">

              {coverImage!==[] ? coverImage?.map((ima, index) => (
                <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
                <p onClick={()=>handleCoverRemove(ima)} className='absolute cursor-pointer text-red-500 font-[600] top-2 right-1 w-[20px] ' >X</p>
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
                <Button onClick={addProduct}  size="lg">Submit</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddProduct