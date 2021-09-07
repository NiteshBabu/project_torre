import React, { useState } from 'react'
import ErrorComponent from '../../components/ErrorComponent'
import LoadingIcon from '../../components/loading/LoadingIcon'
import Profile from '../../components/profile/Profile'
import Search from '../../components/search/Search'
import "./profilePage.scss"


export default function ProfilePage({IsLoading, setIsLoading, ErrText, setErrText}) {
  const [User, setUser] = useState(null)

  return (
    <div className="profile-page mx-auto">
      <Search 
        defaultParam="Niteshbabusharma"
        type="Username"
        setIsLoading={setIsLoading}
        url="http://localhost:1234/proxy/bios"
        callback={setUser}
        setErrText={setErrText}
       />
      { ErrText && <ErrorComponent text={ErrText} />}
      {
        IsLoading ? <LoadingIcon /> : User && <Profile user={User} />
      }
    </div>
  )
}
