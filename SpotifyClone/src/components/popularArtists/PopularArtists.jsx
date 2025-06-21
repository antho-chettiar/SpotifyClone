import React from 'react'
import './popularArtists.css'
import ArtistCard from '../artistCard/artistCard'

const PopularArtists = ({setCurrentPage}) => {
  return (
    <div className='popularArtistsMainSection trendingSectionMainContainer'>
      <span>Popular Artists</span>
      <ArtistCard setCurrentPage = {setCurrentPage} />
    </div>
  )
}

export default PopularArtists