import React from 'react'
import "./googleplay.scss"
import googlePlay from "../../assets/google-play.png"

const GooglePlay = () => {
  return (
    <div className='google-play'>
    <img src={googlePlay} alt="" />
       <div>
        <span style={{fontSize:'10px'}}>GET IN ON</span>
        <h4>Google Play</h4>
       </div>
    </div>
  )
}

export default GooglePlay