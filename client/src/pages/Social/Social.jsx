import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "../Projects/Projects.css"
import copy from "copy-to-clipboard";

const Social = () => {
  const [social, setSocial] = useState([])

  const getData = async () => {
    const res = await fetch("http://localhost:8080/getsocial")

    const result = await res.json();
    console.log(result.data);

    setSocial(result.data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Dashboard />
      <div className='project-container'>
        {
          social.map((element, key) => {
            return (
              <>
                <div className='inner-project-container'>
                  <div className='project-title'>
                    {element.socialPlatform}
                  </div>
                  <div className='project-link'>
                    <input type="text" value={element.socialLink} />
                    <div className='copy-text'>
                      <i class="fa fa-files-o" onClick={() => { copy(element.socialLink) }}></i>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Social