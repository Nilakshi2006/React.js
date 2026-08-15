import React from 'react'
import Men from './Men'
import Women from './Women'

import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <div className="flex justify-center gap-10 py-4">
            <Link className="text-xl font-semibold" to='/product/men'>Men</Link>
            <Link className="text-xl font-semibold" to='/product/women'>Women</Link>
        </div>
        {/* For Nested Routing */}
      <Outlet/>
   
    </div>
  )
}

export default Product
