import {type JSX} from "react";
import {Link} from "react-router-dom";
import SocialLinks from "./SocialLinks.tsx";

const NAV_ITEMS = [
    {text: "Home", to: "#"},
    {text: "About", to: "#about"},
    {text: "Blog", to: "#writing"},
    {text: "Projects", to: "#experience"},
    {text: "Speaking", to: "#contact"},
    {text: "Toolbox", to: "#toolbox"},
];

function Header(): JSX.Element {
    return (
        <header className="relative flex h-16 w-full shrink-0 items-center justify-between border-b border-header-border bg-header-background px-4 sm:px-5">
            <Link to="#" aria-label="Home" className="flex h-9 w-9 items-center justify-center text-header-logo">
                <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className="h-7 w-7">
                    <path d="M10.2 5.3 20 15.1a4.2 4.2 0 0 1-5.9 5.9l-6.7-6.7a2.8 2.8 0 0 1 4-4l5.8 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m17.8 22.7-9.8-9.8a4.2 4.2 0 0 1 5.9-5.9l6.7 6.7a2.8 2.8 0 0 1-4 4l-5.8-5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Link>

            <nav aria-label="Main navigation" className="absolute left-1/2 max-w-[calc(100%-9rem)] -translate-x-1/2 overflow-x-auto rounded-full border border-header-nav-border px-3 sm:px-5">
                <ul className="flex h-9 w-max items-center gap-3 text-sm sm:gap-4">
                    {NAV_ITEMS.map(item => <HeaderItem key={item.text} text={item.text} to={item.to}/>) }
                </ul>
            </nav>

            <SocialLinks/>
        </header>
    );
}

interface HeaderItemProps {
    text: string;
    to: string;
}

function HeaderItem({text, to}: HeaderItemProps): JSX.Element {
    return (
        <li className="shrink-0">
            <Link className="font-medium text-header-link transition-colors hover:text-header-link-hover" to={to}>{text}</Link>
        </li>
    );
}

export default Header;
