import React, { useEffect, useState } from 'react'
import "../Projects/Projects.css"
import Dashboard from '../Dashboard/Dashboard';
import copy from 'copy-to-clipboard';
import {HashLoader} from "react-spinners"

const Git = () => {
  const [git, setGit] = useState([]);

  const getData = async () => {
    const res = await fetch("https://alllinks-server-file.onrender.com/getgit")

    const result = await res.json();
    console.log(result.data);

    setGit(result.data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Dashboard />
      <div className='project-container'>
        {
          git.length == 0 ? <>
                        <div className='notFound'>
                        <HashLoader color="#36d7b7" size={70}/>
                        </div>
                    </> :  git.map((element, key) => {
            return (
              <>
                <div className='inner-project-container'>
                  <div className='project-link'>
                    <input type="text" value={element.gitCommand} />
                    <div className='copy-text'>
                      <i class="fa fa-files-o" onClick={() => { copy(element.gitCommand) }}></i>
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

export default Git