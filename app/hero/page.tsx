import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Animation, MotionDiv } from "../MotionDiv";
import {
  HolaAnimation,
  fadeAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../motion";
import img from "../assests/home-img-removebg-preview.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Abouthero from "../components/Abouthero";
import Aimhero from "../components/Aimhero";

const Hero = () => {
  return (
    <>
      <Navbar />
    <div className="overflow-hidden bg-blue-500">
      <Animation>
        <main>
          <div className="w-full auto my-[12rem] max-sm:min-h-[700px] max-sm:mb-[5rem] flex justify-around max-lg:block items-center p-4 max-[800px]:mt-[6rem]">
            <MotionDiv {...slideAnimation("left")}>
              <h2
                className="text-[5.5rem] text-white font-bold leading-[8rem] max-[800px]:leading-[6.5rem]"
                {...headTextAnimation}
              >
                Finding Difficulties
                <br /> with <span className="text-red-600">D</span>
                <span className="text-green-600">S</span>
                <span className="text-yellow-600">A</span>
              </h2>
              <h3 className="text-3xl ml-5 text-gray-300 mt-8 italic max-[800px]:text-2xl">
                This is the right place...
              </h3>
            </MotionDiv>
            <MotionDiv {...headContentAnimation} className="max-sm:my-16">
              <Image src={img} alt="dsa" width={450} height={450} className="bg-gray-700 rounded-full p-5"/>
            </MotionDiv>
          </div>
        </main>
      </Animation>

      <Abouthero />
      <Aimhero />
      <Footer />
    </div>
    </>
  );
};

export default Hero;
