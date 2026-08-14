import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h3>Nilakshi</h3>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/products'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
