import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target="_blank">
    <div className="h-30 w-47 overflow-hidden bg-white rounded-xl">
  <img className="h-full w-full object-cover" src={props.elem.download_url} alt=""/>
</div>
<h2 className="font-bold text-lg">
  {props.elem.author}
</h2>
  </a>
    </div>
  )
}

export default Card
