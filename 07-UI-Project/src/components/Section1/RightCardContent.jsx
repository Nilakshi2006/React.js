import React from 'react'

const RightCardContent = () => {
  return (
   <div className="h-full w-full absolute top-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white h-12 w-12 rounded-full font-semibold text-xl flex justify-center items-center">1</h2>
        <div>
            <p className="text-lg text-white mb-14 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nam beatae totam deserunt. Pariatur, officiis.</p>
            <div className="flex justify-between">
                <button className="bg-blue-500 text-white rounded-full font-medium px-8 py-2">Satisfies</button>
                <button className="bg-blue-500 text-white rounded-full font-medium px-4 py-2">
                    <i class="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
