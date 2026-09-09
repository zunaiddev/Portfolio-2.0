import type {JSX} from "react";

interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    location: string;
    type: string;
    description: string;
    achievements: string[];
    skills: string[];
    featured?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
    {
        id: "ai-engineer",
        role: "AI & Full Stack Engineer",
        company: "Independent / Stealth",
        period: "2024 — Present",
        location: "Remote",
        type: "Full-time",
        featured: true,
        description:
            "Architecting and shipping end-to-end AI-powered web applications, integrating LLM workflows, custom agent architectures, and high-performance backend microservices.",
        achievements: [
            "Engineered intelligent autonomous agent workflows using PyTorch, FastAPI, and Hugging Face pipelines.",
            "Designed and deployed responsive full-stack interfaces in React & TypeScript with sub-second latency.",
            "Implemented scalable vector search and RAG systems backed by Redis & PostgreSQL.",
        ],
        skills: ["Python", "FastAPI", "PyTorch", "React", "TypeScript", "Docker", "Tailwind CSS"],
    },
    {
        id: "fullstack-dev",
        role: "Full Stack Developer",
        company: "Tech Solutions",
        period: "2023 — 2024",
        location: "Hybrid",
        type: "Full-time",
        description:
            "Led full-stack feature development across multi-tenant web platforms, optimizing API response times and refining responsive UI components.",
        achievements: [
            "Built modular RESTful and GraphQL APIs utilizing Django, Node.js, and PostgreSQL.",
            "Accelerated client-side rendering performance by 35% through code-splitting and asset optimization.",
            "Automated CI/CD deployment pipelines using Docker and GitHub Actions.",
        ],
        skills: ["TypeScript", "Next.js", "Django", "PostgreSQL", "Docker", "AWS", "Git"],
    },
    {
        id: "software-engineer-intern",
        role: "Software Engineering Intern",
        company: "Innovation Labs",
        period: "2022 — 2023",
        location: "On-site",
        type: "Internship",
        description:
            "Collaborated with cross-functional engineering teams to develop automated data pipelines and modernize legacy frontend interfaces.",
        achievements: [
            "Developed automated data extraction and transformation pipelines using Python, Pandas, and NumPy.",
            "Implemented accessible, responsive UI widgets complying with modern web standards.",
            "Authored unit and integration test suites, boosting code test coverage by 25%.",
        ],
        skills: ["Python", "JavaScript", "Pandas", "Flask", "MySQL", "REST APIs"],
    },
];

function Experience(): JSX.Element {
    return (
        <section
            id="experience"
            className="relative w-full min-h-screen py-28 px-4 sm:px-8 max-w-6xl mx-auto font-geist text-soft"
        >
            {/* Ambient Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"/>

            {/* Section Header */}
            <div className="relative z-10 flex flex-col items-center text-center mb-20">
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"/>
                    <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                        Career Timeline
                    </span>
                </div>
                <h2 className="text-5xl sm:text-7xl font-normal tracking-tight bg-linear-to-b from-white via-white/90 to-accent bg-clip-text text-transparent">
                    EXPERIENCE
                </h2>
                <p className="mt-4 text-sm sm:text-base text-soft/60 max-w-md">
                    A summary of my engineering roles, technical impact, and experience building scalable systems.
                </p>
            </div>

            {/* Timeline Container */}
            <div className="relative z-10">
                {/* Vertical Central / Left Line */}
                <div
                    className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/15 to-transparent pointer-events-none"/>

                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row items-start ${
                                    isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Glowing Node */}
                                <div
                                    className="absolute left-4 md:left-1/2 -translate-x-1/2 top-7 z-20 flex items-center justify-center">
                                    <div className="relative flex items-center justify-center">
                                        <div
                                            className="w-5 h-5 rounded-full bg-canvas border-2 border-accent shadow-[0_0_12px_rgba(194,164,255,0.6)] flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                                        isEven ? "md:pr-0 md:text-left" : "md:pl-0 md:text-left"
                                    }`}
                                >
                                    <div
                                        className="group relative rounded-2xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-accent/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_12px_32px_rgba(194,164,255,0.12)] transition-all duration-300">
                                        {/* Subtle Top Inner Highlight */}
                                        <div
                                            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                                        {/* Header Row: Role, Company & Badges */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white tracking-wide group-hover:text-accent transition-colors duration-200">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-sm font-medium text-accent/90 mt-0.5">
                                                    {exp.company}
                                                </p>
                                            </div>

                                            {/* Meta Badges */}
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-soft/80">
                                                    {exp.type}
                                                </span>
                                                <span
                                                    className="text-xs px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium">
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-center gap-1.5 text-xs text-soft/50 mb-4">
                                            <svg
                                                className="w-3.5 h-3.5 text-accent/70"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span>{exp.location}</span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed text-soft/80 mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Achievements Bullet List */}
                                        <ul className="space-y-2 mb-5">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i}
                                                    className="flex items-start text-xs sm:text-sm text-soft/70">
                                                    <span
                                                        className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2.5 shrink-0"/>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack Chips */}
                                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/8 text-soft/70 group-hover:border-accent/20 group-hover:text-soft transition-colors duration-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;
