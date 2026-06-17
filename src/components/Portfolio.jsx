import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink, Outlet, useLocation, useParams } from 'react-router'
import projects from "../data/project.json"

export function Portfolio(){    
    return(
        <>
        <h1>Portfolio</h1>
        <Outlet />
        </>

    )
}

export function ProjectEntry(){
    const {projectID} = useParams()
    const project = projects[projectID]

    // ADD THIS temporarily
    console.log("projectID from URL:", projectID)
    console.log("available keys:", Object.keys(projects))
    console.log("found project:", projects[projectID])

    if(!project){
        throw new Response("Not Found!", {status:404})
    }

    return(
        <>
        <h1>{project.full_title}</h1>
        <h3>{project.subtitle}</h3>
        <div className = "portfolioEntry">
            <ul className="portfolioFacts">
                <li><p><b>Description:</b> {project.description}</p></li>
                <li><b>Repository Link:</b> {project.repo_link}</li>
                <li></li>
                <li>
                    <b>Technologies Used:</b>
                    <ul className="techSkills">
                        {project.technologies.map((t)=>(
                            <li>
                                placeholder
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <iframe 
                className="videoPlayer" 
                width="420" 
                height="315"
                src={project.demo_link}
            ></iframe>
        </div>
        </>
    )
}