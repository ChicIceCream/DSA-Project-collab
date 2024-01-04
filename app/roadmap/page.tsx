import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import img from '../assests/roadmap.png'

const page = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full min-h-screen bg-black flex justify-center items-center'>
        <Image
          src={img}
          width={800}  // Increase the width
          height={800}   // Adjust the height accordingly
          alt='roadmap'
          className='rounded-lg shadow-lg p-10'  // Add some styling
        />
      </div>
    </>
  )
}

export default page