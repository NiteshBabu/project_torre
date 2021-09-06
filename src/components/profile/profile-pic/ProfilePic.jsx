import React from 'react'
import "./ProfilePic.scss"

function ProfilePic({url}) {
  return (
    <div className="p-2 d-flex justify-content-center">
      <img src={url} className="profile-pic" alt="profile-pic"/>
    </div>
  )
}

export default ProfilePic
