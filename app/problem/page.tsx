import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <main className='bg-black w-full min-h-[100vh]'>
      <Navbar/>
      <div>
        <div>
          <button>Difficulty</button>
        </div>

        <div>
          <ul>
            <li>Problem 1</li>
            <li>Problem 2</li>
            <li>Problem 3</li>
            <li>Problem 4</li>
            <li>Problem 5</li>
            <li>Problem 6</li>
            <li>Problem 7</li>
            <li>Problem 8</li>
            <li>Problem 9</li>
            <li>Problem 10</li>
          </ul>
        </div>
      </div>
    </main>

  )
}

export default page