import React from 'react'
import Social from '../social/Social'
import ProfilePic from '../profile-pic/ProfilePic'

function ProfileHeader({ person }) {
  return (
    <div className="profile row col-sm-12 col-md-4 hide-scroll card">
      <div className="col-sm-12">
        {
          person.picture ?
            <ProfilePic url={person.picture} />
            :
            <i className="bi bi-person-circle text-center"></i>
        }
      </div>
        <div className="profile__details col-sm-12 text-white">
          <div className="profile__name d-flex flex-column align-items-center justify-content-between">
            <h1>{person.name}</h1>
            <h5 className="text-center">{person.professionalHeadline}</h5>
            <p className="badge rounded-pill bg-success text-center">{person.publicId}</p>
          </div>
          {
            person.location &&
            <div className="location">
              <p className="text-center border-bottom fw-bold" style={{ color: "chocolate" }}>{person.location.name}</p>
            </div>
          }
          <Social links={person.links} />
          <div className=" text-center font-monospace">
            <h5>!! Know__ME !!</h5>
            <p>{person.summaryOfBio}</p>
          </div>
        </div>
      </div>
  )
}

export default ProfileHeader
