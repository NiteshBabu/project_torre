import React from 'react'

import './Profile.scss'
import ProfileHeader from './profile-header/ProfileHeader'
import Professional from './professional/Professional'
import Skills from './skills/Skills'

function Profile({user={}}) {
  const {person, jobs, languages, strengths, interests, experiences, education} = user
  return (
    <div className="profile-container d-md-flex justify-content-center">
      <ProfileHeader person={person} />
      <Professional jobs={jobs} languages={languages} />
      <Skills strengths={strengths} interests={interests} experiences={experiences} education={education}/>
    </div>
  )
}

export default Profile
