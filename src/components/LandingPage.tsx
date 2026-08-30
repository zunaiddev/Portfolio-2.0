import type {JSX} from "react";
import Avatar from "./Avatar.tsx";
import AskMeInput from "./AskMeInput.tsx";
import IntroBar from "./IntroBar.tsx";
import {NAME} from "../constants/constants.ts";

function LandingPage(): JSX.Element {
    return (
        <div className="relative min-h-screen w-full flex flex-col pt-30 items-center">
            <IntroBar/>
            <Avatar/>
            <AskMeInput/>

            <div
                className="hidden absolute bottom-0 bg-linear-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]">
                {NAME}
            </div>
        </div>
    );

}

export default LandingPage;