import React from 'react'

function ErrorComponent({text}) {
  return (
    <div class="text-danger text-center" >
      <p className="h5">{text}</p>
    </div>
  )
}

export default ErrorComponent
