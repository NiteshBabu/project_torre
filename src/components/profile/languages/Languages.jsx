import React from 'react'

function Languages({languages}) {
  return (
    <div>
      <h3 className="text-center">Languages</h3>
      <div className="d-flex flex-wrap justify-content-start align-items-center p-2">
      {
        languages.map(l =>{
          return(
            <div className="language badges bg-secondary rounded-pill text-center p-2 m-1 text-white " key={l.code}>
              <p className="capitalize m-auto" style={{fontSize : "13px"}}>{l.language} - {l.fluency}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Languages
