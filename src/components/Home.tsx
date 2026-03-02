import React from 'react';
import { Sparkles, Compass, MapPin, Star, Telescope } from 'lucide-react';

interface HomeProps {
    theme: { brass: string; border: string };
    isDarkMode: boolean;
    setView: (view: string) => void;
}

export const Home: React.FC<HomeProps> = ({ theme, isDarkMode, setView }) => {
    return (
        <main className="max-w-7xl mx-auto px-8 lg:px-16 pt-48 pb-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                <div className="lg:col-span-7 space-y-24">
                    <section className="space-y-12">
                        <div className="flex items-center space-x-4">
                            <h2 className={`text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 ${theme.brass}`}>Find Me</h2>
                            <div className={`h-[1px] flex-grow ${isDarkMode ? 'bg-[#b59410]/20' : 'bg-[#003c71]/10'}`} />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-sm font-medium tracking-tight">
                            <a href="#" className="hover:text-[#b59410] transition-colors">LinkedIn</a>
                            <a href="#" className="hover:text-[#b59410] transition-colors">GitHub</a>
                            <a href="#" className="hover:text-[#b59410] transition-colors">Instagram</a>
                            <button onClick={() => setView('gallery')} className="hover:text-[#b59410] transition-colors text-left">Gallery</button>
                            <a href="#" className="hover:text-[#b59410] transition-colors">Email</a>
                        </div>
                    </section>

                    <section className="space-y-12">
                        <div className="flex items-center space-x-4">
                            <h2 className={`text-[10px] font-bold tracking-[0.4em] uppercase opacity-60 ${theme.brass}`}>2026_Catalog</h2>
                            <div className={`h-[1px] flex-grow ${isDarkMode ? 'bg-[#b59410]/20' : 'bg-[#003c71]/10'}`} />
                        </div>

                        <div className="space-y-12">
                            <div className="group">
                                <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-6 font-serif italic">Experience</h3>
                                <div className="space-y-8">
                                    <div className="flex justify-between items-baseline border-b border-current/5 pb-4">
                                        <div className="flex items-center space-x-4">
                                            <Telescope size={14} className={theme.brass} />
                                            <span className="font-serif text-lg tracking-wide">Griffith Observatory</span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest opacity-50">Resident Observer</span>
                                    </div>
                                    <div className="flex justify-between items-baseline border-b border-current/5 pb-4">
                                        <div className="flex items-center space-x-4">
                                            <Compass size={14} className={theme.brass} />
                                            <span className="font-serif text-lg tracking-wide">Getty Conservation</span>
                                        </div>
                                        <span className="text-[10px] uppercase tracking-widest opacity-50">Spatial Liaison</span>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-6 font-serif italic">Exhibitions</h3>
                                <div className="flex justify-between items-baseline border-b border-current/5 pb-4">
                                    <div className="flex items-center space-x-4">
                                        <Star size={14} className={theme.brass} />
                                        <span className="font-serif text-lg tracking-wide">Celestial Grids v2</span>
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest opacity-50">Mapping the Horizon</span>
                                </div>
                            </div>

                            <div className="group">
                                <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-6 font-serif italic">Coordinates</h3>
                                <div className="grid grid-cols-2 gap-8 text-[11px] font-mono tracking-tighter opacity-70">
                                    <div className="flex flex-col">
                                        <span>LATITUDE</span>
                                        <span className={theme.brass}>34.1184° N</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>LONGITUDE</span>
                                        <span className={theme.brass}>118.3004° W</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="lg:col-span-5 space-y-12">
                    <div className="text-right">
                        <h1 className="text-7xl md:text-8xl font-serif font-light tracking-tighter uppercase leading-[0.8] mb-8">
                            ZENITH <br />
                            <span className={`italic ${theme.brass}`}>STUDIO</span>
                        </h1>
                    </div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed font-serif font-light italic">
                                Curating the intersection of <span className="text-[#b59410]">light</span>, <span className="text-[#b59410]">stone</span>, and the <span className="text-[#b59410]">infinite</span>.
                            </p>
                            <p className="text-sm opacity-70 leading-relaxed font-light">
                                Inspired by the monumental travertine architecture of the Getty and the Art Deco cosmic precision of the Griffith Observatory. My work focuses on modular spatial logic and astronomical interface design.
                            </p>
                        </div>

                        <div className={`relative aspect-[4/5] w-full overflow-hidden ${isDarkMode ? 'bg-[#121826]' : 'bg-[#e5e0d8]'} border border-current/10 shadow-sm transition-colors`}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                            <div className="absolute inset-4 border border-current/5 pointer-events-none flex items-center justify-center">
                                <div className="w-full h-[1px] bg-current/5 absolute" />
                                <div className="h-full w-[1px] bg-current/5 absolute" />
                                <div className="w-32 h-32 rounded-full border border-current/10" />
                            </div>
                            <div className="absolute top-0 right-0 p-10">
                                <Sparkles className={`${theme.brass} animate-pulse`} size={32} strokeWidth={1} />
                            </div>
                            <div className="absolute bottom-10 left-10 space-y-2">
                                <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold text-current">
                                    <MapPin size={12} className={theme.brass} />
                                    <span>Los Angeles, CA</span>
                                </div>
                                <div className="h-[2px] w-12 bg-[#b59410]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
