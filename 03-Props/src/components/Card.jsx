import React from 'react'
//data fetch by any keyword(here props keyword is used)
const Card = (props) => {
    console.log(props);
  return (
      <div className="card">
        <img src={props.img} alt="image"/>
        <h1>{props.user}</h1>
        <p>{props.description}</p>
        <button>View Profile</button>
      </div>
  
  )
}

export default Card
