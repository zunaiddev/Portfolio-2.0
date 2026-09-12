import type {JSX} from "react";

interface Props {
    name: string;
    to?: string;
}

function HeaderItem({name, to}: Props): JSX.Element {
    return (
        <span data-to={to}>
            {name}
        </span>
    );
}

export default HeaderItem;
