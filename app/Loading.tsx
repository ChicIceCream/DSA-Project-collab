import React, { useEffect, useState } from 'react'
import { MotionDiv } from './MotionDiv'
import { sevillana } from './fonts'
import { HolaAnimation } from './motion'

const loading = () => {
   return (
    <>
    <MotionDiv 
      className="w-full h-[90vh] flex justify-center items-center"
      {...HolaAnimation}
    >
      <h1 className={`${sevillana} text-8xl hola`}>Hola !</h1>
    </MotionDiv>
    </>
  )
}

export default loading