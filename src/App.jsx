import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Page1 from './Components/Page1'
import Heroes2 from './Components/Heroes'
import About from './Components/About'
import Features from './Components/Features'
import Contact from './Components/Contact'

function App() {

  return (
     <>
     
     
     <Navbar/>

     <Hero/>
     <About/>
     <Features/>
     <Page1/>
     <Heroes2/>
     <Contact/>
     
     
     </>
  )
}

export default App
