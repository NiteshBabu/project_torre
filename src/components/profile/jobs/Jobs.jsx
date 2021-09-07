import React from 'react'

function Jobs({ jobs }) {
  return (
    <div className="col-sm-12 mb-5">
      <h3 className="text-center p-2">Jobs</h3>
      {
        jobs.map(job => {
          return (
            <div className="jobs border-bottom p-2" key={job.id}>
              <h5>{job.name}</h5>
              {job.organizations.map(o => {
                return (
                  <div className="organisation d-flex my-1 p-1 justify-content-between align-items-center text-light" key={o.id}>
                    <img src={o.picture} style={{width : "40px", height : "40px", borderRadius : "50%"}} alt="company"/>
                    <small className="fw-bold">{o.name}</small>
                    <small>From - {`${job.fromMonth}-${job.fromYear}`}</small>
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </div>
  )
}

export default Jobs

