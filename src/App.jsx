import { BrowserRouter as  Router, Routes , Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import React from 'react'
import Nav from './Pages/Nav.jsx'
import Products from './Pages/Products.jsx'
import Login from './Pages/Registrations/Log.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import Detail from './Pages/Prodctdetail.jsx'
import Orders from './Pages/CMS/Pages/Orders.jsx'
import ViewOrder from './Components/Orders/ViewOrder.jsx'
import { loadUser } from './Redux/User/userAction.js';
import Product2 from './Pages/ProductMap.jsx'


//import AddProduct from './Pages/admin/dashboard/page/AddProduct.jsx'
import Dashboard from './Pages/CMS/Pages/DashPanel.jsx'
// import DashboardTab from './Pages/admin/dashboard/DashboardTab.jsx'
// import UpdateProduct from './Pages/admin/dashboard/page/UpdateProduct.jsx'
import AdminNav from './Pages/admin/dashboard/page/AdminNav.jsx'
import AddProduct from './Pages/CMS/Pages/AddProduct.jsx'
import AllProduct from './Pages/CMS/Pages/AllProducts.jsx'
import Register from './Pages/Registrations/Register.jsx'
import Hamburger from './Components/HomePage/hamburger.jsx'
import User from './Pages/User.jsx'
import AddDetail from './Components/Checkout/AddDetail.jsx'
import Payment from './Components/Checkout/Payment.jsx'
import OrderSuccess from './Components/Checkout/OrderSuccess.jsx'
import MobileLogin from './Pages/Login/Login.jsx'
import OtpVerify from './Pages/Login/OtpVerify.jsx'
import MyState from './context/myState.jsx'
import Category from './Pages/Category/Saree12.jsx'
import Kurtas from './Pages/Kurtas.jsx'
import Dresses from './Pages/Dresses.jsx'
import Saree from './Pages/Saree.jsx'
import Westrend from './Pages/Western1.jsx'
import KalkiCollection from './Pages/KalkiCollection.jsx'
import Search from './Pages/Category/Search.jsx'
import MyOrders from './Pages/MyOrders.jsx'
// import SidebarNav from './Pages/CMS/Component/Layout/sidebar.jsx'
import Users from './Pages/CMS/Pages/Users.jsx'
import ProductsAll from './Components/ProductDisplay/ProductsAll.jsx'
import EditOrder from './Pages/CMS/Pages/EditOrder.jsx'
import SliderCa from './Components/HomePage/Slider.jsx'
// import Ethnic from './Pages/Ethnic'
// import Western from './Pages/Western'

const App = ({}) => {
  const {  isAuthenticated, user  } = useSelector(
    (state) => state.users
  )
  // const  userProfile  = useSelector(
  //   (state) => state.userProfile
  // );
  // console.log(userProfile?.name)

  const navigate = useNavigate()
   const dispatch = useDispatch();
  useEffect(() => {
    if(!isAuthenticated){
      navigate("/login")
    }
   if (isAuthenticated) {
      dispatch(loadUser(user));
    }
  }, [isAuthenticated])
  return (
    <div>
      <MyState>
      
      <Nav/>
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
      {/* <Route exact path='/Orders' element={<Orders/>}/>  */}
      {/* <Route exact path='/Dashboard' element={<Dashboard/>}/>  */}

      {/* <Route exact path={`/orderDetails/${id}`} element={<OrderDetails/>}/>  */}
      <Route exact path="/orderDetails/:id" element={<ViewOrder/>}/> 
      {isAuthenticated &&
      // && user.email === 'anandsaeiou@gmail.com' &&
       (
      <Route exact path='/Dashboard' element={<Dashboard />} />)}
       {isAuthenticated &&
      // && user.email === 'anandsaeiou@gmail.com' &&
       (
      <Route exact path='/Adminorder/:id' element={<EditOrder />} />)}
      {isAuthenticated 
      //  && userProfile?.role=== "admin" 
      && (<Route exact path='/addProduct' element={<AddProduct />} />) }

      {isAuthenticated 
      // && userProfile?.role === "admin" 
      &&   
      (<Route exact path='/products' element={<AllProduct />} />) }

        {isAuthenticated 
    // && userProfile?.role === "admin" 
    && <Route exact path='/orders' element={<Orders />} /> }

      {isAuthenticated 
      // && userProfile?.role === "admin"
       &&  <Route exact path='/users' element={<Users />} /> }

      {/* Admin CMS Link */}

      {/* <Route exact path='/AddProduct' element={

      <ProtectedRouteForAdmin>
          <AddProduct/>
      </ProtectedRouteForAdmin>
      }/>  */}

      {/* <Route exact path='/Dashboard' element={

      <ProtectedRouteForAdmin> 
              <Dashboard />
       </ProtectedRouteForAdmin>}/>  */}

      {/* <Route exact path='/DashboardTab' element={
        <ProtectedRouteForAdmin>
          <DashboardTab/>
        </ProtectedRouteForAdmin>
      }/> */}
      {/* <Route exact path='/UpdateProduct' element={
      
      <ProtectedRouteForAdmin>
        <UpdateProduct/>
      </ProtectedRouteForAdmin>}/>  */}
      
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
      <Route exact path='/Product3' element={<Product2/>}/>
      <Route exact path='/Slider' element={<SliderCa/>}/>
      

            
      </Routes>
      {/* <Routes > */}
   {/* {isAuthenticated &&
  //  && userProfile?.role
    user.email === 'anandsaeiou@gmail.com' && <Route exact path='/Dashboard' element={<Dashboard />} /> } */}
   {/* {isAuthenticated 
   && userProfile?.role
    === "admin" && <Route exact path='/addProduct' element={<AddProduct />} /> } */}
    {/* {isAuthenticated 
    && userProfile?.role
     === "admin" && <Route exact path='/orders' element={<Orders />} /> }
   {isAuthenticated 
   && userProfile?.role
    === "admin" &&   <Route exact path='/products' element={<AllProduct />} /> }
    {isAuthenticated 
    && userProfile?.role
     === "admin" && <Route exact path='/order/:id' element={<EditOrder />} /> }
    {isAuthenticated 
    && userProfile?.role
     === "admin" &&  <Route exact path='/product/:id' element={<EditProduct />} /> }
      {isAuthenticated 
      && userProfile?.role
       === "admin" &&  <Route exact path='/users' element={<Users />} /> }
      {isAuthenticated 
      && userProfile?.role
       === "admin" &&   <Route exact path='/users/:id' element={<EditUsers />} /> }
       {isAuthenticated 
       && userProfile?.role
        === "admin" &&   <Route exact path='/enquiry' element={<Contacts />} /> }
        {isAuthenticated 
        && userProfile?.role
         === "admin" &&   <Route exact path='/shippingToken' element={<ShippingToken/>} /> }
         {isAuthenticated 
         && userProfile?.role
          === "admin" &&   <Route exact path='/productRequest' element={<ProductRequest />} /> }
       {isAuthenticated 
       && userProfile?.role
        !== "admin" &&   <Route exact path='*' element={<NotAuth />} /> }
       {isAuthenticated 
       && userProfile?.role
        === "admin" && <Route exact path='/addBanners' element={<AddBanners />} /> }
       {isAuthenticated 
       && userProfile?.role
        === "admin" && <Route exact path='/banners' element={<Banners />} /> }
        {isAuthenticated 
        && userProfile?.role
         === "admin" && <Route exact path='/banner/:id' element={<EditBanner />} /> }
        <Route exact path='/login' element={<Login />} /> */}
    {/* </Routes> */}
     
      </MyState>
    </div>
  )
}
export default App


// export const ProtectedRoute = ({children}) => {
//   const user = localStorage.getItem('user')
//   if(user){
//     return children
//   }else{
//     return <Navigate to={'/login'}/>
//   }
// }

// admin 

// const ProtectedRouteForAdmin = ({children , user})=> {
//   // const admin = JSON.parse(localStorage.getItem('user'))
  
//   if(user.email === 'anandsaeiou@gmail.com'){
//     console.log(user.email)
//     return children
//   }
//   else{
//     return <Navigate to={'/login'}/>
  // }

// }