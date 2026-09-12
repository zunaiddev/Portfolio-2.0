import type {JSX} from "react";

function SkillsBackground(): JSX.Element {
    return (<div className="absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted
               playsInline className="w-full h-full z-0 object-cover">
            <source src="/techstack-video.webm" type="video/webm"/>
        </video>
        <div className="absolute top-0 left-0 w-full h-full z-1 bg-gray-950/60"></div>
    </div>);
}

export default SkillsBackground;