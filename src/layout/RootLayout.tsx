import type {JSX} from "react";
import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.tsx";

function RootLayout(): JSX.Element {
    return (<main
        className="relative overflow-x-hidden border-x border-border-primary/50 flex min-h-screen flex-col font-sans md:max-w-7xl lg:mx-auto">
        <Header/>
        <Outlet/>
        <Footer/>


        {/*<SideEffect className="-left-70 -top-50"/>*/}
        {/*<SideEffect className="-right-70 top-1/3"/>*/}
        {/*<RightSideEffect/>*/}
        {/*<Outlet/>*/}
    </main>);
}

export default RootLayout;