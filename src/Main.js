import React from 'react'
import ProfilePage from './pages/profile-page/profilePage'
import Header from './components/header/Header'
import './Main.scss'
import Footer from './components/footer/Footer'

function Main() {
  return (
    <div className=" main-container">
      <Header />
      <ProfilePage />
      <Footer />
    </div>
  )
}

export default Main
