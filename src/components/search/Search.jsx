import React, { useState, useEffect } from 'react'
import SearchIcon from '../../icons/SearchIcon'
import "./Search.scss"

function Search({ callback, url, setErrText, setIsLoading, defaultParam, type }) {

  const [searchText, setSearchText] = useState(defaultParam)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      const response = await fetch(`${url}/${searchText}`)
      const data = await response.json()
      if (response.status === 200) {
        callback(data)
        setErrText(null)
        setIsLoading(false)
      }
      else {
        callback(null)
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
        <input type="search" className="text-center" placeholder={defaultParam} onChange={e => setSearchText(e.target.value)} />
      </div>
      <small className="text-white fw-bold">{`Search By ${type}`}</small>
    </div>
  )
}

export default Search
