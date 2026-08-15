import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />
<Navbar2/>
      <main className="flex-1 w-full">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:id' element={<CourseDetail/>}/>
          {/* Nested Routing-basic technique */}
          {/* <Route path='/product' element={<Product />} />
          <Route path='/product/men' element={<Men/>}/>
          <Route path='/product/women' element={<Women/>}/> */}

          {/* Nested Routing-Recommended technique */}
          <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
           <Route path='women' element={<Women/>}/>
            </Route>

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
