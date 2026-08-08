import React from 'react'

const App = () => {
  // save the data to local storage
  localStorage.setItem('Name','Nilakshi')
  //get the data and print in console from　local storage
  const user=localStorage.getItem('Name')
  console.log(user)
//remove data from local storage
localStorage.removeItem("Name")
//data is now removed from local storage tilll here

//save the obj data to local storage and converting obj to str
const Info={
  "Name":"Nilakshi",
  "Age":20,
"Address":"Punjab"
}
localStorage.setItem("Info",JSON.stringify(Info))
//to get obj data
const information=localStorage.getItem("Info")
console.log(Info)

//Save the arr data to local storage
const arr = [1, 2, 3];
localStorage.setItem("arr", JSON.stringify(arr));
// Get arr data in form of string
const arrdata = localStorage.getItem("arr");
console.log(typeof arrdata); // string
console.log(arrdata);        // "[1,2,3]"
// Get arr data in form of array
const arrData = JSON.parse(localStorage.getItem("arr"));
console.log(arrData);        // [1, 2, 3]
console.log(typeof arrData); // object
console.log(arr);            // [1, 2, 3]

  return (
    <div>
      App
    </div>
  )
}

export default App
