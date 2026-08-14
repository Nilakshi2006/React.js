import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Products from './pages/Products'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
