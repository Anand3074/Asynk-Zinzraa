import React, { useState, useEffect } from "react";
import { ref, set, push } from "firebase/database";
import { database, fireDB } from "../../../firebase/firebase";
import SidebarNav from '../Component/Layout/sidebar.jsx'
import ProductForm from '../Component/Product/Add.jsx'
// import gsmarena from "gsmarena-api"
// import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
const AddProduct = () => {
  // const { modelInfo, modelLoading, isModelsDescription } = useSelector(
    // (state) => state.modalDescription );
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [realPrice, setRealPrice] = useState('')
  const [showPrice, setShowPrice] = useState("")
  const [size, setSize ] = useState('')
  const [fabric, setFabric ] = useState('')
  const [stock, setStock] = useState('')
  const [image, setImage] = useState([])
  const [totalImageList, setTotalImageList] = useState([])
  const [coverImage, setCoverImage] = useState([])
  const [description, setDescription] = useState('')
  const [progressPercent, setProgressPercent] = useState(0)


  const addProduct = async ()  => {
      addDoc(collection(fireDB, "products"),
        {
          price: price,
          title: title,
          size:size,
          fabric:fabric,
          image: totalImageList,
          coverImage: coverImage,
          description : description,
          createdAt: new Date().toUTCString(),
          stock: stock,
          realPrice: realPrice,
          category: category,
          showPrice:showPrice,

        }).then((res) => {
          setTitle("");
          setPrice("");
          setCategory("")
          setSize('')
          setFabric('')          
          setTotalImageList([]);
          setImage([])
          setCoverImage([])
          setStock("")
          setRealPrice("")
          setShowPrice("")
          setDescription("")
        })
        alert("modelInfo Added", modelInfo)
        console.log(modelInfo)

    }


  // const fetchBrands = async () => {}
  // useEffect(() => {
  //   fetchBrands()
  // }, [])

  return (
    <div className='grid grid-cols-4 grid-flow-col ' >
      <SidebarNav />
      <ProductForm size={size} setSize={setSize} 
      showPrice={showPrice} setShowPrice={setShowPrice} 
      realPrice={realPrice} setRealPrice={setRealPrice}
      stock={stock} setStock={setStock} 
      category={category} setCategory={setCategory}
      totalImageList={totalImageList} setTotalImageList={setTotalImageList} 
      coverImage={coverImage} setCoverImage={setCoverImage} 
      description={description} setDescription={setDescription}
      addProduct={addProduct} 
      title={title} setTitle={setTitle}
      price={price} setPrice={setPrice} 
      image={image} setImage={setImage}
      fabric={fabric} setFabric={setFabric}
       />
    </div>
  )
}

export default AddProduct