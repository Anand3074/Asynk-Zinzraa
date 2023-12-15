import React, { useState, useEffect } from "react";
import { ref, set, push } from "firebase/database";
import { database, fireDB } from "../../../firebase/firebase";
import SidebarNav from '../Component/Layout/sidebar.jsx'
import ProductForm from '../Component/Product/Add1.jsx'
// import gsmarena from "gsmarena-api"
// import axios from "axios";
import {  setDoc, doc, addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { ToastContainer, toast,  } from "react-toastify";



const AddProduct = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [realPrice, setRealPrice] = useState('');
  const [showPrice, setShowPrice] = useState("");
  const [size, setSize] = useState('');
  const [fabric, setFabric] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState([]);
  const [totalImageList, setTotalImageList] = useState([]);
  const [coverImage, setCoverImage] = useState([]);
  const [description, setDescription] = useState('');
  // const [progressPercent, setProgressPercent] = useState(0);

  const addProduct = async () => {
    if (
      title.trim() === "" ||
      price.trim() === "" ||
      category.trim() === "" ||
      fabric.trim() === "" ||
      size.trim() === "" ||
      description.trim() === "" ||
      coverImage.length === 0 ||
      stock.trim() === "" ||
      image.length === 0 ||
      realPrice.trim() === "" ||
      showPrice.trim() === ""
    ) {
      return toast.error("All fields are required");
    }

    try {
      const productRef = collection(fireDB, "products");
      const docRef = await addDoc(productRef, {
        price: price,
        title: title,
        size: size,
        fabric: fabric,
        image: totalImageList,
        coverImage: coverImage,
        description: description,
        createdAt: new Date().toUTCString(),
        stock: stock,
        realPrice: realPrice,
        category: category,
        showPrice: showPrice,
      });

      await setDoc(doc(fireDB, "products", docRef.id), {
        price: price,
        title: title,
        size: size,
        fabric: fabric,
        image: totalImageList,
        coverImage: coverImage,
        description: description,
        createdAt: new Date().toUTCString(),
        stock: stock,
        realPrice: realPrice,
        category: category,
        showPrice: showPrice,
        id: docRef.id,
      });

      // Reset state values
      setTitle("");
      setPrice("");
      setCategory("");
      setSize("");
      setFabric("");
      setTotalImageList([]);
      setImage([]);
      setCoverImage([]);
      setStock("");
      setRealPrice("");
      setShowPrice("");
      setDescription("");

      toast.success("Product Added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <div>
      <div><ToastContainer/></div>
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

    </div>
 
  )
}

export default AddProduct