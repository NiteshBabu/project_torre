import React from 'react'

function Languages({languages}) {
  return (
    <div>
      <h3 className="text-center">Languages</h3>
      <div className="d-flex flex-wrap justify-content-start align-items-center">
      {
        languages.map(l =>{
          return(
            <div className="language badges bg-secondary rounded-pill text-center m-1 p-2 text-white " key={l.code}>
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
