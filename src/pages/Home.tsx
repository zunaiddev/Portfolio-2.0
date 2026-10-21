import type {JSX} from "react";
import {LINKS, NAME, ROLE} from "../constants/constants.ts";
import AboutSection from "../components/AboutSection.tsx";

function Home(): JSX.Element {
    return (
        <div className="overflow-hidden bg-home-background font-geist text-home-ink">
            <section id="home" className="relative mx-auto grid min-h-[610px] max-w-7xl grid-cols-1 items-center gap-5 px-[7%] py-[70px] md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-[8%] md:py-[78px]">
                <div className="order-last relative z-10 md:order-none">
                    <h1 className="my-[22px] text-[42px] font-semibold leading-[1.03] tracking-[-.065em] sm:text-[clamp(42px,5.4vw,68px)]">Hey, I’m {NAME}<span className="text-home-accent">.</span><br/><span className="text-home-ink">Welcome to my corner of the internet.</span></h1>
                    <p className="m-0 max-w-[490px] text-base leading-[1.8] text-home-muted">I’m an {ROLE.toLowerCase()} who likes building useful things at the intersection of intelligent systems and thoughtful design.</p>
                    <div className="mt-[27px] flex flex-wrap gap-[11px]">
                        <a className="inline-flex items-center gap-6 rounded-full bg-home-dark px-[17px] py-3 text-xs font-semibold text-white no-underline shadow-[0_8px_18px_rgba(36,36,42,0.12)] transition-transform hover:-translate-y-0.5" href="#about">Explore my work <span aria-hidden="true">↘</span></a>
                        <a className="inline-flex items-center gap-6 rounded-full border border-home-line bg-white px-[17px] py-3 text-xs font-semibold text-home-ink no-underline transition-transform hover:-translate-y-0.5" href={LINKS.email}>Say hello <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
                <div className="relative order-first grid aspect-square w-[min(72vw,300px)] place-items-center justify-self-center md:order-none md:w-[min(100%,390px)]" aria-label={`${NAME}, ${ROLE}`}>
                    <div className="absolute inset-[9%] rotate-[-23deg] scale-y-[.76] rounded-full border border-home-accent/20"/>
                    <div className="absolute inset-[2%_16%] rotate-[42deg] scale-y-[.75] rounded-full border border-[#202b3c]/[.12]"/>
                    <div className="relative flex aspect-square w-[54%] flex-col items-center justify-center rounded-full border border-home-accent/25 bg-[radial-gradient(circle_at_35%_25%,#fff_0%,#f1ecfa_52%,#e0d6f2_100%)] shadow-[0_30px_80px_rgba(128,85,216,0.15),inset_0_0_30px_#fff]">
                        <span className="text-[80px] font-medium leading-[.95] tracking-[-.08em] text-home-accent md:text-[100px]">{NAME.slice(0, 1)}</span>
                        <small className="mt-2 text-[10px] uppercase tracking-[.13em] text-home-muted">{ROLE}</small>
                    </div>
                    <span className="absolute right-[12%] top-[19%] grid size-[42px] place-items-center rounded-[14px] border border-home-line bg-white text-[13px] font-bold text-home-accent shadow-[0_9px_22px_rgba(37,33,46,0.07)]">AI</span>
                    <span className="absolute left-[8%] top-[48%] grid size-[42px] place-items-center rounded-[14px] border border-home-line bg-white text-[13px] font-bold text-home-accent shadow-[0_9px_22px_rgba(37,33,46,0.07)]">&lt;/&gt;</span>
                    <span className="absolute bottom-[10%] right-[23%] grid size-[42px] place-items-center rounded-[14px] border border-home-line bg-white text-[21px] font-bold text-home-accent shadow-[0_9px_22px_rgba(37,33,46,0.07)]">✳</span>
                </div>
                <a className="absolute bottom-[35px] left-[7%] inline-flex items-center gap-2.5 text-[11px] text-home-muted no-underline md:bottom-[25px] md:left-[8%]" href="#about"><span className="h-px w-6 bg-home-accent"/>Scroll to explore</a>
            </section>

            <AboutSection/>




        </div>
    );
}

export default Home;
