
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Nav from './Components/nav/Nav'
import Footer from './Components/Footer/Footer'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Nav/> */}
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/contact'element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
     
      
      

    </>
  )
}

export default App
