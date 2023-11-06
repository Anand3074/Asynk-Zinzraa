import { BrowserRouter as  Router, Routes , Route, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Nav from './Pages/Nav.jsx'
import Products from './Pages/Products.jsx'
import Saree from './Pages/Saree.jsx'
import Kurtas from './Pages/Kurtas.jsx'
import Dresses from './Pages/Dresses.jsx'
// import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Test/Cart.jsx'
import Contact from './Components/userphoto.jsx'
import Detail from './Pages/Prodctdetail.jsx'
// import AddProduct from './Test/AddProduct.jsx'
// import Dashboard from './Test/Dashboard.jsx'
// import DashboardTab from './Test/DashboardTab.jsx'
// import UpdateProduct from './Test/UpdateProduct.jsx'
import Signup from './Pages/LoginAuth.jsx'
import hamburger from './Components/hamburger.jsx'
import Carousel from './Test/Carousel.jsx'



const App = () => {
  return (
    <div>
      <BrowserRouter>    
      <Nav/>
      <Routes>
      <Route path='/' Component={Products}/>
      <Route path='/Saree' Component={Saree}/>
      <Route path='/Kurtas' Component={Kurtas}/>
      <Route path='/Dresses' Component={Dresses}/>
      <Route path='/Contact' Component={Contact}/>
      <Route path='/Login' Component={Login}/>
      <Route path='/Wishlist' Component={Wishlist}/>
      <Route path='/Cart' Component={Cart}/>
      <Route path='/detail' Component={Detail}/>
      <Route path='/Auth' Component={Signup}/>
      <Route path='/hamburger' Component={hamburger}/>
      <Route path='/Carousel' Component={Carousel}/>      
      {/* <Route path='/AddProduct' Component={AddProduct}/>
      <Route path='/Dashboard' Component={Dashboard}/> */}
      {/* <Route path='/DashboardTab' Component={DashboardTab}/> */}
      {/* <Route path='/Login' Component={Login}/>
      <Route path='/UpdateProduct' Component={UpdateProduct}/> */}
      </Routes>
      </BrowserRouter> 
      
      
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