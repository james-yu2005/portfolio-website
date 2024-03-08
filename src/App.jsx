import { useState } from 'react'
import './App.css'
"use client";
import React from "react";
import MyPortfolio from './Pages/MyPortfolio'
import { WavyBackground } from "/src/components/ui/wavy-background";
import AboutMe from './Pages/Aboutme';
import MyPortfolio2 from './Pages/MyPortfolio2';
import Navbar from "./Pages/Navbar"

import Contactme from './Pages/Contactme';
import Experience from './Pages/Experience';
import blob from './components/ui/blob';


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
        I'm currently a biomedical engineering student at the University of Waterloo whos interested in engineering solutions in medical research and front end development
      </p>
    </WavyBackground>
    </div>
        
      <MyPortfolio/>
      <MyPortfolio2/>
      
      <AboutMe/>
      <Contactme/>
    </>
  )
}

export default App
