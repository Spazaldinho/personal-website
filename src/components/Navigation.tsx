import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    scrolled: boolean;
    theme: { brass: string; border: string };
}

export const Navigation: React.FC<NavigationProps> = ({ isDarkMode, setIsDarkMode, scrolled, theme }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 px-8 lg:px-16 transition-all ${scrolled ? 'py-4 backdrop-blur-md border-b ' + theme.border : 'py-10'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3 cursor-pointer">
                    {/* Removed Logo and Name */}
                    <div />
                </div>

                <div className="flex items-center space-x-8">
                    <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? theme.brass : 'opacity-50 hover:opacity-100 transition-opacity'}
                        >
                            Me
                        </NavLink>
                        <NavLink
                            to="/research"
                            className={({ isActive }) => isActive ? theme.brass : 'opacity-50 hover:opacity-100 transition-opacity'}
                        >
                            Research
                        </NavLink>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) => isActive ? theme.brass : 'opacity-50 hover:opacity-100 transition-opacity'}
                        >
                            Gallery
                        </NavLink>
                    </div>
                    <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 opacity-50 hover:opacity-100 transition-opacity">
                        {isDarkMode ? <Sun size={18} className="text-[#b59410]" /> : <Moon size={18} className="text-[#003c71]" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
