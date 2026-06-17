import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Root } from "./routes";
import { AboutMe } from "./components/AboutMe";
import { ErrorPage } from "./components/ErrorPage";
import { Resume } from "./components/Resume";
import {Portfolio, ProjectEntry} from "./components/Portfolio"
import {Videos} from "./components/Videos"
import './index.css'

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        ErrorBoundary:ErrorPage,
        children:[
            {
                index:true,
                Component:AboutMe},
            {
                path:"resume",
                Component:Resume},
            {
                path:"portfolio",
                Component:Portfolio,
                children:[{
                    index: true,
                    element:<Navigate to="1" replace/>,
                    path:":projectId",
                    Component:ProjectEntry
                }]},
            {path:"videos", Component:Videos}
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)