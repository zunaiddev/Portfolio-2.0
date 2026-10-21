import type {JSX} from "react";
import Container from "../components/Container.tsx";
import {techStack} from "../constants/techstack.ts";

interface Props {

}

function Toolbox(): JSX.Element {
    return (<section>

            <Container>
                <h2 className="max-w-lg mx-auto text-balance text-center text-3xl font-medium leading-10 tracking-tight md:text-4xl">Hardware && software I keep in my toolbox.</h2>
            </Container>

        <Container>
            <p>Applications</p>
        </Container>

        <Container className="relative grid grid-cols-3 place-items-center md:grid-cols-4 lg:grid-cols-8 lg:gap-6 p-7">
            {techStack.map(item => <Tool text={item.name} href={item.url} icon={item.icon}/>)}
        </Container>
    </section>);
}

interface ToolProps {
    text: string;
    href: string;
    icon: string
}

function Tool({text, href, icon}: ToolProps){
    return <a href={href} target="_blank" rel="noopener noreferrer"
              className="group no-underline transition-all duration-500 group-hover:-translate-y-3">
        <div className="group inline-block text-center">
            <div
                className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                     style={{boxShadow: "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset"}}>
                    <img className="h-10 w-10" alt={text} src={icon}/>
                </div>
            </div>
            <p className="mt-3 text-sm text-gray-500">{text}</p>
        </div>
    </a>
}

export default Toolbox;