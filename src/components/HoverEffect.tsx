import type {JSX} from "react";

function HoverEffect(): JSX.Element {
    return (<span className="pointer-events-none absolute inset-0 z-10 bg-linear-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"/>);
}

export default HoverEffect;