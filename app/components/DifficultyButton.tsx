import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const DifficultyButton = () => {

  

  return (
   <div className='flex justify-end items-center'>
   <label form="cars" className='text-2xl text-gray-300 mr-4'>Difficulty:</label>
   <div className="relative">
  <select
    name="cars"
    id="cars"
    className='py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md text-white font-bold flex justify-center items-center capitalize border-none outline-none appearance-none'
  >
    <option value="easy" className="bg-gray-800 hover:bg-gray-700">Easy</option>
    <option value="medium" className="bg-gray-800 hover:bg-gray-700">Medium</option>
    <option value="difficult" className="bg-gray-800 hover:bg-gray-700">Difficult</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fill-rule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
    </svg>
  </div>
</div>

   </div>
  )
}

export default DifficultyButton