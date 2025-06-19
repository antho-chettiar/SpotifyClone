import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import MainSection from './components/mainSection/mainSection'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  

  return (
    <>
     <div className="mainContainer">
      <Navbar />
      <div className="mainSectionContentContainer">
        <Sidebar />
        <MainSection />
      </div>
     </div>
    </>
  )
}

export default App
