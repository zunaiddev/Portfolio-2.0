import type {JSX} from "react";
import LandingPage from "../components/LandingPage.tsx";
import TeckStack from "../components/TeckStack.tsx";

function Home(): JSX.Element {
    return (<main className="w-full h-full bg-canvas">
        <LandingPage/>
        <TeckStack/>
    </main>);
}

export default Home;