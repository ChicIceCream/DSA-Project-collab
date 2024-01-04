'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import DifficultyButton from '../components/DifficultyButton'
import problems from './ProblemData'

const page = () => {

  const[selectedDifficulty, setSelectedDifficulty] = useState("all");

  const handleDifficultyChange = (event:any) => {
    const selectedValue = event.target.value;
    setSelectedDifficulty(selectedValue);
  };

  return (
    <main className='bg-black w-full min-h-[100vh]'>
      <Navbar/>
      <div className='text-white py-12 px-10'>

        <h1 className='text-white text-8xl poppins italic my-10'>Problems</h1>
       
        <div className='flex justify-end items-center pt-10 pb-5 pr-8'>
          <label form="cars" className='text-2xl text-gray-300 mr-4'>Difficulty:</label>
          <div className="relative flex justify-between px-1">
            <select
              name="difficulty"
              id="difficulty"
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
              className='py-3 pl-4 pr-11 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md text-white font-bold capitalize border-none outline-none appearance-none'
            >
              <option value="all" className="bg-gray-800 hover:bg-gray-700">All</option>
              <option value="Easy" className="bg-gray-800 hover:bg-gray-700">Easy</option>
              <option value="Medium" className="bg-gray-800 hover:bg-gray-700">Medium</option>
              <option value="Difficult" className="bg-gray-800 hover:bg-gray-700">Difficult</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none pl-7">
              <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
              </svg>
            </div>
        </div>

   </div>

        <div className='border-2 bg-gray-900 border-gray-600 w-full h-auto'>
          <ul className='p-8 '>
          {problems
            .filter(prob => selectedDifficulty === "all" || prob.difficulty === selectedDifficulty)
            .map((prob, idx) => (
              <Link href={`problem/${idx}`} key={idx}>
                <li className='border-2 border-b-white py-4 text-lg roboto px-2 hover:bg-black'>
                  <span className='pr-3 pl-2'>{prob.id}.</span>
                  {prob.name}
                  <span className='ml-9 px-[0.7rem] py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-sm'>
                    {prob.difficulty}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </main>

  )
}

export default page