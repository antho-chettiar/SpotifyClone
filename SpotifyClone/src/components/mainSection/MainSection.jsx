import React, { useState } from 'react'
import './mainSection.css'
import Trending from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'
import SpecificMusicPage from '../../pages/specificMusicPage/SpecificMusicPage'


const MainSection = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [currentEle, setCurrentEle] = useState(null)
  return (
    <main className='mainSection'>
      {
        currentPage === "home" ? 
          <>
          <Trending setCurrentEle= {setCurrentEle} setCurrentPage = {setCurrentPage}/>
          <PopularArtists setCurrentPage = {setCurrentPage}/>
          </>
        : currentPage === "musicSpecificPage" ? 
          <><SpecificMusicPage currentEle = {currentEle} /></> 
        : currentPage === "artistSpecificPage" ? 
          <>artist</> 
        : null
      }
              
    </main>
  )
}

export default MainSection