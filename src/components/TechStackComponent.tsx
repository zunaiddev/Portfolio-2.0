import type {JSX} from "react";
import {techStack} from "../constants/techstack.ts";
import Skill from "./Skill.tsx";

function TechStackComponent(): JSX.Element {
    return (<div className="flex flex-col items-center gap-3">
        {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2.5 flex-wrap">
                {row.map((tech, techIndex) => <Skill key={techIndex} name={tech.name} icon={tech.icon}
                                                     url={tech.url}/>)}
            </div>
        ))}
    </div>);
}

export default TechStackComponent;