import React, { useState } from 'react'
import LoadingIcon from '../components/loading/LoadingIcon'
import Profile from '../components/profile/Profile'
import Search from '../components/search/Search'
import "./profilePage.scss"


export default function ProfilePage() {
  const [IsLoading, setIsLoading] = useState(false)
  const [User, setUser] = useState(null)
  const [ErrText, setErrText] = useState(null)

  return (
    <div className="container bg-secondary">
      <Search 
        setIsLoading={setIsLoading}
        setUser={setUser}
        setErrText={setErrText}
       />
      { ErrText && ErrText}
      {
        IsLoading ? <LoadingIcon /> : User && <Profile user={User} />
      }
    </div>
  )
}
