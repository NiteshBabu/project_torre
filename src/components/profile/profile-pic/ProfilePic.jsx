import React from 'react'
import "./ProfilePic.scss"

function PrfoilePic({url}) {
  return (
    <div className="p-2 d-flex justify-content-center">
      <img src={url} className="profile-pic"/>
    </div>
  )
}

export default PrfoilePic
