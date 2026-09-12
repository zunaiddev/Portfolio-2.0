import type {JSX} from "react";
import {Outlet} from "react-router";
import Header from "../components/Header.tsx";

function HomeLayout(): JSX.Element {
    return (<div className="relative w-full h-screen">
        <Header/>
        {/*<SideEffect className="-left-70 -top-50"/>*/}
        {/*<SideEffect className="-right-70 top-1/3"/>*/}
        {/*<RightSideEffect/>*/}
        <Outlet/>
    </div>);
}

export default HomeLayout;