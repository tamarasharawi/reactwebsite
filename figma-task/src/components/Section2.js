import React from 'react'
import homeimage from '../Assests/home-image.png.png'
import icon from '../Assests/svg/icon.svg'



function Section2() {
  return (
    <div>

    <div className="home-banner-container">

      <div className="home-text-section">

        <h2 className="primary-heading">
            Light , fast & powerfull
        </h2>
        <p className="primary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping
          & marinating, so you can cook a fresh food.
        </p>

        <div className='section-two-icons' >

        <div>
            <img src={icon} alt="" />
            <h4>title Gose here</h4>
            <p>lokdzfjnfm vs xdfmlskmz df. zdf bsk  s jkj kad</p>
        </div>

        <div>
            <img src={icon} alt="" />
            <h4>title Gose here</h4>
            <p>lokdzfjnfm vs xdfmlskmz df. zdf bsk  s jkj kad</p>
        
        </div>
        </div>
     

        

  
      </div>

      <div className="home-image-section">
        <img src={homeimage} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Section2
