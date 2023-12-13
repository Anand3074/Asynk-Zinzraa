import React,{useState} from 'react'
import { Input,Textarea, Button, } from "@material-tailwind/react"
import { ArrowUpTrayIcon,TrashIcon } from '@heroicons/react/24/solid';
import {  ref, set, push } from "firebase/database";
import { useDispatch,useSelector } from 'react-redux';
// import { fetchModal, fetchModalData } from '../../../../Redux/AdminP/mobileAction';
import { database, fireDB , storage} from "../../../../firebase/firebase";
import {ref as uploadRef ,getDownloadURL, uploadBytesResumable,
listAll,deleteObject} from "firebase/storage"
import UploadImage from './UploadImage';
import SelectImages from './SelectImage';
import SelectCover from './SelectCover';
// import { categoryData } from '../../data/categoryData';
import Select, { components } from "react-select";
import { ToastContainer, toast } from 'react-toastify';
const ProductForm = ({coverImage,setCoverImage,
  addProduct,
  description,setDescription,
  title,setTitle,
  price,setPrice,image,
  setImage,
  totalImageList,setTotalImageList,
  category,setCategory,
  stock,setStock,
  realPrice,setRealPrice,
  showPrice,setShowPrice,
  size, setSize,
  fabric, setFabric,
}) => {
        
  const dispatch = useDispatch();
  
  // const {error,loading,isModals,modals} = useSelector(
  //   (state) => state.modals
  // );
  // const {modelInfo,modelLoading,isModelsDescription} = useSelector(
  //   (state) => state.modalDescription
  // );
  
  const [openSelectModel, setOpenSelectModel] = useState(false);
  const [openCoverModel, setOpenCoverModel] = useState(false);
  const [optionList, setOptionList] = useState([])
  const Category = ['Western','Dresses','Saree','Kurtas','Ethnic' ]
 
  const closeSelectModal = () =>{
    setOpenSelectModel(false)
  }
  const closeCoverModal =() =>{
    setOpenCoverModel(false)
  }

  const [openModel, setOpenModel] = useState(false)
  // const [totalImageList,  setTotalImageList] = useState([])
  // const [progressPercent, setProgressPercent] = useState(0)
  // const [image, setImage] = useState([])


const handleSelect = (asset) =>{
setTotalImageList((prev)=>[...prev,asset])
}
const handleAddImage = () => {
  // Check if the total number of images is less than 4
  if (totalImageList.length < 4) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.click();

    input.onchange = (e) => {
      const files = e.target.files;

      // Ensure that the total count does not exceed 4
     
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      // Update the state with the new images
      setTotalImageList((prevImages) => [...prevImages, ...newImages]);
    };
  } else {
    toast('You can add a maximum of 4 images.'); 
  }
};
const closeModal = () => {
  setOpenModel(false);
};


const handleSubmit = (e) =>{
  e.preventDefault()
  const file =e.target[0]?.files[0] ;
  console.log(file)

  if (!file) return;
  const storageRef = uploadRef(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgressPercent(progress);
      closeModal()
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImage((prev)=>[...prev,downloadURL])
        console.log(downloadURL)
       
      });
    }
  );

}






  const deleteStorageImage = (myImage) =>{
  const newImageList = image.filter((im) =>  im!== myImage)
    console.log(image)
    setImage(newImageList)
  }
  const handleRemove = (ima) =>{
    const newImageList = totalImageList.filter((im) =>  im!== ima)
    console.log(totalImageList)
    setTotalImageList(newImageList)
  }
   const handleCoverRemove = (ima) =>{
    const newImageList = coverImage.filter((im) =>  im!== ima)
    console.log(totalImageList)
    setCoverImage(newImageList)
  }
  const InputSelect = (props) => {
  const { autoComplete = props.autoComplete } = props.selectProps;
  return
   <components.Input className='w-full' {...props} autoComplete={autoComplete} />;
};
  // console.log(image)
  // console.log(totalImageList)
  // console.log(coverImage)
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
        <option  value="Small">S</option>
        <option  value="Medium">M</option>
        <option  value="Large">L</option>
        <option  value="XL">XL</option>
        <option  value="XXL">XXL</option>
        </select>
        <select  onChange={(e)=>setFabric(e.target.value)} value={fabric}   
    className=' bg-white border-[1px] border-gray-300 placeholder:text-gray-400
    px-3 py-3 rounded-[10px] w-full outline-none'>
        <option value="" disabled hidden>Choose a Fabric</option>
        <option  value="Small">Silk</option>
        <option  value="Medium">Cotton</option>
        <option  value="Large">Rayon</option>
        <option  value="XL">Linen</option>
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
<UploadImage totalImageList={totalImageList} setTotalImageList={setTotalImageList} handleRemove={handleRemove} handleSubmit={handleSubmit} image={image}
    setImage={setImage} openModel={openModel} setOpenModel={setOpenModel} closeModal={closeModal} />
     <div className='flex items-center justify-center flex-wrap gap-3 mb-12' id="createProductFormImage">
         {image && image.map((ima, index) => (
           <div className='relative border-[1px] border-gray-300 px-6 py-6 rounded-xl ' >
           <p onClick={()=>deleteStorageImage(ima)} className='flex cursor-pointer text-red-500 
           font-[600]  w-[20px] ' >UPload Image</p>
          <img  className='w-[120px] cursor-pointer ' key={index} src={ima} alt="Product Preview" />
          </div>
         ))}
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
        {/*<div className='flex items-center justify-between' >
       <h4 className='text-[1.4rem] font-[600] my-4' >Select Product Images: </h4>  
       <SelectImages closeModal={closeSelectModal} openModel={openSelectModel}
        setOpenModel={setOpenSelectModel} image={image} setImage={setImage} 
        totalImageList={totalImageList} setTotalImagelist={setTotalImageList}
         handleRemove={handleRemove} handleAddImage={handleAddImage} />
       </div> */}
       <div className='flex items-center justify-between' >
       <h4 className='text-[1.4rem] font-[600] my-4' >Select Cover Images: </h4>  
       <SelectImages closeModal={closeSelectModal} openModel={openSelectModel}
        setOpenModel={setOpenSelectModel} image={image} setImage={setImage} 
        totalImageList={totalImageList} setTotalImagelist={setTotalImageList}
         handleRemove={handleRemove} handleAddImage={handleAddImage}  />
       </div>
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
        <div className='flex items-center justify-between' >
       <h4 className='text-[1.4rem] font-[600] my-4' >Select Cover Images: </h4>  
       <SelectCover closeModal={closeCoverModal} openModel={openCoverModel} 
       setOpenModel={setOpenCoverModel} image={image} setImage={setImage}
        totalImageList={coverImage} setTotalImagelist={setCoverImage} 
        handleRemove={handleCoverRemove} />
       </div>
       </div>
        <div className='flex items-center justify-center flex-wrap gap-6 my-12' 
        id="createProductFormImage">

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
       <div className='my-[6vw]' >
           <Button onClick={addProduct} className='text-white bg-black border-[1px]-solid' 
            size="lg">Submit</Button>
       </div>
     </div>
   </div>
)
}

export default ProductForm