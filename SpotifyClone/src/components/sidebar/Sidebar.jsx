import React from 'react'
import './sidebar.css'
import Cards from './Cards'

const Sidebar = () => {
  const Text = ["Legal", "Security & Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility"]
  return (
    <div className='sidebarMainContainer'>
      <div className="sidebarTopSection">
        <h2>Your Library</h2>
        <p>+</p>
      </div>
      <div className="sidebarMiddleSection">
        <Cards heading= "Create Your First Playlist" subheading= "It's easy, we'll help you" buttontext= "Create playlist"/>
        <Cards heading= "Let's find some Podcast to follow" subheading= "We'll keep you updated on new episodes" buttontext= "Browse podcast"/>
      </div>
      <div className="sidebarBottomSection">
        <div className="sideBottomSectionTopContainer">
          {
            Text.map((ele)=>{
              return(
                <p>{ele}</p>
              )
            })
          }
        </div>

        <div className="sideBottomSectionBottomContainer">
          <p>Cookies</p>
        </div>

        <div className="sideBottomSectionBottomContainer">
          <button>English</button>
        </div>

      </div>
      
    </div>
  )
}

export default Sidebar