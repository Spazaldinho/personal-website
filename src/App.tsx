import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [view, setView] = useState('home');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const theme = {
        bg: isDarkMode ? 'bg-[#0a0e1a]' : 'bg-[#f5f2ed]',
        text: isDarkMode ? 'text-[#f5f2ed]' : 'text-[#1a1a1a]',
        accent: isDarkMode ? 'text-[#b59410]' : 'text-[#003c71]',
        border: isDarkMode ? 'border-[#b59410]/20' : 'border-[#003c71]/10',
        brass: 'text-[#b59410]',
    };

    return (
        <div className={`min-h-screen transition-colors duration-700 ${theme.bg} ${theme.text} font-sans selection:bg-[#b59410] selection:text-white`}>
            {/* Structural Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#b59410 1px, transparent 1px), linear-gradient(90deg, #b59410 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <Navigation
                view={view}
                setView={setView}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                scrolled={scrolled}
                theme={theme}
            />

            {view === 'gallery' ? (
                <Gallery />
            ) : (
                <Home theme={theme} isDarkMode={isDarkMode} setView={setView} />
            )}

            <Footer />
        </div>
    );
};

export default App;
