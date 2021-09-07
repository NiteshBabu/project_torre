import React from 'react'

function JobExpectations({ strengths, details}) {
  const DP = new DOMParser();

  return (
    <div className="card py-2 col-sm-12 col-md-4">
      <div className="text-center border-bottom">
          <h3>Expectations</h3>
      </div>
      <div className="text-capitalize d-flex flex-row justify-content-center flex-wrap py-2">
      {
        strengths.map(( item )=>{
          return(
              <h5 className="badge rounded-pill bg-secondary p-1 m-1">
                {item.name} | {item.proficiency ? item.proficiency : "*"}
              </h5>
          )
        })
      }
      </div>
      <div className="responsibilities my-2">
        <div className="text-center text-capitalize border-bottom">
            <h3>{details[0].code}</h3>
        </div>
        <h4 className="p-3">
          {
            DP.parseFromString(details[0].content, 'text/html').documentElement.textContent
          }
          </h4>
      </div>
    </div>
  )
}

export default JobExpectations
