import React from 'react'
import ProfilePage from './pages/profile-page/profilePage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Routes from './routes'

import './Main.scss'

function Main() {
	return (
      <div className="main-container">
        <Header />
          <Routes />
        <Footer />
      </div>
	)
}

export default Main
