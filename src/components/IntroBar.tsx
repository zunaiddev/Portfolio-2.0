import type {JSX} from "react";
import {NAME} from "../constants/constants.ts";


function IntroBar(): JSX.Element {
    return (<div
        className="z-1 px-6 flex w-full pointer-events-none items-center justify-between text-center">
        <div className="text-start">
            <h2 className="text-accent font-geist mt-1 text-[25px]">Hello! I'm</h2>
            <h1 className="font-geist text-soft font-medium -mt-4 text-[40px]">{NAME}</h1>
        </div>

        <div className="text-start">
            <h2 className="text-accent font-geist mt-1 text-[25px]">An</h2>
            <div>
                <h2 className="text-accent uppercase font-geist relative font-semibold text-[45px] tracking-[2px] spacing after:content-[''] after:absolute after:top-1 after:left-0 after:z-3 after:w-full after:h-[90%] after:bg-[linear-gradient(0deg,var(--backgroundColor)_40%,rgba(0,0,0,0)_110%)] leading-9">
                    Software Engineer
                </h2>
                <h2 className="text-soft ml-5 font-geist relative font-semibold text-[45px] tracking-[2px] leading-13 -mt-1">
                    FULL STACK DEVELOPER
                </h2>
            </div>

        </div>
    </div>);
}

export default IntroBar;
