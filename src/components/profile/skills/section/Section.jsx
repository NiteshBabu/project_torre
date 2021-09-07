import React from 'react'

function Section({ title, items }) {
  return (
    <div className="border-bottom">
      <h3 className="text-center mb-3 mt-2">{title}</h3>
      <div className="m-2 d-flex flex-wrap justify-content-center">
        {items.map((item) => {
          return (
            <div className="pill badge rounded-pill bg-secondary m-1">
              <span className="text-capitalize text-small fw-bold">{item.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section
