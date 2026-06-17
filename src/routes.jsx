import { NavLink,Link,Outlet,useNavigate,useParams,useRouteError, useMatch, useLocation } from "react-router";
import { Portfolio } from "./components/Portfolio";
import projects from "./data/project.json"

export function Root(props){
    return(
        <>
        <div className="site">
            <header className="NavBar">
                <TopBar/>
            </header>
        </div>
        <div className="body">
            <SideBar/>
            <main className="main"><Outlet/></main>
        </div>
        <footer>
            <GitHubFooter/>
        </footer>
        </>
    )
}

export function TopBar(){
    return(
        <nav className ="topBar">
            <ul className="topBarList">
                <li>
                    <NavLink to="/" className="topLink siteTitle">Max Baker</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" className="topLink">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className="topLink">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/videos" className="topLink"> Videos</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export function GitHubFooter(){
    return(
        <div className="footer">
            <p>(c) 2026 Max Baker, the source code for this site is available on <a href="https://github.com/Crimson-Ender/personal-website">Github</a></p>
        </div>
    )
}

export function SideBar(){
    const {pathname} = useLocation()
    
    let category = null
    let basePath=""
    let labelKey=""

    if(pathname.startsWith("/portfolio")){
        category = Object.entries(projects)
        basePath= "/portfolio"
        labelKey="short_title"
    }
    
    if(!category) return null;

    return(
        <aside className="sidebar">
            <ul className="sideBarList">
            {category.map(([id,item])=>(
                <li key={id}>
                    <NavLink
                    to={`${basePath}/${id}`}
                    className="sideLink">
                        {item[labelKey]}
                    </NavLink>
                </li>
            ))}
            </ul>
        </aside>
    )

}