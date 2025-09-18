import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "@/pages/Home";
import ProjectDetails from "@/projects/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/projects/:projectRoute",
                element: <ProjectDetails/>
            }
        ]
    }
])