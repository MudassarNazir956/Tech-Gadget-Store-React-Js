import React from 'react'
// import Store from './Components/Store'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import Collections from './Components/Collections'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TechGad from './Components/TechGad';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import Blogs from './Components/Blogs';
import Contactus from './Components/Contactus';

function App() {
  return (
    <>
    <Router>
               <Navbar/>
        <Routes>
          <Route path='/' element={<Herosection/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Collections/>}/>
        </Routes>
        <Routes>
          <Route path='/Gadgets' element={<TechGad/>}/>
        </Routes>
        <Routes>
          <Route path='/Testimonials' element={<Testimonials/>}/>
        </Routes>
        <Routes>
          <Route path='/Blogs' element={<Blogs/>}/>
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contactus/>}/>
        </Routes>
        <Routes>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        
              <Footer/>
    </Router>
    </>
  )
}

export default App
