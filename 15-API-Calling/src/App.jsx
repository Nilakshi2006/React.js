import React, { useState } from 'react'
import axios from'axios'
const App = () => {
  //Fetching API using 1.fetch()
  //Making this function async so it wait until response is fetced
//  const getData=async()=>{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
// console.log(response)
// // console.log(response.json())   //this alo show pending so lets me it in aysn/awit too
// const data=await response.json()
// console.log(data)
//   }

//Fetching API using 2.Axios
// const getData =async()=>{
//   //Normal
// //   const response=await axios.get('https://jsonplaceholder.typicode.com/users')
// // Destructuring
// const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
// console.log(data)
// }


//Fetch data and use in UI

const [data, setData] = useState([]) //intially empty arr
const getData=async()=>{
  const response=await axios.get('https://picsum.photos/v2/list')
console.log(response)
setData(response.data)
}
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
return <h3 key={idx}>{idx} {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
