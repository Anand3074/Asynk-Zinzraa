import { BrowserRouter as  Router, Routes , Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Nav from './Pages/Nav.jsx'
import Products from './Pages/Products.jsx'
// import Saree from './Pages/Saree.jsx'
import Kurtas from './Pages/Kurtas.jsx'
import Dresses from './Pages/Dresses.jsx'
// import Contact from './Pages/Contact.jsx'
import Login from './Pages/Registrations/Login.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Pages/Cart.jsx'
import Detail from './Pages/Prodctdetail.jsx'
import AddProduct from './Pages/admin/dashboard/page/AddProduct.jsx'
import Dashboard from '././Pages/admin/dashboard/Dashboard.jsx'
import DashboardTab from '././Pages/admin/dashboard/DashboardTab.jsx'
import UpdateProduct from './Test/UpdateProduct.jsx'
import Signup from './Pages/Registrations/Signup.jsx'
import Hamburger from './Components/HomePage/hamburger.jsx'
import UserProfile from './Components/UserInfo/userphoto.jsx'
import AddDetail from './Components/Checkout/AddDetail.jsx'
import Payment from './Components/Checkout/Payment.jsx'
import OrderSuccess from './Components/Checkout/OrderSuccess.jsx'
// import Navbar from './Test/Navbar.jsx'
// import Login1 from './Test/login.jsx'
// import myContext from './myContext.jsx';
import MyState from './context/myState.jsx'


const App = () => {
  return (
    <div>
      <MyState>
      <BrowserRouter>    
      <Nav/>
      <Routes>
      <Route exact path='/' element={<Products/>}/>
      {/* <Route exact path='/Saree' element={<Saree/>}/> */}
      <Route exact path='/Kurtas' element={<Kurtas/>}/>
      <Route exact path='/Dresses' element={<Dresses/>}/>
      {/* <Route exact path='/Contact' element={<Contact/>}/> */}
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Wishlist' element={<Wishlist/>}/>
      <Route exact path='/Cart' element={<Cart/>}/>
      <Route exact path='/detail' element={<Detail/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
      <Route exact path='/hamburger' element={<Hamburger/>}/>
      <Route exact path='/UserProfile' element={<UserProfile/>}/>
      <Route exact path='/AddDetail' element={<AddDetail/>}/>
      <Route exact path='/Payment' element={<Payment/>}/>
      <Route exact path='/Order' element={<OrderSuccess/>}/>      
      <Route exact path='/AddProduct' element={<AddProduct/>}/> 
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
      <Route exact path='/DashboardTab' element={<DashboardTab/>}/>
      {/* <Route exact path='/Login' element={<Login/>}/> */}
      <Route exact path='/UpdateProduct' element={<UpdateProduct/>}/> 
      {/* <Route exact path='/Navbar' element={<Navbar/>}/>
      <Route exact path='/Login1' element={<Login1/>}/> */} */}
      </Routes>
      </BrowserRouter> 
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