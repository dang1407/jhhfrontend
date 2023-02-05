import React from 'react'
import './app.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Main from './Component/Main/Main'
import Footer from './Component/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default App