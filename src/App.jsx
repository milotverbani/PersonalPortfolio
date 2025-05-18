import { useEffect, useState } from 'react'
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
import SplashScreen from './SplashScreen' 

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SplashScreen />
  }

  return (
    <>
      <Background />
      <Navbar />
      <div>
        <section id='home'><Home /></section>
        <Slider />
        <section id='about'><About /></section>
        <section id='projects'><Sliderprojects /></section>
        <Projects />
        <section id='contact'><Contact /></section>
        <Footer />
      </div>
    </>
  )
}

export default App
