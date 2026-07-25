import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 p-6 flex flex-nowrap overflow-x-auto gap-10 rounded-4xl ">
    {props.users.map(function(){
      return <RightCard/>
    })}
    </div>
  )
}

export default RightContent
