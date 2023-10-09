import React from 'react'
import reactDom from 'react-dom'
import MainSection from './components/MainSection'
import AboutInterestSection from './components/AboutInterestSection'
import Footer from './components/Footer'
import Img from './components/Img'
import './App.css'

function App() {
  

  return (
    <>
      <div className="card-component">
        <Img/>
        <MainSection/>
        <AboutInterestSection/>
        <Footer/>
      </div>
     
    </>
  )
}

export default App
