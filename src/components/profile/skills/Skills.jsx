import React from 'react'
import Section from './section/Section'

function Skills({strengths, interests, experiences, education}) {
  return (
    <div className="card col-sm-12 col-md-4 py-2">
      <Section items={experiences} title="Experiences"/>
      <Section items={strengths} title="Strengths"/>
      <Section items={interests} title="Interests"/>
      <Section items={education} title="Education"/>
    </div>
  )
}

export default Skills
