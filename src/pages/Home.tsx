import type {JSX} from "react";
import LandingPage from "../components/LandingPage.tsx";
import TechStack from "../components/TechStack.tsx";
import Experience from "../components/Experience.tsx";
import SocialLinks from "../components/SocialLinks.tsx";

function Home(): JSX.Element {
    return (<main className="w-full min-h-full bg-canvas">
        <LandingPage/>
        <Experience/>
        <TechStack/>
        <SocialLinks/>
    </main>);
}

export default Home;