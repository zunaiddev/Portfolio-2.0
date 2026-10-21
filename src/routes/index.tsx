import {createBrowserRouter} from "react-router";
import RootLayout from "../layout/RootLayout.tsx";
import Home from "../pages/Home.tsx";
import Toolbox from "../pages/Toolbox.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [{
            index: true,
            element: <Home/>
        },
            {
            path: "/toolbox",
            element: <Toolbox/>
        }]
    }
]);

export default routes;