import React, { useState, useEffect } from "react";
import EditProductForm from "../Component/Product/EditProductForm";
import SidebarNav from "../Component/Layout/sidebar.jsx";
import { useParams, useNavigate } from "react-router-dom";
import {
  ref,
  onValue,
  get,
  set,
  push,
  update,
  remove,
} from "firebase/database";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { database,fireDB } from "../../../firebase/firebase.jsx";
import {
  ref as storageRef,
  getDownloadURL,
  uploadBytesResumable,
  listAll,
} from "firebase/storage";
import { storage } from "../../../firebase/firebase.jsx";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
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
  const [openModel, setOpenModel] = useState(false);
  const [openSelectModel, setOpenSelectModel] = useState(false);
  const [openCoverModel, setOpenCoverModel] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setOpenModel(false);
  };
  const closeSelectModal = () => {
    setOpenSelectModel(false);
  };
  const closeCoverModal = () => {
    setOpenCoverModel(false);
  };
  const handleRemove = (index) => {
    remove(ref(database, "products/" + id + "/image/" + index))
      .then(() => {
        // console.log(database, "products/" + id + "/image/" + index);
        // console.log("Product Removed Succesfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleCoverRemove = (key) => {
    remove(ref(database, "products/" + id + "/coverImage/" + key))
      .then(() => {
        // console.log("Product Removed Succesfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleAddImage = () => {
    const productListRef = ref(database, "products/" + id);

    update(productListRef, {
      image: totalImageList,
    });
    setOpenSelectModel(false);
  };
  const handleAddCover = () => {
    const productListRef = ref(database, "products/" + id);

    update(productListRef, {
      coverImage: coverImage,
    });
    setOpenCoverModel(false);
  };
  const handleUpdateForm = () => {
    // const productListRef = ref(database, "products/" + id);
    // update(productListRef, {
    //   productName: productName,
    //   category: category,
    //   brand: brand,
    //   price: price,
    //   realPrice: realPrice,
    //   image: totalImageList,
    //   coverImage: coverImage,
    // });
     updateDoc(doc(fireDB, "products", id), {
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
  
    }).then(()=>{
      console.log("User Updated")
    }).catch((error) => {
    console.log(error.message)
});
    navigate("/products");
  };

  useEffect(() => {
    // const repairCountRef = ref(database, "products/" + id);
    // onValue(repairCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   setProduct(data);
    //   setProductName(data.productName);
    //   setCoverImage(data?.coverImage ? data.coverImage : []);
    //   setCategory(data.category);
    //   setBrand(data.brand);
    //   setPrice(data.price);
    //   setTotalImageList(data.image);
    //   setRealPrice(data.realPrice);
    // });
     const  productData = onSnapshot(doc(fireDB, "products", id), (doc) => {
    // console.log("Current data: ", doc.data());

    const data = doc.data()
     setProduct(data);
      setTitle(data.title && data.title );
      setCoverImage(data?.coverImage ? data.coverImage : []);
      setCategory(data.category && data.category);
      setPrice(data.price && data.price );
      setTotalImageList(data.image ? data.image : []);
      setRealPrice(data.realPrice && data.realPrice);
      setStock(data.stock ? data.stock : "")
      setShowPrice(data.showPrice ? data.showPrice : "")
      setSize(data.size ? data.size : "")
      setFabric(data.fabric ? data.fabric : "")
      setDescription(data.description ? data.description : "")
    });
    const listRef = storageRef(storage, "files/");


    listAll(listRef)
      .then((res) => {
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImage((prev) => [...prev, url]);
          });
        });
      })
      .catch((error) => {
        // console.log(error.messsage);
      });
    //    console.log(productData)
  }, [id]);
 

  return (
    <div>
      <div className="grid grid-cols-4 grid-flow-col">
        <SidebarNav />
        <EditProductForm
         size={size} setSize={setSize} 
         showPrice={showPrice} setShowPrice={setShowPrice} 
         realPrice={realPrice} setRealPrice={setRealPrice}
         stock={stock} setStock={setStock} 
         category={category} setCategory={setCategory}
         totalImageList={totalImageList} setTotalImageList={setTotalImageList} 
         coverImage={coverImage} setCoverImage={setCoverImage} 
         description={description} setDescription={setDescription}
         handleUpdateForm={handleUpdateForm}
         title={title} setTitle={setTitle}
         price={price} setPrice={setPrice} 
         image={image} setImage={setImage}
         fabric={fabric} setFabric={setFabric}
         closeCoverModal={closeCoverModal}
          closeSelectModal={closeSelectModal}
          openCoverModel={openCoverModel}
          openSelectModel={openSelectModel}
          setOpenCoverModel={setOpenCoverModel}
          setOpenSelectModel={setOpenSelectModel}
          openModel={openModel}
        />
      </div>
    </div>
  );
};

export default EditProduct;
