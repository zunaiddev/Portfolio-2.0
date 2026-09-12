import {type JSX, useEffect, useState} from "react";

const HEADER_GLASS_CSS =
    "backdrop-blur-xl bg-white/[0.04] border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.3)]";

const NAV_ITEMS = [
    { text: "Home", href: "#" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Contact", href: "#contact" },
];

function Header(): JSX.Element {
    const [showGlassEffect, setShowGlassEffect] = useState<boolean>(false);
    const [mounted] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowGlassEffect(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed z-50 left-1/2 -translate-x-1/2 flex items-center justify-between border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"} ${showGlassEffect ? `top-3.5 w-[92%] py-2 px-6 rounded-2xl ${HEADER_GLASS_CSS}` : "top-2 w-[calc(100%-1.5rem)] py-3.5 px-8 rounded-2xl border-transparent bg-transparent shadow-none"
            }`}
        >
            <a
                href="#"
                className="group/logo text-2xl lg:text-3xl font-bold flex items-center select-none cursor-pointer tracking-wider transition-all duration-300 hover:scale-105"
            >
                <span className="text-accent transition-transform duration-300 group-hover/logo:-translate-y-0.5 group-hover/logo:-rotate-6 inline-block drop-shadow-[0_0_10px_rgba(194,164,255,0.5)]">
                    Z
                </span>
                <span className="text-soft transition-transform duration-300 group-hover/logo:translate-y-0.5 group-hover/logo:rotate-6 inline-block">
                    U
                </span>
            </a>

            {/* Navigation */}
            <nav className="flex items-center gap-5 sm:gap-6">
                {NAV_ITEMS.map((item, index) => (
                    <HeaderItem
                        key={item.text}
                        text={item.text}
                        href={item.href}
                        delay={index * 100}
                    />
                ))}
            </nav>
        </header>
    );
}

interface HeaderItemProps {
    text: string;
    href?: string;
    delay?: number;
}

function HeaderItem({text, href = "#", delay = 0}: HeaderItemProps): JSX.Element {
    return (
        <a
            href={href}
            className="group relative flex flex-col overflow-hidden h-7 text-sm sm:text-base lg:text-lg font-medium cursor-pointer select-none py-0.5"
            aria-label={text}
            style={{animationDelay: `${delay}ms`}}
        >
            <div className="flex text-soft transition-colors duration-300 group-hover:text-accent" aria-hidden="true">
                {text.split("").map((val, idx) => (
                    <span
                        key={idx}
                        className="flex items-center h-6 transition-transform duration-300 ease-out group-hover:-translate-y-full"
                        style={{transitionDelay: `${idx * 25}ms`}}
                    >
                        {val === " " ? "\u00A0" : val}
                    </span>
                ))}
            </div>

            {/* Hover roll-up text with accent color glow */}
            <div className="flex text-accent" aria-hidden="true">
                {text.split("").map((val, idx) => (
                    <span
                        key={idx}
                        className="flex items-center h-6 transition-transform duration-300 ease-out group-hover:-translate-y-full"
                        style={{transitionDelay: `${idx * 25}ms`}}
                    >
                        {val === " " ? "\u00A0" : val}
                    </span>
                ))}
            </div>
        </a>
    );
}

export default Header;
