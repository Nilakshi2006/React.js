import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(details)
    setTitle('')
    setDetails('')
  };

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

        <button className="bg-white text-black px-5 py-2 border-2 rounded w-full outline-none">
          Add Note
        </button>

      </form>
      <div className=" p-10 lg:w-1/2 lg:border-l-2 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-50 w-37 rounded-2xl bg-white"></div>
          <div className="h-50 w-37 rounded-2xl bg-white"></div>
            <div className="h-50 w-37 rounded-2xl bg-white"></div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
