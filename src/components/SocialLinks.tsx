import type {JSX} from "react";
import LinkedinIcon from "../icons/LinkedinIcon.tsx";
import {LINKS} from "../constants/constants.ts";
import GitHubIIcon from "../icons/GitHubIIcon.tsx";
import XIcon from "../icons/XIcon.tsx";

function SocialLinks(): JSX.Element {
    return (<section className="fixed left-0 bottom-0 bg-green-800 space-y-4">
        <SocialLink icon={<LinkedinIcon/>} href={LINKS.linkedin}/>
        <SocialLink icon={<GitHubIIcon/>} href={LINKS.gitHub}/>
        <SocialLink icon={<XIcon/>} href={LINKS.twitter}/>
    </section>);
}

interface SocialLinksProps {
    icon: JSX.Element;
    href: string;
}

function SocialLink({icon, href}: SocialLinksProps): JSX.Element {
    return (<a href={href} target="_blank" className="block">
        {icon}
    </a>);
}

export default SocialLinks;