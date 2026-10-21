import type {JSX, ReactNode} from "react";
import HoverEffect from "./HoverEffect.tsx";
import Arrow from "./Arrow.tsx";
import {twMerge} from "tailwind-merge";
import {Link} from "react-router-dom";

interface Props {
    to: string;
    children: ReactNode;
    className?: string;
}

function AboutCard({to, children, className}: Props): JSX.Element {
    return (<Link to={to} className={twMerge("group relative col-span-1 h-75 overflow-hidden rounded-2xl border border-home-line bg-about-surface p-6 transition-colors hover:bg-white", className)}>
        <HoverEffect/>
        <Arrow/>

        {children}
    </Link>);
}

export default AboutCard;