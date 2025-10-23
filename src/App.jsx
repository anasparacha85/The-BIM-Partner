import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './hooks/ScrollToTop'
import ScrollToHashElement from './hooks/ScrollToHash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop/>
    <ScrollToHashElement/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
