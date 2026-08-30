import type {JSX} from "react";

interface Props {
    name: string;
    to: string;
}

function HeaderItem({name, to}: Props): JSX.Element {
    return (<span>
        {name}
    </span>);
}

export default HeaderItem;