import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
      <div className='container'>
        <div className='project'>
          <a href='/projectsLink'>Projects</a>
        </div>
        <div className='social'>
          <a href='/socialLinks'>Social</a>
        </div>
        <div className='git'>
          <a href='/gitCommands'>Git</a>
        </div>
        <div className='npm'>
          <a href='/npmCommand'>NPM</a>
        </div>

      </div>
    </>
  )
}

export default Dashboard