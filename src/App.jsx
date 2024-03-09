import { useState } from 'react'
import './App.css'
"use client";
import React from "react";
import MyPortfolio from './Pages/MyPortfolio'
import { WavyBackground } from "/src/components/ui/wavy-background";
import AboutMe from './Pages/Aboutme';
import Navbar from "./Pages/Navbar"
import Contactme from './Pages/Contactme';
import Experience from './Pages/Experience';
import blob from '/src/components/ui/blob';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <blob/>
    
    <Navbar />
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hi, my name is James Yu
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        I'm a biomedical engineering student at the University of Waterloo who's interested in engineering solutions in medical research and full stack development
      </p>
    </WavyBackground>
    </div>
        
      <MyPortfolio/>
      <Experience/>
      
      <AboutMe/>
      <Contactme/>
    </>
  )
}

export default App

