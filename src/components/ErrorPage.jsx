import { NavLink } from "react-router";

export function ErrorPage(){
    return(
        <>
        <h1>
            404 Error!
        </h1>
        <h2>
            That page does not exist!
        </h2>
        <NavLink to="/">Return home</NavLink>

        <br/>

        <p>If something is not working as it should, please <a href="mailto:crimsonender99@gmail.com"> let me know.</a> -MB</p>
        </>
    )
}