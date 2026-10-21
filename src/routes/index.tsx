import {createBrowserRouter} from "react-router";
import RootLayout from "../layout/RootLayout.tsx";
import TechStack from "../components/TechStack.tsx";
import Home from "../pages/Home.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [{
            index: true,
            element: <Home/>
        },
            {
            path: "/skills",
            element: <TechStack/>
        }]
    }
]);

export default routes;