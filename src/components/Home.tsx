import React, { useState } from 'react';
import { Sparkles, MapPin, Briefcase, GraduationCap, ChevronRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HomeProps {
    theme: { brass: string; border: string; bg: string; text: string; accent: string };
    isDarkMode: boolean;
}

const experienceData = [
    {
        role: "Software Engineer Intern",
        company: "Ericsson",
        period: "Jan 2025 - Dec 2025",
        bullets: [
            "Developing and optimizing 5G telecommunication software systems.",
            "Collaborating with cross-functional teams to deploy scalable solutions."
        ]
    },
    {
        role: "Undergrad HPC Researcher",
        company: "Queen's Caesar Lab",
        period: "Sept 2024 - Present",
        bullets: [
            "Researching heterogeneous node selection for High Performance Computing.",
            "Developing ML pipelines to optimize workload distributions across supercomputer clusters."
        ]
    },
    {
        role: "ML Research Intern",
        company: "Queen's University",
        period: "May 2024 - Aug 2024",
        bullets: [
            "Published a paper on Quantization for Federated Learning.",
            "Designed simulated distributed networks to evaluate model efficiency and accuracy."
        ]
    },
    {
        role: "Full-Stack Dev Intern",
        company: "Scotiabank",
        period: "May 2023 - Aug 2023",
        bullets: [
            "Maintained backend microservices using Node.js and Java Spring Boot.",
            "Authored new frontend dashboard components using React and Redux."
        ]
    }
];

const leadershipData = [
    { role: "Director of AI Design", org: "QMIND", period: "May 2024 - Present" },
    { role: "Project Manager", org: "QMIND", period: "Sept 2023 - April 2024" },
    { role: "Developer", org: "QMIND", period: "Sept 2022 - April 2023" },
];

const ExperienceItem = ({ exp, theme }: { exp: typeof experienceData[0], theme: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-current/5 pb-4 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-start md:items-baseline">
                <div className="flex items-start space-x-4">
                    <div className="mt-1 md:mt-0">
                        {isOpen ? <ChevronDown size={14} className={`${theme.brass} opacity-100 transition-all`} /> : <ChevronRight size={14} className={`${theme.brass} opacity-50 group-hover:opacity-100 transition-all`} />}
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4">
                        <span className="font-serif text-lg tracking-wide group-hover:text-[#b59410] transition-colors">{exp.role}</span>
                        <span className="text-sm italic opacity-50">{exp.company}</span>
                    </div>
                </div>
                <span className="text-[10px] tracking-widest opacity-50 font-medium whitespace-nowrap ml-4">{exp.period}</span>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <ul className="list-disc pl-11 space-y-2 text-sm opacity-70 font-sans">
                    {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const Home: React.FC<HomeProps> = ({ theme, isDarkMode }) => {
    return (
        <main className="max-w-7xl mx-auto px-8 lg:px-16 pt-24 pb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                <div className="lg:col-span-7 space-y-20 order-2 lg:order-1">
                    <section className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <h2 className={`text-sm font-medium tracking-widest opacity-60 ${theme.brass}`}>Connect</h2>
                            <div className={`h-[1px] flex-grow w-32 ${isDarkMode ? 'bg-[#b59410]/20' : 'bg-[#003c71]/10'}`} />
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm font-medium tracking-tight">
                            <a href="https://linkedin.com/in/zain-parihar" target="_blank" rel="noreferrer" className={`hover:${theme.accent} opacity-70 hover:opacity-100 transition-all flex items-center gap-2`}>
                                <Linkedin size={14} /> LinkedIn
                            </a>
                            <a href="https://github.com/Spazaldinho" target="_blank" rel="noreferrer" className={`hover:${theme.accent} opacity-70 hover:opacity-100 transition-all flex items-center gap-2`}>
                                <Github size={14} /> GitHub
                            </a>
                            <a href="mailto:zain.parihar@gmail.com" className={`hover:${theme.accent} opacity-70 hover:opacity-100 transition-all flex items-center gap-2`}>
                                <Mail size={14} /> Email
                            </a>
                        </div>
                    </section>

                    <section className="space-y-12">
                        <div className="flex items-center space-x-4">
                            <h2 className={`text-sm font-medium tracking-widest opacity-60 ${theme.brass}`}>Background</h2>
                            <div className={`h-[1px] flex-grow ${isDarkMode ? 'bg-[#b59410]/20' : 'bg-[#003c71]/10'}`} />
                        </div>

                        <div className="space-y-16">
                            <div>
                                <h3 className="text-xs tracking-widest opacity-50 mb-6 font-serif italic flex items-center gap-2">
                                    <Briefcase size={12} className={theme.brass} /> Experience
                                </h3>
                                <div className="space-y-2">
                                    {experienceData.map((exp, i) => (
                                        <ExperienceItem key={i} exp={exp} theme={theme} />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs tracking-widest opacity-50 mb-6 font-serif italic flex items-center gap-2">
                                    <GraduationCap size={12} className={theme.brass} /> Education & Leadership
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start border-b border-current/5 pb-4">
                                        <div className="flex items-start flex-col">
                                            <span className="font-serif text-lg tracking-wide">Queen's University</span>
                                            <span className="text-sm opacity-60 mt-1">B.Comp in AI • Minor in Math</span>
                                            <span className="text-xs font-medium text-[#b59410] mt-2">GPA 3.9 • Dean's Honour List with Distinction</span>
                                        </div>
                                        <span className="text-[10px] tracking-widest opacity-50 font-medium">Class of 2027</span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        {leadershipData.map((l, i) => (
                                            <div key={i} className="flex justify-between items-baseline border-b border-current/5 pb-4">
                                                <div className="flex flex-col">
                                                    <span className="font-serif text-sm tracking-wide">{l.role}</span>
                                                    <span className="text-xs italic opacity-50">{l.org}</span>
                                                </div>
                                                <span className="text-[10px] tracking-widest opacity-50 font-medium whitespace-nowrap ml-2">{l.period}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-end justify-between gap-12 lg:gap-12 text-center md:text-left lg:text-right">

                        <div className="w-full md:w-1/2 lg:w-full space-y-8 lg:space-y-12">
                            <h1 className="text-6xl md:text-8xl font-sans font-light tracking-tight leading-[0.8] mt-2">
                                Zain <br />
                                <span className={`italic font-serif ${theme.brass}`}>Parihar</span>
                            </h1>

                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl lg:text-xl leading-relaxed font-serif font-light italic">
                                    Building <span className={theme.brass}>software</span> systems and <span className={theme.brass}>meaningful</span> AI tools.
                                </p>
                                <p className="text-sm opacity-70 leading-relaxed font-light mx-auto md:mx-0 lg:ml-auto max-w-sm">
                                    I am an AI Researcher and Software Engineer currently studying at Queen's University. I focus on machine learning optimization and designing elegant, scalable software pipelines.
                                </p>
                            </div>
                        </div>

                        <div className={`relative aspect-[4/5] w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto md:mx-0 lg:ml-auto overflow-hidden ${isDarkMode ? 'bg-[#121826]' : 'bg-[#e5e0d8]'} border border-current/10 shadow-sm transition-colors`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10" />
                            <div className="absolute inset-4 border border-current/5 pointer-events-none flex items-center justify-center z-20">
                                <div className="w-full h-[1px] bg-current/5 absolute" />
                                <div className="h-full w-[1px] bg-current/5 absolute" />
                                <div className="w-32 h-32 rounded-full border border-current/10" />
                            </div>
                            <img src="/Photos/2024/PXL_20240816_162009144~2.jpg" alt="Zain" className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[0.2]" />
                            <div className="absolute top-0 right-0 p-10 z-30">
                                <Sparkles className={`${theme.brass} animate-pulse`} size={32} strokeWidth={1} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
