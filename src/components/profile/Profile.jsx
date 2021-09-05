import React from 'react'
import PrfoilePic from '../profile-pic/PrfoilePic'
import './Profile.scss'

function Profile({user}) {
  const {person, stats}= {...user}
  return (
    <div className="profile-container ">
      <PrfoilePic url={person.picture} />
      {person.name}
    </div>
  )
}

export default Profile
