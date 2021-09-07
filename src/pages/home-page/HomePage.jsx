import React from 'react'
import './HomePage.scss'


function Home() {
  return (
    <div className="container  home-btn-container">
      <a href="/profile">
        <button className=" m-5 home-btn fw-bold">Find Someone</button>
      </a>
      <a href="/jobs">
        <button className=" m-5 home-btn fw-bold">Find Job</button>
      </a>
    </div>
  )
}

export default Home
