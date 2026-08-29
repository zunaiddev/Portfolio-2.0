import type {JSX} from "react";
import type {TechStackItem} from "../types/TechStackItem.ts";

function Skill({name, url, icon}: TechStackItem): JSX.Element {
    return (<a href={url}
               target="_blank"
               rel="noopener noreferrer"
               className="techstack-item"
               title={name}
               data-cursor="disable">
        <img src={icon} alt={name} loading="lazy" decoding="async"/>
        <span>{name}</span>
    </a>);
}

export default Skill;