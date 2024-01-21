'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import DifficultyButton from '../components/DifficultyButton'
import problems from './ProblemData'
import { DropdownMenuCheckboxItem, DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {DropdownMenuRadioGroupDemo} from '../shadComponents/dropdown'

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
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-8xl poppins my-10'>Problems</h1>
          <DropdownMenuRadioGroupDemo/>
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