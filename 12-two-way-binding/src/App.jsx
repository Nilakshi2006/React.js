import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  
  const submit=(e)=>{
    e.preventDefault();
    setTitle('')
    console.log("Form Submitted by",title)
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e)
      }}    >   
       <input type="text"
        placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }} 
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
