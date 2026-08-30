import type {JSX} from "react";
import {NAME, ROLE} from "../constants/constants.ts";


function IntroBar(): JSX.Element {
    return (<div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12 opacity-100 transform-none">
        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">Hey, I'm {NAME}</h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">{ROLE}</h1>
    </div>);
}

export default IntroBar;