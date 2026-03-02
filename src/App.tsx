
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Gallery } from './components/Gallery';
import { Research } from './components/Research';

const AppContent = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sync body background for overscroll
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#0a0e1a' : '#f5f2ed';
        document.body.style.transition = 'background-color 0.7s';
    }, [isDarkMode]);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                scrolled={scrolled}
                theme={theme}
            />

            <Routes>
                <Route path="/" element={<Home theme={theme} isDarkMode={isDarkMode} />} />
                <Route path="/research" element={<Research theme={theme} isDarkMode={isDarkMode} />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
