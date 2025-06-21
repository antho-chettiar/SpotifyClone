import React from 'react'

const SpecificMusicPage = ({currentEle}) => {
  return (
    <div>
        <img src={currentEle.imgSrc} alt="" /> 
        <h1>{currentEle.heading}</h1>
        <h3>{currentEle.subHeading}</h3>
        <audio src={currentEle.musicFile} autoPlay controls></audio>
        
    </div>
  )
}

export default SpecificMusicPage