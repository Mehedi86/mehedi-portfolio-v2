import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "@/pages/Home";
import EventAura from "@/projects/EventAura";

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
                path: "/projects/eventAura",
                element: <EventAura/>
            }
        ]
    }
])