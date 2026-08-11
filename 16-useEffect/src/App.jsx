import React, { useEffect, useState } from 'react'

const App = () => {
  //For Mounting...........
  // const [num, setNum] = useState(0)
  // useEffect(function(){
  //   console.log("useEffect is running")
  // })

  //using dependency arr(blank)..................
  // const [num, setNum] = useState(0)
  // useEffect(function(){
  //   console.log("useEffect is running")
  // },[])

  //Give something in Dependency.............
  // const [num1, setNum1] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(function(){
  //   console.log("useEffect is running")
  // },[num1])

  // Understand useEffect with eg...........
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
const aChanging=()=>{
  console.log("Value of A changed")
}
const bChanging=()=>{
  console.log("Value of B chnaged")
}
  useEffect(function(){
aChanging()
  },[a])

   useEffect(function(){
bChanging()
  },[b])
  return (
    <div>
      {/* For Mounting ............*/}
      {/* <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Click Me</button> */}

{/* Using dependency arr........ */}
{/* <h1>{num}</h1>
<button onClick={()=>{
  setNum(num+1)
}}>Click Me</button> */}

{/* Giving something in dependency............ */}
{/* <h1>Hover in to change-{num1}</h1>
<h1>Hove out to change-{num2}</h1>
<button onMouseEnter={()=>{
  setNum1(num1+1);
}} 
onMouseLeave={()=>{
  setNum2(num2+100)
}}>Hover Me</button> */}

{/*Understaing useEffect with eg....... */}
<h1>{a}</h1>
<h1>{b}</h1>
<button onClick={()=>{
  setA(a+1)
}}>Increase A</button>
<button onClick={()=>{
  setB(b-1)
}}>Decrease B</button>
    </div>
  )
}

export default App
