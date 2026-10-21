import type {JSX} from "react";
import {LINKS, NAME} from "../constants/constants.ts";
import {Link} from "react-router-dom";

function Footer(): JSX.Element {
    return (<footer id="footer" className="grid grid-cols-1 gap-10 bg-home-dark px-[7%] py-16 text-white md:grid-cols-2 md:gap-12 md:px-[max(8%,calc((100%-974px)/2))] md:py-[74px]">
        <div><p className="mb-[18px] text-[11px] font-bold uppercase tracking-[.15em] text-footer-accent">Have something in mind?</p><h2 className="mb-[23px] text-[clamp(34px,4vw,48px)] font-medium leading-[1.08] tracking-[-.055em]">Let’s make it<br/><span className="text-footer-accent">happen.</span></h2><a className="inline-flex items-center gap-6 rounded-full bg-home-background px-[17px] py-3 text-xs font-semibold text-home-dark no-underline transition-transform hover:-translate-y-0.5" href={LINKS.email}>Get in touch <span aria-hidden="true">↗</span></a></div>
        <div className="flex flex-col items-start justify-end"><Link to="#home" className="text-[19px] font-bold tracking-[-.05em] text-white no-underline">{NAME}<span className="text-footer-accent">.</span></Link><p className="text-[11px] text-white/60">AI engineer building thoughtful software.</p><div className="my-3 mb-[26px] flex gap-4"><a className="text-[11px] text-white/80 no-underline" href={LINKS.gitHub}>GitHub ↗</a><a className="text-[11px] text-white/80 no-underline" href={LINKS.linkedin}>LinkedIn ↗</a><a className="text-[11px] text-white/80 no-underline" href={LINKS.twitter}>Twitter ↗</a></div><small className="text-[10px] text-white/45">© {new Date().getFullYear()} {NAME}. Built with curiosity.</small></div>
    </footer>);
}

export default Footer;
