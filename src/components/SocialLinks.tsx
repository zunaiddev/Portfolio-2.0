import type {JSX, ReactNode} from "react";
import LinkedinIcon from "../icons/LinkedinIcon.tsx";
import {LINKS} from "../constants/constants.ts";
import GitHubIcon from "../icons/GitHubIcon.tsx";
import XIcon from "../icons/XIcon.tsx";

function SocialLinks(): JSX.Element {
    return (<section className="fixed left-6 bottom-10 space-y-4 z-99">
        <SocialLink icon={<GitHubIcon className=""/>} href={LINKS.gitHub}/>
        <SocialLink icon={<LinkedinIcon className=""/>} href={LINKS.linkedin}/>
        <SocialLink icon={<XIcon className=""/>} href={LINKS.twitter}/>
    </section>);
}

interface SocialLinksProps {
    icon: ReactNode;
    href: string;
}

function SocialLink({icon, href}: SocialLinksProps): JSX.Element {
    return (<a href={href} target="_blank" rel="noreferrer" className="block">
        {icon}
    </a>);
}

export default SocialLinks;