import {Lusitana, Style_Script, Sevillana} from 'next/font/google'
import { Poppins } from 'next/font/google'
// import {Sevillana} from 'next/font/google
import { Merriweather } from 'next/font/google'

export const style = Style_Script({
    weight: '400',
    subsets: ['latin'],
  })

export const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const sevillana = Sevillana({
  weight: '400',
  subsets: ['latin']
})

export const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin']
})
