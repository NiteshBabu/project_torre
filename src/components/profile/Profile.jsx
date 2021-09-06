import React from 'react'

import './Profile.scss'
import ProfileHeader from './profile-header/ProfileHeader'
import Professional from './professional/Professional'

function Profile({user={}}) {
  const {person, jobs, languages} = {...user}
  return (
    <div className="profile-container d-md-flex justify-content-center">
      <ProfileHeader person={person} />
      <Professional jobs={jobs} languages={languages} />
      <ProfileHeader person={person} />
    </div>
  )
}

export default Profile
