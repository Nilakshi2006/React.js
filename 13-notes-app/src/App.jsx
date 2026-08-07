import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <div
    className="h-screen bg-black text-white lg:flex"
    >
      <form onSubmit={(e)=>{
submitHandler(e)
      }}
      className="lg:w-1/2 items-start flex flex-col gap-4 p-10">
       
          <input 
        className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
        type="text"
         placeholder="Enter Notes Heading">

         </input>
        <textarea 
        className="px-5 py-2 border-2 rounded h-30 w-full outline-none font-medium"
        type="text" 
        placeholder="Enter Notes Detail"
          >
        </textarea>
        <button
        className="bg-white text-black px-5 py-2 border-2 rounded w-full outline-none">
          Add Note
        </button>
        
      </form>
      <div className="flex flex-wrap p-10 lg:w-1/2 bg-gray-900">
        <div className="h-32 w-32 rounded-2xl bg-white">
      </div>

</div>
    </div>
  )
}

export default App
