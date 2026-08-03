import React from 'react'
import { useState } from 'react'

const App = () => {
  const submit=(e)=>{
    e.preventDefault();
    console.log("Form in Submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e)
      }}    >   
       <input type="text" placeholder='Enter your Name'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
