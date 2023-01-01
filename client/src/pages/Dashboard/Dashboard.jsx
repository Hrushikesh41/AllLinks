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
          <a href='/socialLinks'>Social Links</a>
        </div>
        <div className='git'>
          <a href='/gitCommands'>Git Command</a>
        </div>
        <div className='npm'>
          <a href='/npmCommand'>NPM Command</a>
        </div>

      </div>
    </>
  )
}

export default Dashboard