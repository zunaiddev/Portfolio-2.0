import type {JSX} from "react";

function Arrow(): JSX.Element {
    return ( <span className="absolute bottom-4 right-4 z-20 grid size-9 translate-y-2 rotate-6 place-items-center rounded-full bg-home-accent-soft text-xl text-about-accent opacity-0 transition-all group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100" aria-hidden="true">↗</span>);
}

export default Arrow;