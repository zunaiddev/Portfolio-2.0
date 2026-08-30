import {createBrowserRouter, Outlet} from "react-router";
import Home from "../pages/Home.tsx";
import Skills from "../components/Skills.tsx";

const Routes = createBrowserRouter([
    {
        path: "/", element: <div className="w-full min-h-screen overflow-y-auto bg-[#0B080C]">
            <Outlet/>
        </div>,
        children: [{
            path: "/",
            element: <Home/>
        }, {
            path: "/skills",
            element: <Skills/>
        }]
    }

]);

export default Routes;