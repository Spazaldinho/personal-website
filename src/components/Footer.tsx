import React from 'react';
import { Info } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="mt-20 border-t border-current/5 py-12 px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 text-current">
                <div className="flex items-center space-x-4 opacity-40">
                    <Info size={14} />
                    <span className="text-[10px] uppercase tracking-[0.4em]">Permanent Collection // v2.0</span>
                </div>
                <div className="flex space-x-12 opacity-40">
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] tracking-widest uppercase mb-1">Elevation</span>
                        <span className="text-[11px] font-mono">1,134 FT</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[9px] tracking-widest uppercase mb-1">Status</span>
                        <span className="text-[11px] font-mono uppercase tracking-tighter">Clear Skies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
