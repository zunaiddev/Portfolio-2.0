import type {JSX} from "react";

function Header(): JSX.Element {
    return (
        <header
            className="fixed z-50 left-3 top-2 right-3 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/4 border border-white/8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_4px_24px_rgba(0,0,0,0.25)] flex items-center justify-between">
            <div className="text-3xl font-bold flex select-none">
                <h1 className="text-accent">Z</h1>
                <h1 className="text-soft">U</h1>
            </div>

            <div className="flex gap-5">
                <HeaderItem text="Home"/>
                <HeaderItem text="About"/>
                <HeaderItem text="Skills"/>
                <HeaderItem text="Contact"/>
            </div>
        </header>
    );
}

interface HeaderProps {
    text: string;
}

function HeaderItem({text}: HeaderProps): JSX.Element {
    return (
        <div
            className="group relative flex flex-col overflow-hidden h-7 text-lg font-medium text-soft cursor-pointer select-none"
            aria-label={text}
        >
            <div className="flex" aria-hidden="true">
                {text.split("").map((val, idx) => (
                    <span
                        key={idx}
                        className="flex items-center h-7 transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
                        style={{transitionDelay: `${idx * 25}ms`}}
                    >
                        {val}
                    </span>
                ))}
            </div>

            <div className="flex" aria-hidden="true">
                {text.split("").map((val: string, idx: number): JSX.Element => (
                    <span
                        key={idx}
                        className="flex items-center h-7 transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
                        style={{transitionDelay: `${idx * 25}ms`}}
                    >
                        {val}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Header;