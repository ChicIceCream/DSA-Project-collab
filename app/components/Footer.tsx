// Footer.jsx
import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="container mx-auto flex max-sm:flex-col justify-evenly p-5">
          <div className='text-left mb-8'>
            <h1 className='text-4xl text-white font-bold py-4 pr-5'>Something...</h1>
            <p className='text-gray-300 poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ducimus!</p>
          </div>

          <div className='flex'>
            <form action="submit" className='flex flex-col'>
              <h1 className='text-[1.1rem] text-slate-300 pt-4 pb-1'>Share Your Thoughts : </h1>
              <input type="email" className='mb-3 rounded-md text-black w-[300px] text-[15px] py-[0.35rem] px-2 border-none outline-none' placeholder='Email: example123@gmail.com' />
              <textarea 
                  className='rounded-md text-black w-[300px] min-h-[150px] text-[15px] py-2 px-2 border-none outline-none' 
                  placeholder='Share Something'
              />
              <button type='submit' className='bg-blue-800 py-2 mt-5 hover:bg-blue-900 font-bold uppercase text-[13px] text-white'>Submit</button>
            </form>
          </div>

          <div className='flex items-center my-6'>
            <a href="https://twitter.com/armaan23____" className='text-2xl mr-4 border-2 border-white rounded-full p-2 opacity-80 hover:opacity-100'><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/abhivyakt-b-3517b126b/" className='text-2xl mr-4 border-2 border-white rounded-full p-2 opacity-80 hover:opacity-100'><FaLinkedin/></a>
            <a href="" className='text-2xl mr-4 border-2 border-white rounded-full p-2 opacity-80 hover:opacity-100'><FaDiscord/></a>
            <a href="https://leetcode.com/armaan__23/" className='text-2xl mr-4 border-2 border-white rounded-full p-2 opacity-80 hover:opacity-100'><SiLeetcode/></a>
          </div>  
      </div>
        <p className='border-t-2 pt-4 border-slate-600 text-center'>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
