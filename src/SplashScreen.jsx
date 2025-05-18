import React from "react";
import mvlogo from '/images/mv.logo.jpg'

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white flex-col">
      <img
        src={mvlogo} 
        alt="Logo"
        className="w-24 h-24 rounded-full animate-bounce"
      />
      <h1 className="text-2xl font-bold">MILOT <span className="text-blue-600">VERBANI</span></h1>
      <p className="mt-4 text-lg animate-pulse">Loading...</p>
    </div>
  )
}

export default SplashScreen