import React, { useState, useEffect } from 'react'
import SearchIcon from '../../icons/SearchIcon'
import "./Search.scss"

function Search({ setUser, setErrText, setIsLoading }) {

  const [searchText, setSearchText] = useState("Niteshbabusharma")

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const response = await fetch(`http://localhost:1234/proxy/${searchText}`)
      const data = await response.json()
      if (response.status === 200) {
        setUser(data)
        setErrText(null)
        setIsLoading(false)
      }
      else {
        setUser(null)
        setErrText(data.message)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [searchText])

  return (
    <div className="col-sm-12 text-center p-4">
      <div className="search-wrapper">
        <SearchIcon />
        <input type="search" className="text-center" placeholder="niteshbabusharma" onChange={e => setSearchText(e.target.value)} />
      </div>
      <small className="text-white fw-bold">Search By Username</small>
    </div>
  )
}

export default Search
