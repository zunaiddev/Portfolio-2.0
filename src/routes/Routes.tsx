import {createBrowserRouter} from "react-router";
import HomeLayout from "../layout/HomeLayout.tsx";
import Home from "../pages/Home.tsx";
import TechStack from "../components/TechStack.tsx";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [{
            path: "/",
            element: <Home/>
        }, {
            path: "/skills",
            element: <TechStack/>
        }]
    }

]);

export default Routes;