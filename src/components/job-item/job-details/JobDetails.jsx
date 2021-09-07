import React from 'react'
import CheckedIcon from '../../../icons/CheckedIcon'

function JobDetails({ objective, tagline, serpTags, status }) {
  const { baseSalary, employmentType, description, hiringOrganization } = serpTags
  const DP = new DOMParser();

  return (
    <div className="card p-2 col-sm-12 col-md-4">
      <div className="text-center">
        <h3 className="border-bottom p-2">Job Details</h3>
        <div className="d-flex justify-content-between px-4 my-4">
          <h3>{objective}</h3>
          <CheckedIcon />
        </div>
        <div className="org">
          <div className="thumbnail-container">
            <h4>Hiring Organization</h4>
            <img className="thumbnail" src={hiringOrganization.logo}></img>
            <h5>{hiringOrganization.name}</h5>
            <h4 className={`text-small ${status === 'open' ? 'text-success' : 'text-danger'} text-uppercase`}>{status}</h4>
          </div>
        </div>
        <h5 className="py-3">{tagline}</h5>
        <div className="employment-type d-flex flex-row border-bottom justify-content-around py-2">
          <h5 className="badge rounded-pill bg-secondary">{employmentType[0]}</h5>
          <div className="pay-details">
            <h4 className="text-left">{baseSalary.value.value} {baseSalary.currency}/
              <span className="text-lowercase">
                {baseSalary.value.unitText}
              </span>
            </h4>
          </div>
        </div>
        <div className="descriptions my-2">
          <h3>Description</h3>
          <h4 className="text-justify">
            {DP.parseFromString(description, "text/html").documentElement.textContent}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
