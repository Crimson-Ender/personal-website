import { NavLink,Link,Outlet,useNavigate,useParams,useRouteError, useMatch, useLocation } from "react-router";

export function Root(props){
    return(
        <>
        <div className="site">
            <header className="NavBar">
                <TopBar/>
            </header>
        </div>
        <div className="body">
            <main className="main"><Outlet/></main>
        </div>
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

