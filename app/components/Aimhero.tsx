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
      <h1 className="text-7xl font-extrabold mb-14 text-center py-24 text-white relative">
          <span className="relative z-10">Our</span>
          <span className="absolute h-1 w-[15rem] bg-[#3b94d3] bottom-14 left-1/2 transform -translate-x-1/2"></span>
          <span className="relative z-10 ml-7">Aim</span>
      </h1>

      <div className='flex max-lg:flex-col justify-evenly items-center text-center'>

        <MotionDiv className='w-[370px] h-[320px] bg-white py-12 px-6 shadow-2xl duration-70' {...leftAnimation}
        whileHover={{ scale: 1.09 }}>
          <h2 className='font-bold uppercase text-xl mb-6'>Importance of DSA</h2>
          <p className='text-black text-base text-balance'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident quas.
            Quas velit, ipsum dolores atque aut enim itaque eveniet exercitationem tempora quia 
            quisquam ab, provident debitis, fugiat nam illo.
          </p>        
        </MotionDiv>

        <MotionDiv 
          className='w-[400px] h-[360px] bg-white py-12 px-6 shadow-2xl hover:scale-105 duration-70' 
          {...popAnimation}
          whileHover={{ scale: 1.02 }}>
          <h2 className='font-bold uppercase text-xl mb-6'>Priority for Skills development</h2>
          <p className='text-black text-base text-balance'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, provident quas.
            Quas velit, ipsum dolores atque aut enim itaque eveniet exercitationem tempora quia 
            quisquam ab, provident debitis, fugiat nam illo.
          </p>
        </MotionDiv>

        <MotionDiv 
        className='w-[370px] h-[320px] bg-white py-12 px-6 shadow-2xl hover:scale-105 duration-70' 
        {...rightAnimation}
        whileHover={{ scale: 1.09 }}>
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