import React from 'react'

const App = () => {

  function btnclicked(){
    console.log('Button is Clicked')
  }

const TextChanged=(val)=>{
console.log(val)
  }

  const scroll=(elem)=>{
    if(elem>0){

      console.log('Page Scrolling from upwards to downwards at speed',elem)
    }else{
      console.log('page Scrolling from downward to upward at seed',elem)
    }
  }

  return (
    <div>
      <h1>Hi,User</h1>

      <h2>Enter ur Name</h2>

<input onChange={function(elem){
  TextChanged(elem.target.value)
}} type="text" placeholder='Enter Name'/>
<br/>
      <button onClick={btnclicked}>Change User</button>

      <br/>

      <button onMouseEnter={function(){
        console.log('Mouse is Entered')
      }}>
        Click Me
      </button>

<div onWheel={(elem)=>{
scroll(elem.deltaY)
}}>
      <div  className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      </div>
    </div>
  )
}

export default App
