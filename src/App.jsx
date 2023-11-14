import { BrowserRouter as  Router, Routes , Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Nav from './Pages/Nav.jsx'
import Products from './Pages/Products.jsx'
import Login from './Pages/Registrations/Login.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import Detail from './Pages/Prodctdetail.jsx'
import AddProduct from './Pages/admin/dashboard/page/AddProduct.jsx'
import Dashboard from './Pages/admin/dashboard/Dashboard.jsx'
import DashboardTab from './Pages/admin/dashboard/DashboardTab.jsx'
import UpdateProduct from './Test/UpdateProduct.jsx'
import Signup from './Pages/Registrations/Signup.jsx'
import Hamburger from './Components/HomePage/hamburger.jsx'
import UserProfile from './Components/UserInfo/userphoto.jsx'
import AddDetail from './Components/Checkout/AddDetail.jsx'
import Payment from './Components/Checkout/Payment.jsx'
import OrderSuccess from './Components/Checkout/OrderSuccess.jsx'
import MobileLogin from './Pages/Login/Login.jsx'
import OtpVerify from './Pages/Login/OtpVerify.jsx'
import MyState from './context/myState.jsx'
import Category from './Pages/Category/Category.jsx'
// import Kurtas from './Pages/Category/Kurtas.jsx'
// import Dresses from './Pages/Category/Dresses.jsx'
// import Saree from './Pages/Category/Saree.jsx'
// import Ethnic from './Pages/Ethnic'
// import Western from './Pages/Western'

const App = () => {
  let setActiveTab=0
  return (
    <div>
      <MyState>
      
      <Nav/>
      <Routes>
      <Route exact path='/' element={<Products/>}/>
      <Route exact path='/Wishlist' element={<Wishlist/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/detail' element={<Detail/>}/>
      <Route exact path='/hamburger' element={<Hamburger/>}/>
      <Route exact path='/UserProfile' element={<UserProfile/>}/>
      <Route exact path='/AddDetail' element={<AddDetail/>}/>
      <Route exact path='/Payment' element={<Payment/>}/>
      <Route exact path='/Order' element={<OrderSuccess/>}/>  
              {/* Admin CMS Link */}
      <Route exact path='/AddProduct' element={<AddProduct/>}/> 
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
      <Route exact path='/DashboardTab' element={<DashboardTab/>}/>
      <Route exact path='/UpdateProduct' element={<UpdateProduct/>}/> 

              {/* Logins */}
      <Route exact path='/Signup' element={<Signup/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/MobileLogin' element={<MobileLogin/>}/>
      <Route exact path='/MobileLogin/OtpVerify' element={<OtpVerify/>}/>

              {/* Category */}
      <Route exact path='/Category/*' element={<Category setActiveTab={setActiveTab=0}/>}/> 
      {/* <Route exact path='/Western/*' element={<Category/>}/> */}
      <Route exact path='/Saree/*' element={<Category setActiveTab={setActiveTab===2}/>}/>
      <Route exact path='/Kurtas/*' element={<Category setActiveTab={setActiveTab===3}/>}/>
      {/* <Route exact path='/Ethnic/*' element={<Ethnic/>}/> */}
      <Route exact path='/Dresses/*' element={<Category setActiveTab={setActiveTab===1}/>}/>
      </Routes>
     
      </MyState>
    </div>
  )
}
export default App

//user
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}


//admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'surveyash67@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}