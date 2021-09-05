import React from 'react'
import loadingIcon from "./loading.gif";
import './LoadingIcon.scss'

function LoadingIcon() {
  return (
    <div className='d-flex loading-wrapper'>
      <img className='loading-icon m-auto' src={loadingIcon} />
    </div>
  )
}

export default LoadingIcon
