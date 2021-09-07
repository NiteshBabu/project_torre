import React from 'react'
import JobDetails from './job-details/JobDetails';
import JobExpectations from './job-expectations/JobExpectations';
import JobMembers from './job-members/JobMembers';

function JobItem({job}) {
  return (
    <div className="d-md-flex justify-content-center">
      <JobDetails {...job} />
      <JobExpectations {...job} />
      <JobMembers {...job} />
    </div>
  )
}

export default JobItem