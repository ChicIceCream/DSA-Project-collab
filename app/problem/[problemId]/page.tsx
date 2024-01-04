import React from 'react'
import problems from '../ProblemData'
import { FaEye } from "react-icons/fa";

const page = ({params} : { params : {problemId: any}}) => {

  const {name, description, testcases, id, difficulty} = problems[params.problemId];

  return (
    <section className='bg-black w-full min-h-screen flex justify-center items-center'>
      <div className='bg-gray-900 w-[90%] rounded-lg p-14'>
        <h1 className='text-7xl text-white relative'>{id}. {name}
          <span className='absolute ml-14 top-5 bg-[#f0ae4c] text-black font-bold text-xl px-4 py-2 rounded-3xl'>{difficulty}</span>
        </h1>  
        <p className='text-3xl text-white pt-12 pb-9'>{description}</p>
        {testcases?.map((e, i):any => (
          <div className='text-gray-300 font-bold text-2xl py-3'>
            <p className='mb-2'>Input : {e.input[0]}, {e.input[1]}</p>
            <p>Output : {e.output}</p>
          </div>  
        ))}


        <button className='px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white font-extrabold text-2xl flex mt-[6rem] items-center'>
          Reveal Solution
          <span className='ml-3'><FaEye/></span>
        </button>
      </div>
    </section>
  )
}

export default page