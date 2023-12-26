import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <h1>List of Problems</h1>
      <p><Link href="problem/1">problem 1</Link></p>
      <p>problem 2</p>
      <p>problem 3</p>
    </div>

  )
}

export default page