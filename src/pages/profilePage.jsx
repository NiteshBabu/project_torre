import React, { useState } from 'react'
import Search from '../components/search/Search'
import "./profilePage.scss"

export default function ProfilePage() {
  const [IsLoading, setIsLoading] = useState(false)
  const [User, setUser] = useState(null)
  const [ErrText, setErrText] = useState(null)

  return (
    <div className="container bg-success">
      <Search 
        setIsLoading={setIsLoading}
        setUser={setUser}
        setErrText={setErrText}
       />
      {
      }
    </div>
  )
}
