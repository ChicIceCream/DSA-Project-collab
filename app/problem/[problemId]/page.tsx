import React from 'react'

const page = ({params} : { params : {problemId: string}}) => {
  return (
    <div>problem {params.problemId}</div>
  )
}

export default page