'use client'
import { Suspense, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './globals.css'
import Loading from "./Loading";
import { Router, useRouter } from "next/router";
import Hero from "./hero/page";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer); 
  }, [loading]);



  
    return (
      <>
      {loading ? (
        <Loading />
      ) : 
        <div>
          {/* <Navbar /> */}
          <Hero />
          {/* <Footer /> */}
        </div>
        }
      </>
    );
}


