import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Root } from "./routes";
import { AboutMe } from "./components/AboutMe";
import { ErrorPage } from "./components/ErrorPage";
import { Resume } from "./components/Resume";

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        ErrorBoundary:ErrorPage,
        children:[
            {
                index:true,
                Component:AboutMe
            },
            {
                path:"resume",
                Component:Resume
            } 
        ]
    }
])