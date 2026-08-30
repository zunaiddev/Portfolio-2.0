import {createBrowserRouter} from "react-router";
import HomeLayout from "../layout/HomeLayout.tsx";
import Home from "../pages/Home.tsx";
import TeckStack from "../components/TeckStack.tsx";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [{
            path: "/",
            element: <Home/>
        }, {
            path: "/skills",
            element: <TeckStack/>
        }]
    }

]);

export default Routes;