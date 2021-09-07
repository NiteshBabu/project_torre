import React from 'react'
import Jobs from '../jobs/Jobs'
import Languages from '../languages/Languages'
import "./Professional.scss"

function Professional({jobs, languages}) {
  return (
    <div className="col-sm-12 col-md-4 professional card">
      <Jobs jobs={jobs}/>
      <Languages languages={languages} />
    </div>
  )
}

export default Professional
