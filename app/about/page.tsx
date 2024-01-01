"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import img from "../assests/about_header.jpeg";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import armaan from '../assests/armaan.jpeg'
import bhati from '../assests/bhati.jpeg'
import Footer from "../components/Footer";

const page = () => {
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const [popup3, setPopup3] = useState(false);

  const closePopup1 = () => {
    setPopup1(false);
  };
  const closePopup2 = () => {
    setPopup2(false);
  };
  const closePopup3 = () => {
    setPopup3(false);
  };

  return (
    <>
      <Navbar />
      <main className="bg-black h-[100%] w-full">
        <div className="bg-gray-800 w-full h-[250px] flex justify-center items-center">
          <h1 className="text-7xl text-[#d7b04e] moto">JOIN US IN THIS AMAZING JOURNEY OF DSA</h1>
        </div>
         {/* <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#002233"></rect><path d="M0 495L21.5 476C43 457 86 419 128.8 415C171.7 411 214.3 441 257.2 459.2C300 477.3 343 483.7 385.8 472.7C428.7 461.7 471.3 433.3 514.2 418C557 402.7 600 400.3 642.8 419.2C685.7 438 728.3 478 771.2 497.5C814 517 857 516 878.5 515.5L900 515L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z" fill="#94cbff" stroke-linecap="round" stroke-linejoin="miter"></path></svg> */}

        <div className="relative h-[1800px]">
          {!popup1 && (
            <div
              className="w-[550px] h-[600px] bg-red-400 first-box rotate-[-30deg] border-2 border-gray-300 shadow-lg rounded-lg hover:border-blue-400 hover:scale-[1.01] duration-500 limitedText p-3 whitespace-nowrap text-center absolute top-[14rem] left-[15rem] up-down"
              onClick={() => setPopup1(true)}
            >
              <h1 className="text-5xl font-bold uppercase py-10 px-1 mt-9 text-white">
                Why Dsa ?
              </h1>
              <p className="text-wrap text-[1.25rem] pt-2 text-gray-200 px-4 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                unde deserunt maiores saepe eligendi. Placeat repudiandae
                voluptatibus distinctio id praesentium voluptatem nihil
                molestias facilis quos laudantium. Laudantium enim maiores nam
                commodi? Veritatis, cumque atque iure et unde voluptate vero ex
                dignissimos. Magni deleniti provident consequatur, nesciunt
                nostrum itaque omnis praesentium assumenda! Saepe expedita
                <br />
                <span className="pt-5 cursor-pointer text-[1.28rem] font-bold hover:scale-[1.55]">
                  Read More...
                </span>
              </p>
            </div>
          )}

          {!popup2 && (
            <div
              className="w-[550px] h-[600px] bg-blue-300 second-box rotate-[30deg] border-2 border-gray-300 shadow-lg rounded-lg hover:border-blue-400 hover:scale-[1.01] duration-500 limitedText p-3 whitespace-nowrap text-center absolute top-[40rem] right-[15rem] up-down2"
              onClick={() => setPopup2(true)}
            >
              <h1 className="text-5xl font-bold uppercase py-10 px-1 mt-9 text-white">
                Why Dsa ?
              </h1>
              <p className="text-wrap text-[1.25rem] pt-2 text-gray-100 px-4 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                unde deserunt maiores saepe eligendi. Placeat repudiandae
                voluptatibus distinctio id praesentium voluptatem nihil
                molestias facilis quos laudantium. Laudantium enim maiores nam
                commodi? Veritatis, cumque atque iure et unde voluptate vero ex
                dignissimos. Magni deleniti provident consequatur, nesciunt
                nostrum itaque omnis praesentium assumenda! Saepe expedita
                <br />
                <span className="pt-5 cursor-pointer text-[1.28rem] font-bold hover:scale-[1.55]">
                  Read More...
                </span>
              </p>
            </div>
          )}

          {!popup3 && (
            <div
              className="w-[550px] h-[600px] bg-yellow-300 third-box rotate-[10deg] border-2 border-gray-300 shadow-lg rounded-lg hover:border-blue-400 hover:scale-[1.01] duration-500 limitedText p-3 whitespace-nowrap text-center absolute top-[74rem] left-[20rem] up-down3"
              onClick={() => setPopup3(true)}
            >
              <h1 className="text-5xl font-bold uppercase py-10 px-1 mt-9 text-white">
                Why Dsa ?
              </h1>
              <p className="text-wrap text-[1.25rem] pt-2 text-gray-100 px-4 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                unde deserunt maiores saepe eligendi. Placeat repudiandae
                voluptatibus distinctio id praesentium voluptatem nihil
                molestias facilis quos laudantium. Laudantium enim maiores nam
                commodi? Veritatis, cumque atque iure et unde voluptate vero ex
                dignissimos. Magni deleniti provident consequatur, nesciunt
                nostrum itaque omnis praesentium assumenda! Saepe expedita
                <br />
                <span className="pt-5 cursor-pointer text-[1.28rem] font-bold hover:scale-[1.55]">
                  Read More...
                </span>
              </p>
            </div>
          )}

          <Popup open={popup1} closeOnDocumentClick onClose={closePopup1}  className="z-[5000]">
            <div className="w-[700px] h-[800px] text-center px-20 bg-red-300 border-2 border-gray-300 shadow-xl text-white popup1">
              <span
                className="absolute top-0 right-0 p-5 text-3xl cursor-pointer"
                onClick={closePopup1}
              >
                <IoMdClose />
              </span>
              <h1 className="text-5xl font-bold uppercase py-7 px-1 mt-10">
                Why Dsa ?
              </h1>
              <p className="text-wrap text-[1.25rem] pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                unde deserunt maiores saepe eligendi. Placeat repudiandae
                voluptatibus distinctio id praesentium voluptatem nihil
                molestias facilis quos laudantium. Laudantium enim maiores nam
                commodi? Veritatis, cumque atque iure et unde voluptate vero ex
                dignissimos. Magni deleniti provident consequatur, nesciunt
                nostrum itaque omnis praesentium assumenda! Saepe expedita
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium assumenda esse saepe porro vel repellat blanditiis.
                Omnis, placeat. Sequi magnam aspernatur alias nihil deleniti
                delectus dolor voluptatem ex cum? Consequatur.
              </p>
            </div>
          </Popup>

          <Popup open={popup2} closeOnDocumentClick onClose={closePopup2}>
            <div className="w-[700px] h-[800px] text-center px-20 bg-blue-300 border-2 border-gray-300 shadow-xl text-white popup2">
              <span
                className="absolute top-0 right-0 p-5 text-3xl cursor-pointer"
                onClick={closePopup2}
              >
                <IoMdClose />
              </span>
              <h1 className="text-5xl font-bold uppercase py-7 px-1 mt-10">
                Why Dsa ?
              </h1>
              <p className="text-wrap text-[1.25rem] pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                unde deserunt maiores saepe eligendi. Placeat repudiandae
                voluptatibus distinctio id praesentium voluptatem nihil
                molestias facilis quos laudantium. Laudantium enim maiores nam
                commodi? Veritatis, cumque atque iure et unde voluptate vero ex
                dignissimos. Magni deleniti provident consequatur, nesciunt
                nostrum itaque omnis praesentium assumenda! Saepe expedita
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium assumenda esse saepe porro vel repellat blanditiis.
                Omnis, placeat. Sequi magnam aspernatur alias nihil deleniti
                delectus dolor voluptatem ex cum? Consequatur.
              </p>
            </div>
          </Popup>

          <Popup open={popup3} closeOnDocumentClick onClose={closePopup3}>
            <div className="w-[700px] h-[800px] text-center px-20 bg-yellow-300 border-2 border-gray-300 shadow-xl text-white popup3">
              <span
                className="absolute top-0 right-0 p-5 text-3xl cursor-pointer"
                onClick={closePopup3}
              >
                <IoMdClose />
              </span>
              <h1 className="text-5xl font-bold uppercase py-7 px-1 mt-10">
                Why Dsa ?
              </h1>
              <p className="text-wrap text-[1.25rem] pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                unde deserunt maiores saepe eligendi. Placeat repudiandae
                voluptatibus distinctio id praesentium voluptatem nihil
                molestias facilis quos laudantium. Laudantium enim maiores nam
                commodi? Veritatis, cumque atque iure et unde voluptate vero ex
                dignissimos. Magni deleniti provident consequatur, nesciunt
                nostrum itaque omnis praesentium assumenda! Saepe expedita
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium assumenda esse saepe porro vel repellat blanditiis.
                Omnis, placeat. Sequi magnam aspernatur alias nihil deleniti
                delectus dolor voluptatem ex cum? Consequatur.
              </p>
            </div>
          </Popup>
        </div>

        <div className="w-full h-[600px] mt-[12rem] flex justify-evenly items-center mb-44">

          <div className="min-w-[600px] h-[700px] border-2 border-gray-600 text-white shadow-xl flex flex-col justify-center items-center">
             <span className="border-[3px] border-red-200 rounded-xl">
              <Image
                  src={armaan}
                  alt="armaan"
                  width={200}
                  height={250}
                  className="p-[4px] rounded-xl"
                />
             </span>
             <h2 className="text-2xl font-bold uppercase noto my-7 text-[#FFD700]">Front-end</h2>
              <ul className="text-xl text-white mb-6 list-disc">
                <li className="mt-3">slkdjfhsdfsdf</li>
                <li className="mt-3">sdfsdfsdfsdf</li>
                <li className="mt-3">slkkdjsdfsdff</li>
                <li className="mt-3">slkkdjsdfsdff</li>
                <li className="mt-3">slkkdjsdfsdfsdf</li>
              </ul>
          </div>

          <div className="min-w-[600px] h-[700px] border-2 border-gray-600 text-white shadow-xl flex flex-col justify-center items-center">
             <span className="border-[3px] border-red-200 rounded-xl">
              <Image
                  src={bhati}
                  alt="bhati"
                  width={200}
                  height={250}
                  className="p-[4px] rounded-xl"
                />
             </span>
             <h2 className="text-2xl font-bold uppercase noto my-7 text-[#FFD700]">Back-end</h2>
              <ul className="text-xl text-white mb-6 list-disc">
                <li className="mt-3">slkdjfhsdfsdf</li>
                <li className="mt-3">sdfsdfsdfsdf</li>
                <li className="mt-3">slkkdjsdfsdff</li>
                <li className="mt-3">slkkdjsdfsdff</li>
                <li className="mt-3">slkkdjsdfsdfsdf</li>
              </ul>
          </div>
        </div>
      <Footer/>
      {(popup1 || popup2 || popup3) && <div className="overlay"></div>}
      </main>

    </>
  );
};

export default page;
