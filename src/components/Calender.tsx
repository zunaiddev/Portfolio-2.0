import type {JSX} from "react";


function Calender(): JSX.Element {
    return (<div className="mt-1 min-w-0 translate-y-3 rounded-t-[14px] border border-home-line bg-[#f0f1f3] p-3 shadow-[inset_0_2px_2px_rgba(165,174,184,0.32)] transition-all duration-500 group-hover:translate-y-1 group-hover:border-about-accent/40" aria-hidden="true">
        <div className="flex justify-between gap-2 text-[10px] text-[#666c78]"><b>Let’s find a time</b><span className="whitespace-nowrap text-[#9298a3]">30 min chat</span></div>
        <div className="mt-3 grid grid-cols-7 justify-items-center gap-1 text-[8px] text-[#9299a5]">{["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(day => <span key={day}>{day}</span>)}</div>
        <div className="mt-1 grid grid-cols-7 justify-items-center gap-1 text-[9px] text-[#707784]">{Array.from({length: 35}, (_, index) => <span className={`grid size-5 place-items-center rounded ${[7, 10, 18, 23, 27].includes(index) ? "bg-white" : ""}`} key={index}>{index < 3 || index - 2 > 31 ? "" : index - 2}</span>)}</div>
        <p className="mt-1 text-center text-[8px] text-about-accent">Contact me to arrange a time</p>
    </div>);
}

export default Calender;