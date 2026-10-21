import type {JSX} from "react";
import {NAME, ROLE} from "../constants/constants.ts";
import {techStack} from "../constants/techstack.ts";
import Container from "./Container.tsx";
import Calender from "./Calender.tsx";
import AboutCard from "./AboutCard.tsx";
import ConnectionPatterns from "../icons/ConnectionPatterns.tsx";

const featuredTools = ["React", "TypeScript", "Python", "FastAPI", "Docker"];
const tools = techStack.flat().filter(tool => featuredTools.includes(tool.name));

function AboutSection(): JSX.Element {
    return (
        <section id="about" className="relative mx-auto max-w-7xl space-y-8 px-4 py-14 text-home-ink sm:px-6 md:space-y-10">
            <header className="space-y-3">
                <Container className="min-h-10 text-sm font-medium text-about-accent flex justify-center items-center">
                    <span className="">About</span>
                </Container>
                <Container>
                    <h2 className="max-w-lg mx-auto text-balance text-center text-3xl font-medium leading-10 tracking-tight md:text-4xl">Here’s what sets me apart and makes me unique</h2>
                </Container>
            </header>

            <div className="grid grid-cols-2 gap-2">
                <AboutCard>
                    <div className="relative z-10 w-[58%] text-balance">
                        <h3 className="mb-4 text-base font-medium">Learn more about me</h3>
                        <p className="pr-1 text-sm leading-relaxed text-home-muted md:pr-4">Hello there!<br/>I’m {NAME}, an {ROLE.toLowerCase()} building useful software and intelligent experiences.</p>
                    </div>
                    <div className="absolute -right-1 top-3 -bottom-6.5 w-[42%]">
                        <div className="grid h-full w-full rotate-6 place-items-center rounded-[18px] border border-about-border bg-[#eeeff1] shadow-[inset_0_2px_2px_rgba(165,174,184,0.32)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                            <img className="size-20 rounded-full border-8 border-white shadow-lg" src="/favicon.svg" alt={`${NAME} monogram`}/>
                        </div>
                    </div>
                </AboutCard>

                <AboutCard>
                    <div className="absolute inset-x-0 top-0 bottom-17.5 overflow-hidden">
                        <div className="absolute left-1/2 top-7 flex h-36 w-[112%] -translate-x-1/2 items-center justify-between mt-2" aria-hidden="true">
                            <ConnectionPatterns/>
                        </div>
                        <span className="absolute left-1/2 top-11 grid size-28 -translate-x-1/2 place-items-center rounded-full border border-about-border bg-about-surface shadow-[inset_0_2px_2px_rgba(165,174,184,0.32)]"><img className="size-20 rounded-full" src="/favicon.svg" alt=""/></span>
                    </div>
                    <div className="absolute inset-x-5 bottom-6 z-10 text-center"><h3 className="text-base font-medium">Connections</h3><p className="mt-1 text-sm text-home-muted">An evolving list of people I’ve met and those I hope to meet.</p></div>
                </AboutCard>

                <AboutCard>
                    <div className="relative z-10 text-center"><h3 className="text-base font-medium">Toolbox</h3><p className="mt-1 text-sm text-home-muted">Tools I use to turn ideas into working software.</p></div>
                    <div className="absolute inset-x-3 bottom-6 flex items-center justify-center gap-2 sm:gap-3">
                        {tools.map((tool, index) => <span className={`grid ${index === 2 ? "size-25.5 sm:size-30" : "size-20.5 sm:size-25"} shrink-0 place-items-center rounded-[18px] border border-home-line bg-[#f2f3f5] p-3 transition-all duration-300 group-hover:border-about-accent/50 group-hover:-translate-y-3`} key={tool.name} title={tool.name}><img className="size-9 object-contain" src={tool.icon} alt={tool.name}/></span>)}
                    </div>
                </AboutCard>

                <AboutCard className="col-span-1 grid h-55 grid-cols-[minmax(125px,0.55fr)_1fr] gap-3">
                    <div className="relative z-10 text-balance">
                        <h3 className="mb-4 text-base font-medium">Book a call with me</h3>
                        <p className="text-sm leading-relaxed text-home-muted">I’d love to chat, even if there’s no agenda.</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-about-accent">Get in touch ↗</span>
                    </div>
                    <Calender/>
                </AboutCard>
            </div>
        </section>
    );
}

export default AboutSection;
