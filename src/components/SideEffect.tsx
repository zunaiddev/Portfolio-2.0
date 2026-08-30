import type {JSX} from "react";

interface Props {
    className: string;
}

function SideEffect({className}: Props): JSX.Element {
    return (
        <div
            className={`fixed ${className} z-15 h-75 w-75 rounded-full bg-[#fb8dff] blur-[60px] shadow-[inset_-50px_40px_50px_#5400ff99]`}
        />
    );
}

export default SideEffect;
