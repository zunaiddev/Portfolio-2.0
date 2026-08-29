import type {JSX} from "react";
import SkillsBackground from "./SkillsBackground.tsx";
import TechStack from "./TechStack.tsx";

function Skills(): JSX.Element {
    return (<section className="relative w-full min-h-screen py-80 overflow-hidden flex justify-center items-center">
        <SkillsBackground/>
        <div className="relative w-full max-h-250 px-5 z-2">
            <h1 className="text-7xl font-normal mb-15 bg-linear-to-b from-[#ffffff] to-[#c2a4ff] bg-clip-text text-transparent z-1 text-center ">TECH
                STACK</h1>
            <TechStack/>
        </div>
    </section>);
}

export default Skills;