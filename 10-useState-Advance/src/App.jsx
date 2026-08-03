import React, {useState} from 'react'

const App = () => {
  
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
  )
}

export default App
