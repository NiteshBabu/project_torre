import React, { useState } from 'react'
import ErrorComponent from '../../components/ErrorComponent'
import JobItem from '../../components/job-item/JobItem'
import LoadingIcon from '../../components/loading/LoadingIcon'
import Search from '../../components/search/Search'


function JobsPage({ IsLoading, setIsLoading, ErrText, setErrText}) {
  const [Job, setJob] = useState(null)
  return (
    <div className="jobs-page mx-auto">
      <Search
        defaultParam="PW90Gvpr"
        type="JobId"
        setIsLoading={setIsLoading}
        url="/proxy/jobs"
        callback={setJob}
        setErrText={setErrText}
      />
      {ErrText && <ErrorComponent text={ErrText} />}
      {
        IsLoading ? <LoadingIcon /> : Job && <JobItem job={Job} />
      }
    </div>
  )
}
export default JobsPage
