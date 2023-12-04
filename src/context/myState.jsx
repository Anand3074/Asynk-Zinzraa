import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, 
    orderBy, query, setDoc } from 
'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../firebase/firebase.jsx';
import { useNavigate } from 'react-router-dom';

function myState(props) {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }
//     const [color, setColor] = useState('#FF1493'); 
//     const toggleColor = () => {
//     // Toggle color to a heart color when clicked
//     const newColor = color === '#FF1493' ? '#FF6347' : '#FF1493';
//     setColor(newColor);
//   }

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        size:null,
        fabric:null,
        quantity:null,
        time: Timestamp.now().toMillis(),
        date: new Date().getTime(), 
        // time: Timestamp.now(),
        // Store as a timestamp
        // date: new Date().toLocaleString(
        //     // "en-US",
        //     // {
        //     //     month: "short",
        //     //     day: "2-digit",
        //     //     year: "numeric",
        //     // }
        // )
    });

    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null ||
             products.category == null || products.quantity == null ||
             products.fabric == null || products.size == null || products.description == null ) {
            return toast.error("all fields are required")
        }

        setLoading(true)

        try {
            const productRef = collection(fireDB, 'products');
            const docRef = await addDoc(productRef, products);
            const productId = docRef.id;
            await setDoc(doc(fireDB, 'products', productId), {...products, id: productId});
            toast.success("Add product successfully");
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 800);
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        // setProducts("")


    }

    const [product, setProduct] = useState([]);

    const getProductData = async () => {

        setLoading(true)

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productArray);
                setLoading(false)
                // console.log("Product Data:", productArray);
            });

            return () => data;

        } catch (error) {
            console.log(error)
            setLoading(false)
        }

    }

    useEffect(() => {
        getProductData();
    }, []);

    // update product function

    const edithandle = (item) => {
        setProducts(item)
    }
    const navigate= useNavigate()

    const updateProduct = async () => {
        setLoading(true)
        try {

            await setDoc(doc(fireDB, 'products', products.id), products)
            toast.success("Product Updated successfully")
            // setTimeout(() => {
            //     window.location.href = '/Dashboard'
            // }, 800);
            getProductData();
            setLoading(false)
            navigate('/Dashboard')

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    // fetchProduct

//     const dispatch = useDispatch();
//     const Product = useSelector((state) => state.Product.products);

//   useEffect(() => {
//     // Fetch products when the component mounts
//     dispatch(fetchProducts());
//   }, [dispatch]);

    // delete product

    const deleteProduct = async (item) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', item.id))
            toast.success('Product Deleted successfully')
            getProductData();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    const [order, setOrder] = useState([]);

    const getOrderData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "order"))
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
                setLoading(false)
            });
            setOrder(ordersArray);
            // console.log(ordersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const [user, setUser] = useState([]);

    const getUserData = async () => {
        setLoading(true)
        try {
            const result = await getDocs(collection(fireDB, "users"))
            const usersArray = [];
            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false)
            });
            setUser(usersArray);
            // console.log(usersArray)
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey,filterType,setFilterType,
            filterPrice,setFilterPrice 
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState
// toggleColor, color,