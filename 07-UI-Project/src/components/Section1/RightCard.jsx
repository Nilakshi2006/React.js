import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className="h-full w-80 shrink-0 overflow-hidden relative rounded-4xl ">
      <img className="h-full w-full object-cover " src="https://plus.unsplash.com/premium_photo-1674055047782-76ccc87a1110?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Working lady"/>
      <RightCardContent/>
    </div>
  )
}

export default RightCard
