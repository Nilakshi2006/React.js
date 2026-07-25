import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className="h-full w-full absolute top-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white h-12 w-12 rounded-full font-semibold text-xl flex justify-center items-center">{props.id+1}</h2>
        <div>
            <p className="text-lg text-shadow-blue-950 text-white mb-14 leading-relaxed">{props.intro}</p>
            <div className="flex justify-between">
                <button style={{backgroundColor:props.color}} className=" text-white rounded-full font-medium px-8 py-2">{props.tag}</button>
                <button className=" text-white rounded-full font-medium px-4 py-2">
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
