import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
    view: string;
    setView: (view: string) => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    scrolled: boolean;
    theme: { brass: string; border: string };
}

export const Navigation: React.FC<NavigationProps> = ({ view, setView, isDarkMode, setIsDarkMode, scrolled, theme }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 px-8 lg:px-16 transition-all ${scrolled ? 'py-4 backdrop-blur-md border-b ' + theme.border : 'py-10'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setView('home')}>
                    <div className={`w-6 h-6 rounded-full border border-current flex items-center justify-center`}>
                        <div className={`w-[1px] h-3 rotate-45 ${isDarkMode ? 'bg-[#b59410]' : 'bg-[#003c71]'}`} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.5em] uppercase font-serif text-current">Zenith</span>
                </div>

                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex space-x-6 text-[10px] tracking-[0.3em] uppercase font-bold">
                        <button onClick={() => setView('home')} className={view === 'home' ? theme.brass : 'opacity-50 hover:opacity-100'}>Archive</button>
                        <button onClick={() => setView('gallery')} className={view === 'gallery' ? theme.brass : 'opacity-50 hover:opacity-100'}>Gallery</button>
                    </div>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 opacity-50 hover:opacity-100 transition-opacity">
                        {isDarkMode ? <Sun size={18} className="text-[#b59410]" /> : <Moon size={18} className="text-[#003c71]" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
