import { Outlet, useParams } from "react-router";
import projects from "../data/project.json"

export function Portfolio(){
    const projects = projects
        
    
    return(
        <>
        <h1>Portfolio</h1>
        <h2>This page is a work in progress, please come back later</h2>
        <Outlet />
        </>

    )
}

export function ProjectEntry(){
    const {projectID} = useParams()
    const project = project

    if(!project){
        throw new Response("Not Found!", {status:404})
    }

    return(
        <>
        <h1>{project.full_title}</h1>
        <ul className=""></ul>
        </>
    )
}