'use client'
import React, { useState } from 'react'
import { merriweather, poppins } from '../fonts'
import { fadeAnimation, leftAnimation, popAnimation, rightAnimation, slideAnimation } from '../motion'
import { Animation, MotionDiv } from '../MotionDiv'
import Popup from 'reactjs-popup'

const Aimhero = () => {
  return (
    <Animation>
      <div className={`mt-[6rem] w-full ${poppins} mb-[10rem]`}>
        <h1 className={`text-8xl font-extrabold mb-10 max-lg:text-7xl text-center p-2 merriweather text-white`}>
          Our <span className='text-blue-600'>Aim</span>
        </h1>

      <div className='flex max-lg:flex-col justify-evenly items-center text-center'>

        <MotionDiv className='w-[350px] h-auto bg-gray-200 mb-2 py-8 pb-12 px-6 shadow-2xl duration-90' {...leftAnimation}
        whileHover={{ scale: 1.05 }}>
          <h2 className='font-bold uppercase text-xl mb-6'>Importance of DSA</h2>
          <p className='text-black text-base text-balance'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident quas.
            Quas velit, ipsum dolores atque aut enim itaque eveniet exercitationem tempora quia 
            quisquam ab, provident debitis, fugiat nam illo.
          </p>        
        </MotionDiv>

        <MotionDiv 
          className='w-[350px] h-auto bg-gray-200 mb-2 py-8 pb-12 px-6 shadow-2xl hover:scale-105 duration-90' 
          {...popAnimation}
          whileHover={{ scale: 1.05 }}>
          <h2 className='font-bold uppercase text-xl mb-6'>Priority for Skills development</h2>
          <p className='text-black text-base text-balance'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident quas.
            Quas velit, ipsum dolores atque aut enim itaque eveniet exercitationem tempora quia 
            quisquam ab, provident debitis, fugiat nam illo.
          </p>
        </MotionDiv>

        <MotionDiv 
        className='w-[350px] h-auto bg-gray-200 mb-2 py-8 pb-12 px-6 shadow-2xl hover:scale-105 duration-90' 
        {...rightAnimation}
        whileHover={{ scale: 1.05 }}>
          <h2 className='font-bold uppercase text-xl mb-6'>Test 1</h2>
          <p className='text-black text-base text-balance'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident quas.
            Quas velit, ipsum dolores atque aut enim itaque eveniet exercitationem tempora quia 
            quisquam ab, provident debitis, fugiat nam illo.
          </p>        
        </MotionDiv>
      </div>

    </div>
    </Animation>
  )
}

export default Aimhero