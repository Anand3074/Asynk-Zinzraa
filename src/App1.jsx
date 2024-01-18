import { BrowserRouter as  Router, Routes , Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {React, useEffect, useState, lazy, Suspense } from 'react';
import { loadUser } from './Redux/User/userAction.js';
import MyState from './context/myState.jsx'
import Nav from './Components/Layout/Nav.jsx'
import Products from './Pages/Products.jsx'
import hour from './assets/Hourglass.gif'
import Loading from './Loading.jsx'
const Product3 = lazy(() =>  import('./Pages/ProductMap.jsx'))
const Login = lazy(() => import('./Pages/Registrations/Log.jsx'));
const Wishlist = lazy(() => import('./Pages/Wishlist.jsx'));
const Cart = lazy(() => import('./Pages/Cart.jsx'));
const Detail = lazy(() => import('./Pages/Prodctdetail.jsx'));
const Orders = lazy(() => import('./Pages/CMS/Pages/Orders.jsx'));
const ViewOrder = lazy(() => import('./Components/Orders/ViewOrder.jsx'));
const Footer = lazy(() => import('./Components/Layout/Footer.jsx'));
const Dashboard = lazy(() => import('./Pages/CMS/Pages/DashPanel.jsx'));
const AdminNav = lazy(() => import('./Pages/admin/dashboard/page/AdminNav.jsx'));
const AddProduct = lazy(() => import('./Pages/CMS/Pages/AddProduct.jsx'));
const AllProduct = lazy(() => import('./Pages/CMS/Pages/AllProducts.jsx'));
const Register = lazy(() => import('./Pages/Registrations/Register.jsx'));
const Hamburger = lazy(() => import('./Components/HomePage/hamburger.jsx'));
const User = lazy(() => import('./Pages/User.jsx'));
const AddDetail = lazy(() => import('./Components/Checkout/AddDetail.jsx'));
const Payment = lazy(() => import('./Components/Checkout/Payment.jsx'));
const OrderSuccess = lazy(() => import('./Components/Checkout/OrderSuccess.jsx'));
const MobileLogin = lazy(() => import('./Pages/Login/Login.jsx'));
const OtpVerify = lazy(() => import('./Pages/Login/OtpVerify.jsx'));
const Category = lazy(() => import('./Pages/Category/Saree12.jsx'));
const Kurtas = lazy(() => import('./Pages/Kurtas.jsx'));
const Dresses = lazy(() => import('./Pages/Dresses.jsx'));
const Saree = lazy(() => import('./Pages/Saree.jsx'));
const Westrend = lazy(() => import('./Pages/Western2.jsx'));
const KalkiCollection = lazy(() => import('./Pages/KalkiPage.jsx'));
const Search = lazy(() => import('./Pages/Category/Search2.jsx'));
const MyOrders = lazy(() => import('./Pages/MyOrders.jsx'));
const Users = lazy(() => import('./Pages/CMS/Pages/Users.jsx'));
const ProductsAll = lazy(() => import('./Components/ProductDisplay/ProductsAll.jsx'));
const EditOrder = lazy(() => import('./Pages/CMS/Pages/EditOrder.jsx'));
const SliderCa = lazy(() => import('./Components/HomePage/Slider.jsx'));
const EditUserForm = lazy(() => import('./Pages/CMS/Pages/EditUser23.jsx'));
const EditProduct = lazy(() => import('./Pages/CMS/Pages/EditProduct.jsx'));

// const HourGlass = () => {
//     return (
//       <img src={hour} alt="Hourglass" />
//     );
//   };

  
//   const [showFallback, setShowFallback] = useState(false);

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       // Set showFallback to true after a certain time (e.g., 3000 milliseconds)
//       setShowFallback(true);
//     }, 300);

//     return () => clearTimeout(timeoutId);
//   }, []); // Run only on mount

// const SuspenseLoader = ({ children }) => (
//     <Suspense fallback={showFallback ?
// <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mx-auto">
//         <HourGlass/>
//     </div> : <div>Loading...</div>}>   
//       {children}
//     </Suspense>
//   );

const SuspenseLoader = ({ children, isLoading }) => (
    <Suspense fallback={isLoading ? <Loading /> : null}>
      {children}
    </Suspense>
  );

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();  
    useEffect(() => {
      const unlisten = () => setIsLoading(true);
  
      return unlisten;
    }, [location]);

    // const HourGlass = () => {
    //     return (
    //       <img src={hour} alt="Hourglass" />
    //     );
    //   };
    
      
    //   const [showFallback, setShowFallback] = useState(false);
    
    //   useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //       // Set showFallback to true after a certain time (e.g., 3000 milliseconds)
    //       setShowFallback(true);
    //     }, 3000);
    
    //     return () => clearTimeout(timeoutId);
    //   }, []); // Run only on mount
    
    // const SuspenseLoader = ({ children, showFallback }) => (
    //     <Suspense fallback={true ?
    // <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mx-auto">
    //         <Loading/>
    //     </div> : 
    // <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mx-auto">
    // <HourGlass/>
    // </div>
    // }>
    //       {children}
    //     </Suspense>
    //   );
  const {  isAuthenticated, user , userProfile } = useSelector(
    (state) => state.users
  )

//   console.log(userProfile?.role)

   const dispatch = useDispatch();
  return (
    <div>
      <MyState>
      <Nav/>
      <SuspenseLoader isLoading={isLoading}>
      <Routes>
      <Route exact path='/' element={<Products/>}/>
      <Route exact path='/All' element={<ProductsAll/>}/>
      <Route exact path='/Wishlist' element={<Wishlist/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/detail' element={<Detail/>}/>
      <Route exact path='/hamburger' element={<Hamburger/>}/>
      <Route exact path='/User' element={<User/>}/>
      <Route exact path='/AddDetail' element={<AddDetail/>}/>
      <Route exact path='/Payment' element={<Payment/>}/>
      <Route exact path='/OrderSuccess' element={<OrderSuccess/>}/> 
      <Route exact path='/MyOrders' element={<MyOrders/>}/> 
      {/* <Route exact path={`/orderDetails/${id}`} element={<OrderDetails/>}/>  */}
      <Route exact path="/orderDetails/:id" element={<ViewOrder/>}/> 
      {isAuthenticated && userProfile?.role=== "admin"  && 
      // && user.email === 'anandsaeiou@gmail.com' &&
       (
      <Route exact path='/Dashboard' element={<Dashboard />} />)}
       {isAuthenticated        && userProfile?.role=== "admin" 
        &&
      // && user.email === 'anandsaeiou@gmail.com' &&
       (
      <Route exact path='/Adminorder/:id' element={<EditOrder />} />)}
      {isAuthenticated 
       && userProfile?.role=== "admin" 
      && (<Route exact path='/addProduct' element={<AddProduct />} />) }

      {isAuthenticated 
      && userProfile?.role === "admin" 
      &&   
      (<Route exact path='/products' element={<AllProduct />} />) }

        {isAuthenticated 
    && userProfile?.role === "admin" 
    && <Route exact path='/orders' element={<Orders />} /> }

      {isAuthenticated 
      && userProfile?.role === "admin"
       &&  <Route exact path='/users' element={<Users />} /> }

{isAuthenticated 
&& userProfile?.role === "admin" 
&&   <Route exact path='/users/:id' element={<EditUserForm />} /> }

{isAuthenticated && 
userProfile?.role === "admin" &&
  <Route exact path='/product/:id' element={<EditProduct />} /> }
      <Route exact path='/AdminNav' element={<AdminNav/>}/> 
              {/* Logins */}
      <Route exact path='/Signup' element={<Register/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/MobileLogin' element={<MobileLogin/>}/>
      <Route exact path='/MobileLogin/OtpVerify' element={<OtpVerify/>}/>
              {/* Category */}
      <Route exact path='/Category' element={<Category/>}/> 
      <Route exact path='/Saree' element={<Saree/>}/>
      <Route exact path='/Kurtas' element={<Kurtas/>}/>
      <Route exact path='/Dresses' element={<Dresses/>}/>
      <Route exact path='/Westrend' element={<Westrend/>}/>
      <Route exact path='/Kalki' element={<KalkiCollection/>}/>
      <Route exact path='/Search' element={<Search/>}/>
      <Route exact path='/Product3' element={<Product3/>}/>
      <Route exact path='/Slider' element={<SliderCa/>}/>
                </Routes>
            </SuspenseLoader>
      </MyState>
    </div>
  )
}
export default App