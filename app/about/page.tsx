'use client'

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import img from "../assests/about_header.jpeg";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";

const page = () => {
  const [popup1, setPopup1] = useState(false)
  const [popup2, setPopup2] = useState(false)
  const [popup3, setPopup3] = useState(false)

  const closePopup1 = () => {
    setPopup1(false)
  }
  const closePopup2 = () => {
    setPopup2(false)
  }
  const closePopup3 = () => {
    setPopup3(false)
  }

  return (
    <>
    { (popup1 || popup2 || popup3) && (
      <div className="overlay"></div>
    )}

      <Navbar />
      <main className="bg-slate-50 relative">
        <div className="bg-blue-300 w-full h-[250px]"></div>

        {!popup1 && 
          <div 
          className="w-[550px] h-[600px] bg-white abcd rotate-[-30deg] border-2 border-gray-300 shadow-lg rounded-lg hover:border-blue-400 hover:scale-[1.01] duration-500 limitedText p-3 whitespace-nowrap text-center absolute top-[24rem] left-[15rem]"
          onClick={() => setPopup1(true)}
        >
          <h1 className="text-5xl font-bold uppercase py-10 px-1 mt-9">Why Dsa ?</h1>
          <p className="text-wrap text-[1.25rem] pt-2 text-gray-700 px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde deserunt maiores saepe eligendi. Placeat
             repudiandae voluptatibus distinctio id praesentium voluptatem nihil molestias facilis quos laudantium. 
             Laudantium enim maiores nam commodi? Veritatis, cumque atque iure et unde voluptate vero ex dignissimos.
              Magni deleniti provident consequatur, nesciunt nostrum itaque omnis praesentium assumenda! Saepe expedita<br/>
              <span className="pt-5 cursor-pointer text-[1.28rem] font-bold hover:scale-[1.55]">Read More...</span>
          </p>
        </div>
        }

        {!popup1 && 
          <div 
          className="w-[550px] h-[600px] bg-white abcd rotate-[-30deg] border-2 border-gray-300 shadow-lg rounded-lg hover:border-blue-400 hover:scale-[1.01] duration-500 limitedText p-3 whitespace-nowrap text-center absolute top-[24rem] left-[15rem]"
          onClick={() => setPopup1(true)}
        >
          <h1 className="text-5xl font-bold uppercase py-10 px-1 mt-9">Why Dsa ?</h1>
          <p className="text-wrap text-[1.25rem] pt-2 text-gray-700 px-4 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde deserunt maiores saepe eligendi. Placeat
             repudiandae voluptatibus distinctio id praesentium voluptatem nihil molestias facilis quos laudantium. 
             Laudantium enim maiores nam commodi? Veritatis, cumque atque iure et unde voluptate vero ex dignissimos.
              Magni deleniti provident consequatur, nesciunt nostrum itaque omnis praesentium assumenda! Saepe expedita<br/>
              <span className="pt-5 cursor-pointer text-[1.28rem] font-bold hover:scale-[1.55]">Read More...</span>
          </p>
        </div>
        }

        <div className="w-[450px] h-[500px] bg-white rotate-[-20deg] border-2 border-gray-300 shadow-lg rounded-lg hover:border-gray-400 hover:scale-[1.01] duration-700 limitedText p-3 whitespace-nowrap text-center absolute top-[74rem] left-[40rem]">
          <h1 className="text-5xl font-bold uppercase py-7 px-1">Why Dsa ?</h1>
          <p className="text-wrap text-[1.25rem] pt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde deserunt maiores saepe eligendi. Placeat
             repudiandae voluptatibus distinctio id praesentium voluptatem nihil molestias facilis quos laudantium. 
             Laudantium enim maiores nam commodi? Veritatis, cumque atque iure et unde voluptate vero ex dignissimos.
              Magni deleniti provident consequatur, nesciunt nostrum itaque omnis praesentium assumenda! Saepe expedita
          </p>
        </div>
      </main>


      <Popup open={popup1} closeOnDocumentClick onClose={closePopup1}>
        <div className="w-[700px] z-[2000] h-[800px] text-center px-20 bg-slate-50 border-2 border-gray-300 shadow-xl relative popup1">
          <span className="absolute top-0 right-0 p-5 text-3xl cursor-pointer" onClick={closePopup1}><IoMdClose /></span>
         <h1 className="text-5xl font-bold uppercase py-7 px-1 mt-10">Why Dsa ?</h1>
          <p className="text-wrap text-[1.25rem] pt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde deserunt maiores saepe eligendi. Placeat
             repudiandae voluptatibus distinctio id praesentium voluptatem nihil molestias facilis quos laudantium. 
             Laudantium enim maiores nam commodi? Veritatis, cumque atque iure et unde voluptate vero ex dignissimos.
              Magni deleniti provident consequatur, nesciunt nostrum itaque omnis praesentium assumenda! Saepe expedita<br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda esse saepe porro vel repellat blanditiis.
             Omnis, placeat. Sequi magnam aspernatur alias nihil deleniti delectus dolor voluptatem ex cum? Consequatur.
          </p>
        </div>
      </Popup>


      <Popup open={popup1} closeOnDocumentClick onClose={closePopup2}>
        <div className="w-[700px] z-[2000] h-[800px] text-center px-20 bg-slate-50 border-2 border-gray-300 shadow-xl relative popup1">
          <span className="absolute top-0 right-0 p-5 text-3xl cursor-pointer" onClick={closePopup2}><IoMdClose /></span>
         <h1 className="text-5xl font-bold uppercase py-7 px-1 mt-10">Why Dsa ?</h1>
          <p className="text-wrap text-[1.25rem] pt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde deserunt maiores saepe eligendi. Placeat
             repudiandae voluptatibus distinctio id praesentium voluptatem nihil molestias facilis quos laudantium. 
             Laudantium enim maiores nam commodi? Veritatis, cumque atque iure et unde voluptate vero ex dignissimos.
              Magni deleniti provident consequatur, nesciunt nostrum itaque omnis praesentium assumenda! Saepe expedita<br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda esse saepe porro vel repellat blanditiis.
             Omnis, placeat. Sequi magnam aspernatur alias nihil deleniti delectus dolor voluptatem ex cum? Consequatur.
          </p>
        </div>
      </Popup>


      <Popup open={popup1} closeOnDocumentClick onClose={closePopup3}>
        <div className="w-[700px] z-[2000] h-[800px] text-center px-20 bg-slate-50 border-2 border-gray-300 shadow-xl relative popup1">
          <span className="absolute top-0 right-0 p-5 text-3xl cursor-pointer" onClick={closePopup3}><IoMdClose /></span>
         <h1 className="text-5xl font-bold uppercase py-7 px-1 mt-10">Why Dsa ?</h1>
          <p className="text-wrap text-[1.25rem] pt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde deserunt maiores saepe eligendi. Placeat
             repudiandae voluptatibus distinctio id praesentium voluptatem nihil molestias facilis quos laudantium. 
             Laudantium enim maiores nam commodi? Veritatis, cumque atque iure et unde voluptate vero ex dignissimos.
              Magni deleniti provident consequatur, nesciunt nostrum itaque omnis praesentium assumenda! Saepe expedita<br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium assumenda esse saepe porro vel repellat blanditiis.
             Omnis, placeat. Sequi magnam aspernatur alias nihil deleniti delectus dolor voluptatem ex cum? Consequatur.
          </p>
        </div>
      </Popup>
    </>
  );
};

export default page;
