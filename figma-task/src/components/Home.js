import React from 'react'
import Navbar from './Navbar'
import homeimage from '../Assests/home-image.png.png'


function Home() {
  return (
    <div className="home-container">
    <Navbar />
    <div className="home-banner-container">

      <div className="home-text-section">

        <h1 className="primary-heading">
        Intreduce your product Quicly & effictvely
        </h1>
        <p className="primary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping
          & marinating, so you can cook a fresh food.
        </p>

        <div className='buttons'>
        <button className='first-button'>Purchase ui kit </button>
        <button className='second-button'>Learn more </button>
        </div>
     

        

  
      </div>

      <div className="home-image-section">
        <img src={homeimage} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Home
