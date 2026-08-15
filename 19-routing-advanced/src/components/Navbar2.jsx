import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
   const Navigate= useNavigate();
  return (
    <div className="px-4 py-5 bg-cyan-700 flex gap-4">
        <button
        onClick={()=>{
            Navigate('/')
        }}
        className="font-medium bg-emerald-800 px-5 py-2 rounded m-4 cursor-pointer active:scale-95">
            Return to Home page
        </button>
      <button
      onClick={()=>{
        Navigate(-1)
      }}
      className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">
Return to prev page
      </button>
       <button
      onClick={()=>{
        Navigate(+1)
      }}
      className="font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">
Return to next page
      </button>
    </div>
  )
}

export default Navbar2
