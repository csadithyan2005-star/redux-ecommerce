
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Product from './Pages/Product'
import Wishlist from './Pages/Wishlist'
import View from './Pages/View'
import Cart from './Pages/Cart'
import Pagenotfound from './Pages/Pagenotfound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Header/>
     <Routes>
     <Route path='/'element={<Product/>}/>
     <Route path='/ product:id'element={<View/>}/>
     <Route path='/Wishlist'element={<Wishlist/>}/>
     <Route path='/Cart'element={<Cart/>}/>
     <Route path='/'element={<Pagenotfound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
