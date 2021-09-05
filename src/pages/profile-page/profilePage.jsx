import React, { useState } from 'react'
import ErrorComponent from '../../components/ErrorComponent'
import LoadingIcon from '../../components/loading/LoadingIcon'
import Profile from '../../components/profile/Profile'
import Search from '../../components/search/Search'
import "./profilePage.scss"


export default function ProfilePage() {
  const [IsLoading, setIsLoading] = useState(false)
  const [User, setUser] = useState(null)
  const [ErrText, setErrText] = useState(null)

  return (
    <div className="container">
      <Search 
        setIsLoading={setIsLoading}
        setUser={setUser}
        setErrText={setErrText}
       />
      { ErrText && <ErrorComponent />}
      {
        IsLoading ? <LoadingIcon /> : User && <Profile user={User} />
      }
    </div>
  )
}
