import React, { useState } from "react";
import {Copy, Trash2} from "lucide-react"
const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    
    console.log(copyTask)
    console.log(title)
    console.log(details)
    setTitle('')
    setDetails('')
  };

  const deleteNote=(idx)=>{
  const copyTask=[...task]
  copyTask.splice(idx,1)
  setTask(copyTask)
  }

  return (
    <div className="h-screen bg-black text-white lg:flex">

      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="lg:w-1/2 items-start flex flex-col gap-4 p-10"
      >

         <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        ></input>

        <textarea
          className="px-5 py-2 border-2 rounded h-30 w-full outline-none font-medium"
          type="text"
          placeholder="Enter Notes Detail"
          value={details}
          onChange={(e)=>{
setDetails(e.target.value)
          }}
        ></textarea>

        <button className="bg-white text-black px-5 py-2 border-2 rounded w-full outline-none active:scale-95">
          Add Note
        </button>

      </form>
      <div className=" p-10 lg:w-1/2 lg:border-l-2 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 itesm-start justify-start mt-5 h-[90%] overflow-auto">
          {task.map(function(elem,idx){
            return  <div
    key={idx}
    className="relative h-50 w-37 rounded-2xl text-black font-bold bg-[url('https://static.vecteezy.com/system/resources/previews/024/584/422/original/brown-sticky-note-with-paper-clip-png.png')] bg-cover bg-center px-3 py-8 overflow-hidden"
  >
    {/* Delete Icon */}
    <button onClick={()=>{
deleteNote(idx)
    }}
  className="absolute bottom-3 left-1/2 -translate-x-1/2
             text-red-600
             h-9 px-4 mb-2 ml-8 rounded-lg
             flex items-center justify-center gap-2
             hover:text-red-900
             transition-colors duration-200
             font-bold text-sm
             cursor-pointer active:scale-95"
>
  <Trash2 size={17} strokeWidth={2.5} />
  <span>Delete</span>
</button>

    <h3 className="leading-tight text-xl font-bold">
      {elem.title}
    </h3>

    <p className="mt-4 leading-tight font-medium text-gray-700">
      {elem.details}
    </p>
  </div>
          })}
          
        </div>
      </div>
    </div>
  );
};

export default App;
