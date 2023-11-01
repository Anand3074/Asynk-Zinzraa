import Nav from './Pages/Nav'
import Products from './Pages/Products'
import { BrowserRouter as  Router, Routes , Route, BrowserRouter } from 'react-router-dom'
import Saree from './Pages/Saree.jsx'
import Kurtas from './Pages/Kurtas.jsx'
import Dresses from './Pages/Dresses.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Wishlist from './Pages/Wishlist.jsx'
import Cart from './Test/Cart.jsx'

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
      </Routes>
      </BrowserRouter> 
      
      
    </div>
  )
}
export default App