import Nav from './Pages/Nav'
import Products from './Pages/Products'
import { BrowserRouter as  Router, Routes , Route, BrowserRouter } from 'react-router-dom'
import Saree from './Pages/Saree'
import Kurtas from './Pages/Kurtas.jsx'
import Dresses from './Pages/Dresses.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
// import Wishlist from './Pages/Contact.jsx'
import Cart from './Test/Cart.jsx'
import Greet from './Test/Greet'




const App = () => {
  return (
    <div>
      <BrowserRouter>    
      <Nav/>
      <Routes>
      <Route path='/' Component={Products}/>
      <Route path='/Saree' Component={Saree}/>
      <Route path='/Kurtas' elements={<Kurtas/>}/>
      <Route path='/Dresses' elements={<Dresses/>}/>
      <Route path='/Contact' elements={<Contact/>}/>
      <Route path='/Greet' element={<Login/>}/>
      {/* <Route path='/Wishlist' element={<Wishslist/>}/> */}
      <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter> 
      
      
    </div>
  )
}
export default App