import type {JSX, ReactNode} from "react";
import LinkedinIcon from "../icons/LinkedinIcon.tsx";
import {LINKS} from "../constants/constants.ts";
import GitHubIcon from "../icons/GitHubIcon.tsx";
import XIcon from "../icons/XIcon.tsx";

function SocialLinks(): JSX.Element {
    return (<div className="flex h-9 items-center gap-2 rounded-full bg-header-social-background px-3">
       <SocialLink text="Twitter" icon={<XIcon/>} href={LINKS.twitter}/>
       <SocialLink text="Linkedin" icon={<LinkedinIcon/>} href={LINKS.linkedin}/>
       <SocialLink text="Github" icon={<GitHubIcon/>} href={LINKS.gitHub}/>
    </div>);
}

interface SocialLinksProps {
    text: string;
    icon: ReactNode;
    href: string;
}

function SocialLink({text, icon, href}: SocialLinksProps): JSX.Element {
    return (<a className="flex items-center justify-center" aria-label={text} href={href}>
        {icon} <span className="sr-only">{text}</span>
    </a>);
}

export default SocialLinks;
