import React, { useState } from "react";

const App = () => {

  // ============================================================================
  // Example 1: Basics (State with String, Number & Array)
  // Uncomment this section to use the Basics example.
  // ============================================================================
  //   {/* For simple const value */}
  //   const [name, newName] = useState('Nilakshi')
  //   const [age,newAge] = useState(20)
  // {/*For array (not recommended)*/}
  // const [color, setcolor] = useState(['Green ','Yellow ','Pink '])

  //   function chnageInfo(){
  //     newName('Navdeep')
  //      newAge(19)
  //      {/*For array */}
  //      setcolor(['White ','Black ','Brown '])
  //   }


  // ============================================================================
  // Example 2: Counter Mini Project
  // Uncomment this section to use the Counter example.
  // ============================================================================
  // const [num, newNum] = useState(0);
  // function increase() {
  //   newNum(num + 1);
  // }
  // function decrease() {
  //   newNum(num - 1);
  // }
  // function increaseByFive() {
  //   newNum(num + 5);
  // }
  // function decreaseByFive() {
  //   newNum(num - 5);
  // }


   // ============================================================================
  // Example 3: Destructing-Object State (Updating Object)
  // Uncomment this section to use.
  // ============================================================================
  // const [user, setUser] = useState({
  //   name: "Nilakshi",
  //   age: 20,
  // });
  // function btnClicked() {
  //   // Create a copy of the object using the spread operator
  //   const newUser = { ...user };
  //   // Update values
  //   newUser.name = "abc";
  //   newUser.age = 29;
  //   // Update state
  //   setUser(newUser);
  // }
// can also update like this............
// const btnClicked=()=>{
//   setUser(prev=>({...prev,age:50}))
// }

    // ============================================================================
  // Example 4: Destructing-Array State (Updating Array)
  // Uncomment this section to use.
  // ============================================================================
//  const [num, setNum] = useState([10,20,30]);
// function btnClicked() {
//   // Create copy of array using spread operator
//   const newNum = [...num];
//   // Update values
//   newNum[0] = 100;
//   newNum[1] = 200;
//   newNum[2] = 300;
//   // Update state
//   setNum(newNum);
// }

  // ============================================================================
  // Example 5: Batch Update
  // Uncomment this section to use.
  // ============================================================================
const [num, setNum] = useState(10)
const btnClicked=()=>{
setNum(prev=>(prev+1))
setNum(prev=>(prev+1))
setNum(prev=>(prev+1))
}

  return (
    <div>
      {/* ================================================================
          Basics Example UI
          Uncomment this JSX when using the Basics example.
      ================================================================ */}
      {/* <h1>Name of User is: {name} <br/> Age of User is: {age} <br/>Favourite color of user is: {color}</h1>
    <button onClick={chnageInfo}>Click to chnage values</button> */}

      {/* ================================================================
          Counter Mini Project UI
          Uncomment this JSX when using the Counter example.
      ================================================================ */}
      {/* <h1>Mini Project</h1>
      <h2>{num}</h2>
      <button onClick={increase}>Increase Number</button>
      <button onClick={decrease}>Decrease Number</button>
      <button onClick={increaseByFive}>Increase Number by 5</button>
      <button onClick={decreaseByFive}>Decrease Number by 5</button> */}
      

      {/* ==========================================================
          Example 3 Destructing in objects
      ========================================================== */}
     {/* <h1>
        {user.name}, {user.age}
      </h1>

      <button onClick={btnClicked}>
        Change User
      </button>
      */}

 {/* ==========================================================
          Example 4 Destructing in Array
      ========================================================== */}
       {/* <h1>
  {num}
</h1>

<button onClick={btnClicked}>
  Change Array
</button> */}

 {/* ==========================================================
          Example 5: Batch Update
      ========================================================== */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click ME</button>

    </div>
  );
};

export default App;
