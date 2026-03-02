import React from 'react';
import { BookOpen, ExternalLink, FileText, Calendar, ArrowRight } from 'lucide-react';

interface ResearchProps {
    theme: { brass: string; border: string; bg: string; text: string; accent: string };
    isDarkMode: boolean;
}

const publications = [
    {
        title: "Heterogeneous Node Selection for Supercomputers",
        venue: "Queen's Caesar Lab",
        year: "2026",
        link: "#",
        type: "Ongoing Research",
        abstract: "Designing workload distribution pipelines to optimize heterogeneous node selection across High Performance Computing clusters. Implementing ML-driven allocation strategies for maximizing throughput.",
        tags: ["HPC", "Machine Learning", "Distributed Systems"]
    },
    {
        title: "Quantization for Federated Learning",
        venue: "Inquiry@Queen's Journal",
        year: "2024",
        link: "#",
        type: "Published Paper",
        abstract: "A comprehensive analysis of applying quantization techniques to federated learning environments. Simulated distributed networks to evaluate the trade-offs between model efficiency, bandwidth constraints, and global accuracy.",
        tags: ["Federated Learning", "Quantization", "Neural Networks"]
    }
];

export const Research: React.FC<ResearchProps> = ({ theme, isDarkMode }) => {
    return (
        <main className="max-w-7xl mx-auto px-8 lg:px-16 pt-28 pb-20 relative z-10 min-h-[85vh]">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-6 mb-20 text-center justify-center">
                    <div className={`h-[1px] w-12 ${isDarkMode ? 'bg-[#b59410]/20' : 'bg-[#003c71]/10'}`} />
                    <h2 className={`text-sm font-medium tracking-widest uppercase opacity-60 ${theme.brass}`}>Research & Publications</h2>
                    <div className={`h-[1px] w-12 ${isDarkMode ? 'bg-[#b59410]/20' : 'bg-[#003c71]/10'}`} />
                </div>

                <div className="space-y-12">
                    {publications.map((pub, i) => (
                        <div key={i} className={`group relative p-8 md:p-10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${isDarkMode ? 'bg-[#121826] hover:bg-[#1a2235]' : 'bg-white hover:bg-gray-50'} border ${theme.border}`}>

                            {/* Abstract background accent */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[#b59410]`} />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center space-x-3 mb-3">
                                            <span className={`px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full ${isDarkMode ? 'bg-[#b59410]/10 text-[#b59410]' : 'bg-[#003c71]/10 text-[#003c71]'}`}>
                                                {pub.type}
                                            </span>
                                            <div className="flex items-center space-x-1 opacity-50 text-xs font-medium">
                                                <Calendar size={12} />
                                                <span>{pub.year}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif tracking-tight leading-snug group-hover:text-[#b59410] transition-colors">{pub.title}</h3>
                                        <div className="flex items-center space-x-2 mt-2 opacity-60 text-sm font-medium">
                                            <FileText size={14} />
                                            <span>{pub.venue}</span>
                                        </div>
                                    </div>

                                    <a href={pub.link} className={`hidden md:flex items-center justify-center w-12 h-12 rounded-full border ${theme.border} group-hover:border-[#b59410] group-hover:bg-[#b59410] group-hover:text-white transition-all duration-300 flex-shrink-0`}>
                                        <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </a>
                                </div>

                                <p className="text-sm md:text-base leading-relaxed opacity-70 font-light max-w-2xl mb-8">
                                    {pub.abstract}
                                </p>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {pub.tags.map((tag, j) => (
                                            <span key={j} className={`px-3 py-1 text-xs font-medium rounded-md border ${theme.border} opacity-60 group-hover:opacity-100 transition-opacity`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={pub.link} className={`md:hidden flex items-center space-x-2 text-sm font-bold ${theme.brass}`}>
                                        <span>Read More</span>
                                        <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                    <BookOpen size={24} className={`mb-4 ${theme.brass}`} />
                    <p className="font-serif italic text-sm">More technical notes and publications in progress...</p>
                </div>
            </div>
        </main>
    );
};
