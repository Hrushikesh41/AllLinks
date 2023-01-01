import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "./Projects.css"
import copy from "copy-to-clipboard";

const Projects = () => {

    const [project, setProject] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:8080/getprojects")

        const result = await res.json();
        console.log(result.data);

        setProject(result.data)
    }

    const handleClick = () => {
        alert("Text Copied");
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Dashboard />
            <div className='project-container'>
                {
                    project.map((element, key) => {
                        return (
                            <>
                                <div className='inner-project-container'>
                                    <div className='project-title'>
                                        {element.projectName}
                                    </div>
                                    <div className='project-link'>
                                        <input type="text" value={element.projectLink} />
                                        <div className='copy-text'>
                                            <i class="fa fa-files-o" onClick={()=>{copy(element.projectLink)}}></i>
                                        </div>
                                    </div>
                                    <div className='project-repo-link'>
                                        <input type="text" value={element.projectRepo}  />
                                        <div className='copy-text'>
                                            <i class="fa fa-files-o" onClick={()=>{copy(element.projectRepo)}}></i>
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

export default Projects