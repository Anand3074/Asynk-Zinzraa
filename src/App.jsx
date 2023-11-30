import { BrowserRouter as  Router, Routes , Route, BrowserRouter, Navigate } from 'react-router-dom'
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
import UpdateProduct from './Pages/admin/dashboard/page/UpdateProduct.jsx'
import AdminNav from './Pages/admin/dashboard/page/AdminNav.jsx'

import Signup from './Pages/Registrations/Signup.jsx'
import Hamburger from './Components/HomePage/hamburger.jsx'
import User from './Pages/User.jsx'
import AddDetail from './Components/Checkout/AddDetail.jsx'
import Payment from './Components/Checkout/Payment.jsx'
import OrderSuccess from './Components/Checkout/OrderSuccess.jsx'
import MobileLogin from './Pages/Login/Login.jsx'
import OtpVerify from './Pages/Login/OtpVerify.jsx'
import MyState from './context/myState.jsx'
import Category from './Pages/Category/Category.jsx'
import Kurtas from './Pages/Kurtas.jsx'
import Dresses from './Pages/Dresses.jsx'
import Saree from './Pages/Saree.jsx'
import Westrend from './Pages/Western1.jsx'
import KalkiCollection from './Pages/KalkiCollection.jsx'
import Search from './Pages/Category/Search.jsx'
// import Ethnic from './Pages/Ethnic'
// import Western from './Pages/Western'

const App = () => {
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
      <Route exact path='/User' element={<User/>}/>
      <Route exact path='/AddDetail' element={<AddDetail/>}/>
      <Route exact path='/Payment' element={<Payment/>}/>
      <Route exact path='/Order' element={<OrderSuccess/>}/> 

              {/* Admin CMS Link */}

      <Route exact path='/AddProduct' element={

      <ProtectedRouteForAdmin>
          <AddProduct/>
      </ProtectedRouteForAdmin>
      }/> 

      <Route exact path='/Dashboard' element={

      <ProtectedRouteForAdmin>
              <Dashboard />
      </ProtectedRouteForAdmin>}/>

      <Route exact path='/DashboardTab' element={
        <ProtectedRouteForAdmin>
          <DashboardTab/>
        </ProtectedRouteForAdmin>
      }/>
      <Route exact path='/UpdateProduct' element={
      
      <ProtectedRouteForAdmin>
        <UpdateProduct/>
      </ProtectedRouteForAdmin>}/> 
      
      <Route exact path='/AdminNav' element={<AdminNav/>}/> 


              {/* Logins */}
      <Route exact path='/Signup' element={<Signup/>}/>
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
      

            
      </Routes>
     
      </MyState>
    </div>
  )
}
export default App


export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin 

const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'anandsaeiou@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}