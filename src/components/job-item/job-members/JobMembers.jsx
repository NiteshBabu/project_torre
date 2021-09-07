import React from 'react'
import './JobMembers.scss'

function JobMembers({ members }) {
  return (
    <div className="card col-sm-12 col-md-4">
      <h3 className="text-center border-bottom p-2">Members</h3>
      {
        members.map(member => {
          return (
            <div class="member-container p-2 border-bottom">
              <div className="d-flex flex-row justify-content-between align-items-center py-2 px-4">
                <div className="thumbnail-container">
                  <img className="thumbnail" src={member.person.pictureThumbnail}></img>
                </div>
                <div className="d-flex flex-column justify-content-between align-items-center py-2 px-4">
                  <h5>{member.person.name}</h5>
                  <h6 className="badge rounded-pill bg-success">{member.person.username}</h6>
                </div>
              </div>
              <div className="job-profile text-center">
                <h5 className="text-warning">Job Profile</h5>
                <h5 className="text-small px-3">{member.person.professionalHeadline}</h5>
              </div>
            </div>

          )
        })
      }
    </div>
  )
}

export default JobMembers
