import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
   const param= useParams();

  return (
    <div>
      <h1>{param.id} Course Detail</h1>
    </div>
  )
}

export default CourseDetail
