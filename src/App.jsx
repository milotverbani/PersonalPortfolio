import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Home from './Home'
import Background from './Background'
import Slider from './Slider'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Sliderprojects from './Sliderproject'





function App() {
  return (
    <>
    <Background/>
    <Navbar/>
   <div>
    <section id='home'> <Home/></section>
    <Slider/>
    <section id='about'><About/></section>
    <section id='projects'><Sliderprojects/></section>
    <Projects/>
    <section id='contact'> <Contact/> </section>
    <Footer/>
   </div>
    </>
  )
}

export default App
