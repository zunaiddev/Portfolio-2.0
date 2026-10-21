import type {JSX, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    children: ReactNode;
    className?: string;
}

function Container({className, children}: Props): JSX.Element {
    return (<div className={twMerge("w-full border-y border-header-border", className)}>
        {children}
    </div>);
}

export default Container;