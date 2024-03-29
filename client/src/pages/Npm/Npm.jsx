import React, { useEffect, useState } from 'react'
import "../Projects/Projects.css"
import Dashboard from '../Dashboard/Dashboard';
import copy from 'copy-to-clipboard';
import { HashLoader } from 'react-spinners';

const Npm = () => {
  const [npm, setNpm] = useState([]);

  const getData = async () => {
    const res = await fetch("https://alllinks-server-file.onrender.com/getnpm")

    const result = await res.json();
    console.log(result.data);

    setNpm(result.data)
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Dashboard />
      <div className='project-container'>
        {
          npm.length == 0 ? <>
                        <div className='notFound'>
                        <HashLoader color="#36d7b7" size={70}/>
                        </div>
                    </> : npm.map((element, key) => {
            return (
              <>
                <div className='inner-project-container'>
                  <div className='project-link'>
                    <input type="text" value={element.npmCommand} />
                    <div className='copy-text'>
                      <i class="fa fa-files-o" onClick={() => { copy(element.npmCommand) }}></i>
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

export default Npm